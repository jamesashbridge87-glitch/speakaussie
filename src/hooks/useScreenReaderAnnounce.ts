/**
 * Screen Reader Announcements Hook
 * Provides live region announcements for screen readers
 */

import { useCallback, useRef, useEffect } from 'react';
import type { AriaLive } from '../utils/accessibility';

// Singleton live regions to avoid creating multiple
let politeRegion: HTMLDivElement | null = null;
let assertiveRegion: HTMLDivElement | null = null;
let regionCount = 0;

function createLiveRegion(politeness: AriaLive): HTMLDivElement {
  const region = document.createElement('div');
  region.setAttribute('role', 'status');
  region.setAttribute('aria-live', politeness);
  region.setAttribute('aria-atomic', 'true');
  region.className = 'sr-only';
  region.style.cssText = `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  `;
  document.body.appendChild(region);
  return region;
}

function ensureRegions(): void {
  if (!politeRegion) {
    politeRegion = createLiveRegion('polite');
  }
  if (!assertiveRegion) {
    assertiveRegion = createLiveRegion('assertive');
  }
}

function cleanupRegions(): void {
  if (regionCount <= 0) {
    if (politeRegion) {
      politeRegion.remove();
      politeRegion = null;
    }
    if (assertiveRegion) {
      assertiveRegion.remove();
      assertiveRegion = null;
    }
  }
}

interface AnnounceOptions {
  politeness?: AriaLive;
  clearAfter?: number;
}

type AnnounceFunction = (message: string, options?: AnnounceOptions) => void;

interface UseScreenReaderAnnounceReturn {
  announce: AnnounceFunction;
  announcePolite: (message: string) => void;
  announceAssertive: (message: string) => void;
  clear: () => void;
}

export function useScreenReaderAnnounce(): UseScreenReaderAnnounceReturn {
  const timeoutRef = useRef<number | null>(null);

  // Set up and clean up live regions
  useEffect(() => {
    regionCount++;
    ensureRegions();

    return () => {
      regionCount--;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      cleanupRegions();
    };
  }, []);

  const clear = useCallback(() => {
    if (politeRegion) politeRegion.textContent = '';
    if (assertiveRegion) assertiveRegion.textContent = '';
  }, []);

  const announce = useCallback<AnnounceFunction>(
    (message, options = {}) => {
      const { politeness = 'polite', clearAfter = 5000 } = options;

      ensureRegions();

      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Select the appropriate region
      const region = politeness === 'assertive' ? assertiveRegion : politeRegion;

      if (region) {
        // Clear then set (helps with repeated announcements)
        region.textContent = '';

        // Use requestAnimationFrame to ensure the clear is processed
        requestAnimationFrame(() => {
          region.textContent = message;
        });

        // Clear after timeout
        if (clearAfter > 0) {
          timeoutRef.current = window.setTimeout(() => {
            region.textContent = '';
          }, clearAfter);
        }
      }
    },
    []
  );

  const announcePolite = useCallback(
    (message: string) => announce(message, { politeness: 'polite' }),
    [announce]
  );

  const announceAssertive = useCallback(
    (message: string) => announce(message, { politeness: 'assertive' }),
    [announce]
  );

  return {
    announce,
    announcePolite,
    announceAssertive,
    clear,
  };
}

/**
 * Pre-built announcements for common scenarios
 */
export function useAppAnnouncements() {
  const { announce, announcePolite, announceAssertive } = useScreenReaderAnnounce();

  return {
    // Navigation announcements
    pageLoaded: (pageName: string) =>
      announcePolite(`${pageName} page loaded`),

    navigationStarted: () =>
      announcePolite('Loading...'),

    // Session announcements
    sessionStarted: (scenarioName?: string) =>
      announceAssertive(
        scenarioName
          ? `Practice session started: ${scenarioName}`
          : 'Practice session started'
      ),

    sessionEnded: () =>
      announceAssertive('Practice session ended'),

    // Voice/Audio announcements
    listeningStarted: () =>
      announcePolite('Microphone active. Listening for your response.'),

    listeningStopped: () =>
      announcePolite('Microphone stopped.'),

    aiSpeaking: () =>
      announcePolite('Your Aussie Uncle is speaking.'),

    aiFinishedSpeaking: () =>
      announcePolite('Your turn to speak.'),

    // Progress announcements
    progressSaved: () =>
      announcePolite('Progress saved'),

    achievementUnlocked: (name: string) =>
      announceAssertive(`Achievement unlocked: ${name}`),

    levelUp: (level: number) =>
      announceAssertive(`Congratulations! You reached level ${level}`),

    // Error announcements
    errorOccurred: (message: string) =>
      announceAssertive(`Error: ${message}`),

    connectionLost: () =>
      announceAssertive('Connection lost. Please check your internet connection.'),

    connectionRestored: () =>
      announcePolite('Connection restored'),

    // Form announcements
    formSubmitted: () =>
      announcePolite('Form submitted'),

    formError: (fieldName: string, error: string) =>
      announceAssertive(`${fieldName}: ${error}`),

    // Timer announcements
    timeWarning: (minutes: number) =>
      announcePolite(`${minutes} minute${minutes === 1 ? '' : 's'} remaining`),

    timeUp: () =>
      announceAssertive("Time's up!"),

    // Generic
    loading: () =>
      announcePolite('Loading...'),

    loaded: () =>
      announcePolite('Content loaded'),

    custom: announce,
  };
}

/**
 * Hook for announcing route changes
 */
export function useRouteAnnouncer(pageName: string): void {
  const { announcePolite } = useScreenReaderAnnounce();

  useEffect(() => {
    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
      announcePolite(`Navigated to ${pageName}`);
    }, 100);

    return () => clearTimeout(timer);
  }, [pageName, announcePolite]);
}
