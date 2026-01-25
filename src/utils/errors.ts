/**
 * Granular Error Types and Recovery Utilities
 * Provides structured error handling with user-friendly messages and recovery options
 */

// Error Categories
export type ErrorCategory =
  | 'network'
  | 'auth'
  | 'validation'
  | 'permission'
  | 'notFound'
  | 'rateLimit'
  | 'server'
  | 'storage'
  | 'media'
  | 'unknown';

// Error Severity Levels
export type ErrorSeverity = 'info' | 'warning' | 'error' | 'critical';

// Recovery Action Types
export type RecoveryAction =
  | 'retry'
  | 'refresh'
  | 'login'
  | 'upgrade'
  | 'contact'
  | 'dismiss'
  | 'clearCache'
  | 'checkConnection'
  | 'grantPermission';

// Recovery Option
export interface RecoveryOption {
  action: RecoveryAction;
  label: string;
  description?: string;
  handler?: () => void | Promise<void>;
}

// Structured App Error
export interface AppErrorDetails {
  code: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  title: string;
  message: string;
  technicalDetails?: string;
  recoveryOptions: RecoveryOption[];
  retryable: boolean;
  reportable: boolean;
}

// Custom App Error Class
export class AppError extends Error {
  public readonly code: string;
  public readonly category: ErrorCategory;
  public readonly severity: ErrorSeverity;
  public readonly title: string;
  public readonly userMessage: string;
  public readonly technicalDetails?: string;
  public readonly recoveryOptions: RecoveryOption[];
  public readonly retryable: boolean;
  public readonly reportable: boolean;
  public readonly timestamp: Date;
  public readonly originalError?: Error;

  constructor(details: AppErrorDetails, originalError?: Error) {
    super(details.message);
    this.name = 'AppError';
    this.code = details.code;
    this.category = details.category;
    this.severity = details.severity;
    this.title = details.title;
    this.userMessage = details.message;
    this.technicalDetails = details.technicalDetails;
    this.recoveryOptions = details.recoveryOptions;
    this.retryable = details.retryable;
    this.reportable = details.reportable;
    this.timestamp = new Date();
    this.originalError = originalError;

    // Maintain proper stack trace (V8 environments)
    const ErrorWithCapture = Error as typeof Error & {
      captureStackTrace?: (targetObject: object, constructorOpt?: Function) => void;
    };
    if (ErrorWithCapture.captureStackTrace) {
      ErrorWithCapture.captureStackTrace(this, AppError);
    }
  }

  toJSON() {
    return {
      code: this.code,
      category: this.category,
      severity: this.severity,
      title: this.title,
      message: this.userMessage,
      technicalDetails: this.technicalDetails,
      timestamp: this.timestamp.toISOString(),
      retryable: this.retryable,
    };
  }
}

// Error Factory Functions
export const ErrorFactory = {
  // Network Errors
  networkError: (originalError?: Error): AppError =>
    new AppError(
      {
        code: 'NETWORK_ERROR',
        category: 'network',
        severity: 'error',
        title: 'Connection Problem',
        message:
          "We couldn't connect to the server. Please check your internet connection and try again.",
        technicalDetails: originalError?.message,
        recoveryOptions: [
          { action: 'retry', label: 'Try Again' },
          { action: 'checkConnection', label: 'Check Connection' },
        ],
        retryable: true,
        reportable: false,
      },
      originalError
    ),

  timeout: (operation?: string): AppError =>
    new AppError({
      code: 'REQUEST_TIMEOUT',
      category: 'network',
      severity: 'warning',
      title: 'Request Timed Out',
      message: `The ${operation || 'request'} took too long to complete. This might be due to a slow connection.`,
      recoveryOptions: [
        { action: 'retry', label: 'Try Again' },
        { action: 'checkConnection', label: 'Check Connection' },
      ],
      retryable: true,
      reportable: false,
    }),

  offline: (): AppError =>
    new AppError({
      code: 'OFFLINE',
      category: 'network',
      severity: 'info',
      title: "You're Offline",
      message:
        "You're currently offline. Some features may be limited until you reconnect.",
      recoveryOptions: [
        { action: 'checkConnection', label: 'Check Connection' },
        { action: 'dismiss', label: 'Continue Offline' },
      ],
      retryable: false,
      reportable: false,
    }),

  // Authentication Errors
  unauthorized: (): AppError =>
    new AppError({
      code: 'UNAUTHORIZED',
      category: 'auth',
      severity: 'warning',
      title: 'Session Expired',
      message: 'Your session has expired. Please log in again to continue.',
      recoveryOptions: [
        { action: 'login', label: 'Log In' },
        { action: 'dismiss', label: 'Continue as Guest' },
      ],
      retryable: false,
      reportable: false,
    }),

  invalidCredentials: (): AppError =>
    new AppError({
      code: 'INVALID_CREDENTIALS',
      category: 'auth',
      severity: 'warning',
      title: 'Login Failed',
      message:
        "The email or password you entered doesn't match our records. Please try again.",
      recoveryOptions: [
        { action: 'retry', label: 'Try Again' },
        { action: 'contact', label: 'Reset Password' },
      ],
      retryable: true,
      reportable: false,
    }),

  accountLocked: (): AppError =>
    new AppError({
      code: 'ACCOUNT_LOCKED',
      category: 'auth',
      severity: 'error',
      title: 'Account Locked',
      message:
        'Your account has been temporarily locked due to multiple failed login attempts. Please try again later or contact support.',
      recoveryOptions: [
        { action: 'contact', label: 'Contact Support' },
      ],
      retryable: false,
      reportable: false,
    }),

  // Validation Errors
  validationError: (field: string, message: string): AppError =>
    new AppError({
      code: 'VALIDATION_ERROR',
      category: 'validation',
      severity: 'warning',
      title: 'Invalid Input',
      message: `${field}: ${message}`,
      recoveryOptions: [{ action: 'dismiss', label: 'OK' }],
      retryable: true,
      reportable: false,
    }),

  // Permission Errors
  microphonePermissionDenied: (): AppError =>
    new AppError({
      code: 'MICROPHONE_PERMISSION_DENIED',
      category: 'permission',
      severity: 'error',
      title: 'Microphone Access Required',
      message:
        'SpeakAussie needs access to your microphone for voice practice. Please enable microphone access in your browser settings.',
      recoveryOptions: [
        { action: 'grantPermission', label: 'Grant Access' },
        { action: 'dismiss', label: "I'll Use Text Instead" },
      ],
      retryable: true,
      reportable: false,
    }),

  notificationPermissionDenied: (): AppError =>
    new AppError({
      code: 'NOTIFICATION_PERMISSION_DENIED',
      category: 'permission',
      severity: 'info',
      title: 'Notifications Disabled',
      message:
        "Enable notifications to get reminders for your daily practice goals. You can change this in your browser settings anytime.",
      recoveryOptions: [
        { action: 'grantPermission', label: 'Enable Notifications' },
        { action: 'dismiss', label: 'Not Now' },
      ],
      retryable: true,
      reportable: false,
    }),

  // Rate Limit Errors
  rateLimitExceeded: (resetTime?: Date): AppError =>
    new AppError({
      code: 'RATE_LIMIT_EXCEEDED',
      category: 'rateLimit',
      severity: 'warning',
      title: 'Slow Down',
      message: resetTime
        ? `You've made too many requests. Please wait until ${resetTime.toLocaleTimeString()} before trying again.`
        : "You've made too many requests. Please wait a moment before trying again.",
      recoveryOptions: [
        { action: 'dismiss', label: 'OK' },
      ],
      retryable: true,
      reportable: false,
    }),

  dailyLimitReached: (): AppError =>
    new AppError({
      code: 'DAILY_LIMIT_REACHED',
      category: 'rateLimit',
      severity: 'info',
      title: 'Daily Limit Reached',
      message:
        "You've used all your free practice minutes for today. Upgrade to premium for unlimited practice!",
      recoveryOptions: [
        { action: 'upgrade', label: 'Upgrade to Premium' },
        { action: 'dismiss', label: 'Come Back Tomorrow' },
      ],
      retryable: false,
      reportable: false,
    }),

  // Not Found Errors
  scenarioNotFound: (scenarioId?: string): AppError =>
    new AppError({
      code: 'SCENARIO_NOT_FOUND',
      category: 'notFound',
      severity: 'warning',
      title: 'Scenario Not Found',
      message: scenarioId
        ? `The scenario "${scenarioId}" couldn't be found. It may have been removed or the link is incorrect.`
        : "We couldn't find the scenario you're looking for.",
      recoveryOptions: [
        { action: 'dismiss', label: 'Browse Scenarios' },
      ],
      retryable: false,
      reportable: false,
    }),

  sessionNotFound: (): AppError =>
    new AppError({
      code: 'SESSION_NOT_FOUND',
      category: 'notFound',
      severity: 'warning',
      title: 'Session Not Found',
      message:
        "We couldn't find this practice session. It may have expired or been deleted.",
      recoveryOptions: [
        { action: 'dismiss', label: 'Start New Session' },
      ],
      retryable: false,
      reportable: false,
    }),

  // Server Errors
  serverError: (originalError?: Error): AppError =>
    new AppError(
      {
        code: 'SERVER_ERROR',
        category: 'server',
        severity: 'error',
        title: 'Something Went Wrong',
        message:
          "We're experiencing technical difficulties. Our team has been notified and is working on it.",
        technicalDetails: originalError?.message,
        recoveryOptions: [
          { action: 'retry', label: 'Try Again' },
          { action: 'contact', label: 'Contact Support' },
        ],
        retryable: true,
        reportable: true,
      },
      originalError
    ),

  maintenanceMode: (): AppError =>
    new AppError({
      code: 'MAINTENANCE_MODE',
      category: 'server',
      severity: 'info',
      title: 'Under Maintenance',
      message:
        "We're currently performing scheduled maintenance. Please check back in a few minutes.",
      recoveryOptions: [
        { action: 'refresh', label: 'Check Status' },
      ],
      retryable: true,
      reportable: false,
    }),

  // Storage Errors
  storageQuotaExceeded: (): AppError =>
    new AppError({
      code: 'STORAGE_QUOTA_EXCEEDED',
      category: 'storage',
      severity: 'warning',
      title: 'Storage Full',
      message:
        "Your browser's storage is full. Some data may not be saved. Consider clearing old data.",
      recoveryOptions: [
        { action: 'clearCache', label: 'Clear Cache' },
        { action: 'dismiss', label: 'Dismiss' },
      ],
      retryable: false,
      reportable: false,
    }),

  storageUnavailable: (): AppError =>
    new AppError({
      code: 'STORAGE_UNAVAILABLE',
      category: 'storage',
      severity: 'warning',
      title: 'Storage Unavailable',
      message:
        "We can't save your progress locally. This might happen in private browsing mode.",
      recoveryOptions: [
        { action: 'dismiss', label: 'Continue Without Saving' },
      ],
      retryable: false,
      reportable: false,
    }),

  // Media Errors
  audioPlaybackFailed: (): AppError =>
    new AppError({
      code: 'AUDIO_PLAYBACK_FAILED',
      category: 'media',
      severity: 'warning',
      title: 'Audio Playback Failed',
      message:
        "We couldn't play the audio. Please check your device's audio settings.",
      recoveryOptions: [
        { action: 'retry', label: 'Try Again' },
        { action: 'dismiss', label: 'Skip' },
      ],
      retryable: true,
      reportable: false,
    }),

  speechRecognitionFailed: (reason?: string): AppError =>
    new AppError({
      code: 'SPEECH_RECOGNITION_FAILED',
      category: 'media',
      severity: 'warning',
      title: "Couldn't Hear You",
      message: reason || "We couldn't understand what you said. Please try speaking more clearly.",
      recoveryOptions: [
        { action: 'retry', label: 'Try Again' },
        { action: 'dismiss', label: 'Type Instead' },
      ],
      retryable: true,
      reportable: false,
    }),

  voiceSynthesisFailed: (): AppError =>
    new AppError({
      code: 'VOICE_SYNTHESIS_FAILED',
      category: 'media',
      severity: 'warning',
      title: 'Voice Generation Failed',
      message:
        "We couldn't generate the voice response. Please try again.",
      recoveryOptions: [
        { action: 'retry', label: 'Try Again' },
        { action: 'dismiss', label: 'Show Text Instead' },
      ],
      retryable: true,
      reportable: false,
    }),

  // Unknown Errors
  unknown: (originalError?: Error): AppError =>
    new AppError(
      {
        code: 'UNKNOWN_ERROR',
        category: 'unknown',
        severity: 'error',
        title: 'Unexpected Error',
        message:
          'Something unexpected happened. Please try again or contact support if the problem persists.',
        technicalDetails: originalError?.message,
        recoveryOptions: [
          { action: 'retry', label: 'Try Again' },
          { action: 'refresh', label: 'Refresh Page' },
          { action: 'contact', label: 'Contact Support' },
        ],
        retryable: true,
        reportable: true,
      },
      originalError
    ),
};

// Parse HTTP status codes to AppError
export function parseHttpError(
  status: number,
  body?: { error?: string; message?: string }
): AppError {
  const message = body?.error || body?.message;

  switch (status) {
    case 400:
      return ErrorFactory.validationError('Request', message || 'Invalid request');
    case 401:
      return ErrorFactory.unauthorized();
    case 403:
      return ErrorFactory.invalidCredentials();
    case 404:
      return ErrorFactory.sessionNotFound();
    case 429:
      return ErrorFactory.rateLimitExceeded();
    case 500:
    case 502:
    case 503:
      return ErrorFactory.serverError(new Error(message));
    case 504:
      return ErrorFactory.timeout();
    default:
      return ErrorFactory.unknown(new Error(`HTTP ${status}: ${message}`));
  }
}

// Type guard for AppError
export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError;
}

// Convert any error to AppError
export function toAppError(error: unknown): AppError {
  if (isAppError(error)) {
    return error;
  }

  if (error instanceof TypeError && error.message.includes('fetch')) {
    return ErrorFactory.networkError(error);
  }

  if (error instanceof DOMException) {
    if (error.name === 'NotAllowedError') {
      return ErrorFactory.microphonePermissionDenied();
    }
    if (error.name === 'QuotaExceededError') {
      return ErrorFactory.storageQuotaExceeded();
    }
  }

  if (error instanceof Error) {
    return ErrorFactory.unknown(error);
  }

  return ErrorFactory.unknown(new Error(String(error)));
}
