/**
 * Privacy-respecting analytics service.
 * - No third-party scripts (works with ad blockers)
 * - No PII collected
 * - Graceful degradation if tracking fails
 */

type EventName =
  | 'page_view'
  | 'session_start'
  | 'scenario_start'
  | 'scenario_complete'
  | 'voice_selected'
  | 'subscription_view'
  | 'subscription_select';

interface AnalyticsEvent {
  name: EventName;
  properties?: Record<string, string | number | boolean>;
  timestamp: string;
}

// Session ID for grouping events (not persistent, resets on page reload)
const sessionId = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);

// Queue for batching events
let eventQueue: AnalyticsEvent[] = [];
let flushTimeout: ReturnType<typeof setTimeout> | null = null;

// Configuration
const FLUSH_INTERVAL_MS = 5000;
const MAX_QUEUE_SIZE = 20;
const API_ENDPOINT = '/api/analytics/events';

/**
 * Track an analytics event.
 * Events are batched and sent periodically for efficiency.
 */
export function trackEvent(
  name: EventName,
  properties?: Record<string, string | number | boolean>
): void {
  // Skip if user has Do Not Track enabled
  if (navigator.doNotTrack === '1') {
    return;
  }

  const event: AnalyticsEvent = {
    name,
    properties,
    timestamp: new Date().toISOString(),
  };

  eventQueue.push(event);

  // Flush immediately if queue is full
  if (eventQueue.length >= MAX_QUEUE_SIZE) {
    flushEvents();
    return;
  }

  // Schedule flush if not already scheduled
  if (!flushTimeout) {
    flushTimeout = setTimeout(flushEvents, FLUSH_INTERVAL_MS);
  }
}

/**
 * Track a page view event.
 */
export function trackPageView(path?: string): void {
  trackEvent('page_view', {
    path: path ?? window.location.pathname,
    referrer: document.referrer || 'direct',
  });
}

/**
 * Track session start (call once on app load).
 */
export function trackSessionStart(): void {
  trackEvent('session_start', {
    sessionId,
    userAgent: navigator.userAgent.slice(0, 100), // Truncate for privacy
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    language: navigator.language,
  });
}

/**
 * Track scenario events.
 */
export function trackScenarioStart(
  scenarioId: string,
  categoryId: string,
  difficulty: string
): void {
  trackEvent('scenario_start', {
    scenarioId,
    categoryId,
    difficulty,
  });
}

export function trackScenarioComplete(
  scenarioId: string,
  categoryId: string,
  durationSeconds: number
): void {
  trackEvent('scenario_complete', {
    scenarioId,
    categoryId,
    durationSeconds,
  });
}

/**
 * Track voice selection.
 */
export function trackVoiceSelected(voiceId: string): void {
  trackEvent('voice_selected', { voiceId });
}

/**
 * Track subscription funnel events.
 */
export function trackSubscriptionView(): void {
  trackEvent('subscription_view');
}

export function trackSubscriptionSelect(planId: string): void {
  trackEvent('subscription_select', { planId });
}

/**
 * Flush queued events to the server.
 */
async function flushEvents(): Promise<void> {
  if (flushTimeout) {
    clearTimeout(flushTimeout);
    flushTimeout = null;
  }

  if (eventQueue.length === 0) {
    return;
  }

  const events = [...eventQueue];
  eventQueue = [];

  try {
    // Use sendBeacon for reliability (works even on page unload)
    const payload = JSON.stringify({ sessionId, events });

    if (navigator.sendBeacon) {
      const sent = navigator.sendBeacon(API_ENDPOINT, payload);
      if (!sent) {
        // Fallback to fetch if sendBeacon fails
        await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        });
      }
    } else {
      // Fallback for older browsers
      await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      });
    }
  } catch {
    // Silently fail - analytics should never break the app
    // Re-queue events for next attempt (with limit to prevent memory issues)
    if (eventQueue.length < MAX_QUEUE_SIZE) {
      eventQueue.unshift(...events.slice(0, MAX_QUEUE_SIZE - eventQueue.length));
    }
  }
}

// Flush on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      flushEvents();
    }
  });

  window.addEventListener('pagehide', () => {
    flushEvents();
  });
}
