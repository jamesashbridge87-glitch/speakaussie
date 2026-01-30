import { Request, Response, NextFunction, RequestHandler } from 'express';

/**
 * Custom error class for application errors with status codes
 */
export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public isOperational = true
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Format error details for logging (includes context like route, method, timestamp)
 */
function formatErrorForLogging(
  err: Error,
  req: Request
): Record<string, unknown> {
  return {
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    query: Object.keys(req.query).length > 0 ? req.query : undefined,
    userId: (req as any).user?.id,
    errorName: err.name,
    errorMessage: err.message,
    stack: err.stack,
  };
}

/**
 * Global error handler middleware.
 * - Logs errors with context (route, timestamp, user)
 * - Returns safe error responses (no stack traces in production)
 * - Distinguishes between operational and programming errors
 */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Log the full error with context
  const logData = formatErrorForLogging(err, req);
  console.error('Error occurred:', JSON.stringify(logData, null, 2));

  // Handle known operational errors
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.message,
    });
    return;
  }

  // Handle Zod validation errors
  if (err.name === 'ZodError') {
    res.status(400).json({
      error: 'Validation failed',
      details: (err as any).errors,
    });
    return;
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    res.status(401).json({
      error: 'Invalid token',
    });
    return;
  }

  if (err.name === 'TokenExpiredError') {
    res.status(401).json({
      error: 'Token expired',
    });
    return;
  }

  // Handle multer errors (file upload)
  if (err.name === 'MulterError') {
    const multerErr = err as any;
    if (multerErr.code === 'LIMIT_FILE_SIZE') {
      res.status(413).json({
        error: 'File too large',
      });
      return;
    }
    res.status(400).json({
      error: 'File upload failed',
    });
    return;
  }

  // Unknown error - don't leak details to client
  res.status(500).json({
    error: 'Internal server error',
  });
}

/**
 * Wrapper for async route handlers to catch errors and pass to error middleware.
 * Eliminates the need for try/catch in every route.
 *
 * Usage:
 *   router.get('/route', asyncHandler(async (req, res) => {
 *     // async code that might throw
 *   }));
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

/**
 * 404 handler for unknown routes
 */
export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    error: 'Not found',
    path: req.path,
  });
}
