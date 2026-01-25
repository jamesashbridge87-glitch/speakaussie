import { ReactNode } from 'react';
import './Loading.css';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  className?: string;
}

export function Spinner({ size = 'md', color = 'primary', className = '' }: SpinnerProps) {
  return (
    <div
      className={`spinner spinner-${size} spinner-${color} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <svg viewBox="0 0 50 50" className="spinner-svg">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          className="spinner-track"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          className="spinner-indicator"
        />
      </svg>
    </div>
  );
}

interface LoadingOverlayProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingOverlay({ message = 'Loading...', fullScreen = false }: LoadingOverlayProps) {
  return (
    <div className={`loading-overlay ${fullScreen ? 'loading-overlay-fullscreen' : ''}`}>
      <div className="loading-overlay-content">
        <Spinner size="lg" />
        <p className="loading-overlay-message">{message}</p>
      </div>
    </div>
  );
}

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  animation = 'pulse',
}: SkeletonProps) {
  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      className={`skeleton skeleton-${variant} skeleton-${animation} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

interface SkeletonTextProps {
  lines?: number;
  lastLineWidth?: string;
  className?: string;
}

export function SkeletonText({ lines = 3, lastLineWidth = '75%', className = '' }: SkeletonTextProps) {
  return (
    <div className={`skeleton-text ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? lastLineWidth : '100%'}
        />
      ))}
    </div>
  );
}

interface SkeletonCardProps {
  showImage?: boolean;
  showActions?: boolean;
  className?: string;
}

export function SkeletonCard({ showImage = true, showActions = false, className = '' }: SkeletonCardProps) {
  return (
    <div className={`skeleton-card ${className}`}>
      {showImage && (
        <Skeleton variant="rectangular" height={180} className="skeleton-card-image" />
      )}
      <div className="skeleton-card-content">
        <Skeleton variant="text" height={24} width="80%" />
        <SkeletonText lines={2} />
        {showActions && (
          <div className="skeleton-card-actions">
            <Skeleton variant="rectangular" width={100} height={36} />
            <Skeleton variant="rectangular" width={100} height={36} />
          </div>
        )}
      </div>
    </div>
  );
}

interface LoadingButtonProps {
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  loadingText?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function LoadingButton({
  loading = false,
  disabled = false,
  children,
  loadingText,
  onClick,
  className = '',
  type = 'button',
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      className={`loading-button ${loading ? 'loading-button-loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <Spinner size="sm" color="white" className="loading-button-spinner" />}
      <span className={loading ? 'loading-button-text-hidden' : ''}>
        {loading && loadingText ? loadingText : children}
      </span>
    </button>
  );
}

interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success';
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  size = 'md',
  color = 'primary',
  className = '',
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`progress-bar progress-bar-${size} ${className}`}>
      <div
        className={`progress-bar-fill progress-bar-fill-${color}`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
      {showLabel && (
        <span className="progress-bar-label">{Math.round(percentage)}%</span>
      )}
    </div>
  );
}

interface PulsingDotProps {
  count?: number;
  className?: string;
}

export function PulsingDots({ count = 3, className = '' }: PulsingDotProps) {
  return (
    <div className={`pulsing-dots ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="pulsing-dot" style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  );
}
