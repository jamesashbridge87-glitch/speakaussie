import * as Sentry from '@sentry/react';

/**
 * Initialize Sentry error tracking.
 * Only initializes in production mode or when VITE_SENTRY_DSN is set.
 */
export function initSentry(): void {
  const dsn = import.meta.env.VITE_SENTRY_DSN;

  // Skip initialization in development unless DSN is explicitly set
  if (!dsn) {
    if (import.meta.env.DEV) {
      console.info('[Sentry] Skipping initialization in development (no DSN configured)');
    }
    return;
  }

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    // Enable source maps for readable stack traces
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        // Mask all text and block all media for privacy
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],
    // Sample rates - adjust based on traffic
    // For production, start with 10% of transactions
    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
    // Capture 10% of sessions for replay (errors always captured)
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    // Only send errors from our domain
    allowUrls: [window.location.origin],
    // Don't send PII
    sendDefaultPii: false,
    // Ignore common non-actionable errors
    ignoreErrors: [
      // Network errors that users cause by closing tabs
      'Failed to fetch',
      'NetworkError',
      'AbortError',
      // Browser extensions
      /^chrome-extension:\/\//,
      /^moz-extension:\/\//,
      // Third-party scripts
      /^Script error\.?$/,
      // User cancelled actions
      'ResizeObserver loop limit exceeded',
    ],
  });
}

/**
 * Report an error to Sentry with additional context.
 */
export function reportError(
  error: Error,
  context?: Record<string, unknown>
): void {
  if (context) {
    Sentry.withScope((scope) => {
      Object.entries(context).forEach(([key, value]) => {
        scope.setExtra(key, value);
      });
      Sentry.captureException(error);
    });
  } else {
    Sentry.captureException(error);
  }
}

// Re-export Sentry for advanced usage
export { Sentry };
