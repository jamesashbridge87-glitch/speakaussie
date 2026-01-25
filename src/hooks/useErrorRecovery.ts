/**
 * Error Recovery Hook
 * Provides utilities for handling errors with retry logic and recovery options
 */

import { useState, useCallback, useRef } from 'react';
import {
  AppError,
  toAppError,
  RecoveryAction,
} from '../utils/errors';
import { useToastHelpers } from '../components/ui';

interface RetryOptions {
  maxRetries?: number;
  initialDelay?: number;
  maxDelay?: number;
  backoffMultiplier?: number;
  shouldRetry?: (error: AppError, attempt: number) => boolean;
}

interface ErrorRecoveryState {
  error: AppError | null;
  isRecovering: boolean;
  retryCount: number;
}

interface UseErrorRecoveryReturn {
  error: AppError | null;
  isRecovering: boolean;
  retryCount: number;
  clearError: () => void;
  handleError: (error: unknown) => AppError;
  executeWithRetry: <T>(
    fn: () => Promise<T>,
    options?: RetryOptions
  ) => Promise<T>;
  executeRecoveryAction: (action: RecoveryAction) => Promise<void>;
}

const DEFAULT_RETRY_OPTIONS: Required<RetryOptions> = {
  maxRetries: 3,
  initialDelay: 1000,
  maxDelay: 10000,
  backoffMultiplier: 2,
  shouldRetry: (error: AppError) => error.retryable,
};

export function useErrorRecovery(): UseErrorRecoveryReturn {
  const [state, setState] = useState<ErrorRecoveryState>({
    error: null,
    isRecovering: false,
    retryCount: 0,
  });

  const toast = useToastHelpers();
  const abortControllerRef = useRef<AbortController | null>(null);

  const clearError = useCallback(() => {
    setState({ error: null, isRecovering: false, retryCount: 0 });
  }, []);

  const handleError = useCallback(
    (error: unknown): AppError => {
      const appError = toAppError(error);
      setState((prev) => ({
        ...prev,
        error: appError,
        isRecovering: false,
      }));

      // Show toast based on severity
      if (appError.severity === 'critical' || appError.severity === 'error') {
        toast.error(appError.title, appError.userMessage);
      } else if (appError.severity === 'warning') {
        toast.warning(appError.title, appError.userMessage);
      } else {
        toast.info(appError.title, appError.userMessage);
      }

      // Log for debugging
      if (import.meta.env.DEV) {
        console.error('[ErrorRecovery]', appError.code, appError);
      }

      return appError;
    },
    [toast]
  );

  const sleep = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const executeWithRetry = useCallback(
    async <T>(
      fn: () => Promise<T>,
      options: RetryOptions = {}
    ): Promise<T> => {
      const config = { ...DEFAULT_RETRY_OPTIONS, ...options };
      let lastError: AppError | null = null;
      let delay = config.initialDelay;

      // Create new abort controller for this execution
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
        try {
          setState((prev) => ({
            ...prev,
            isRecovering: attempt > 0,
            retryCount: attempt,
          }));

          const result = await fn();

          // Success - clear error state
          setState({ error: null, isRecovering: false, retryCount: 0 });
          return result;
        } catch (error) {
          lastError = toAppError(error);

          // Check if we should retry
          const shouldRetry =
            attempt < config.maxRetries &&
            config.shouldRetry(lastError, attempt);

          if (!shouldRetry) {
            handleError(lastError);
            throw lastError;
          }

          // Show retry toast
          toast.warning(
            'Retrying...',
            `Attempt ${attempt + 1} of ${config.maxRetries}. Trying again in ${Math.round(delay / 1000)}s.`
          );

          // Wait before retry with exponential backoff
          await sleep(delay);
          delay = Math.min(delay * config.backoffMultiplier, config.maxDelay);
        }
      }

      // All retries exhausted
      throw lastError;
    },
    [handleError, toast]
  );

  const executeRecoveryAction = useCallback(
    async (action: RecoveryAction): Promise<void> => {
      setState((prev) => ({ ...prev, isRecovering: true }));

      try {
        switch (action) {
          case 'retry':
            // The component using this hook should handle the retry logic
            clearError();
            break;

          case 'refresh':
            window.location.reload();
            break;

          case 'login':
            // Navigate to login or trigger auth modal
            // This should be handled by the component
            clearError();
            break;

          case 'upgrade':
            // Navigate to upgrade page
            window.location.href = '/upgrade';
            break;

          case 'contact':
            window.location.href = 'mailto:support@youraussieuncle.com.au';
            break;

          case 'dismiss':
            clearError();
            break;

          case 'clearCache':
            try {
              // Clear application cache
              localStorage.clear();
              sessionStorage.clear();

              // Clear service worker caches if available
              if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(
                  cacheNames.map((name) => caches.delete(name))
                );
              }

              toast.success('Cache Cleared', 'Application cache has been cleared.');
              clearError();
            } catch (err) {
              toast.error('Clear Failed', 'Could not clear cache. Please try manually clearing your browser data.');
            }
            break;

          case 'checkConnection':
            if (navigator.onLine) {
              toast.success('Connected', "You're connected to the internet.");
              clearError();
            } else {
              toast.warning('Offline', "You're still offline. Please check your connection.");
            }
            break;

          case 'grantPermission':
            // Trigger permission request - component should handle specific permission
            clearError();
            break;

          default:
            clearError();
        }
      } catch (error) {
        handleError(error);
      } finally {
        setState((prev) => ({ ...prev, isRecovering: false }));
      }
    },
    [clearError, handleError, toast]
  );

  return {
    error: state.error,
    isRecovering: state.isRecovering,
    retryCount: state.retryCount,
    clearError,
    handleError,
    executeWithRetry,
    executeRecoveryAction,
  };
}

/**
 * Retry utility function (standalone, not a hook)
 * Useful for utility functions that don't need React state
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const config = { ...DEFAULT_RETRY_OPTIONS, ...options };
  let lastError: Error | null = null;
  let delay = config.initialDelay;

  for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      const appError = toAppError(error);

      const shouldRetry =
        attempt < config.maxRetries && config.shouldRetry(appError, attempt);

      if (!shouldRetry) {
        throw lastError;
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
      delay = Math.min(delay * config.backoffMultiplier, config.maxDelay);
    }
  }

  throw lastError;
}

/**
 * Wrap async function with error handling
 * Returns [result, error] tuple
 */
export async function trySafe<T>(
  fn: () => Promise<T>
): Promise<[T, null] | [null, AppError]> {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    return [null, toAppError(error)];
  }
}

/**
 * Create a fetch wrapper with error handling
 */
export function createSafeFetch(baseUrl?: string) {
  return async function safeFetch<T = unknown>(
    url: string,
    options?: RequestInit
  ): Promise<T> {
    const fullUrl = baseUrl ? `${baseUrl}${url}` : url;

    const response = await fetch(fullUrl, options);

    if (!response.ok) {
      let body: { error?: string; message?: string } | undefined;
      try {
        body = await response.json();
      } catch {
        // Response not JSON
      }

      const { parseHttpError } = await import('../utils/errors');
      throw parseHttpError(response.status, body);
    }

    // Handle empty responses
    const text = await response.text();
    if (!text) {
      return undefined as T;
    }

    return JSON.parse(text) as T;
  };
}

/**
 * Network status helper
 */
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const checkConnection = useCallback(async (): Promise<boolean> => {
    if (!navigator.onLine) {
      return false;
    }

    // Try to actually reach the server
    try {
      const response = await fetch('/api/health', {
        method: 'HEAD',
        cache: 'no-store',
      });
      return response.ok;
    } catch {
      return navigator.onLine;
    }
  }, []);

  // Set up event listeners
  useState(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  });

  return { isOnline, checkConnection };
}
