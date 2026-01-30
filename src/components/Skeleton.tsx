import './Skeleton.css';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  count?: number;
  className?: string;
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  count = 1,
  className = ''
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const elements = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={`skeleton skeleton-${variant} ${className}`}
      style={style}
      aria-hidden="true"
    />
  ));

  return <>{elements}</>;
}

// Pre-built skeleton patterns for common use cases
export function ScenarioCardSkeleton() {
  return (
    <div className="skeleton-scenario-card" aria-hidden="true">
      <Skeleton variant="rectangular" height={120} />
      <div className="skeleton-scenario-content">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  );
}

export function ScenarioGridSkeleton() {
  return (
    <div className="skeleton-scenario-grid" role="status" aria-busy="true" aria-label="Loading scenarios">
      {Array.from({ length: 6 }, (_, i) => (
        <ScenarioCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function StatCardSkeleton() {
  return (
    <div className="skeleton-stat-card" aria-hidden="true">
      <Skeleton variant="circular" width={48} height={48} />
      <div className="skeleton-stat-content">
        <Skeleton variant="text" width="50%" height={24} />
        <Skeleton variant="text" width="70%" height={16} />
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="skeleton-dashboard" role="status" aria-busy="true" aria-label="Loading dashboard">
      <div className="skeleton-header">
        <Skeleton variant="text" width="40%" height={32} />
      </div>
      <div className="skeleton-stats-row">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
      <div className="skeleton-progress-section">
        <Skeleton variant="text" width="30%" height={20} />
        <Skeleton variant="rectangular" height={12} />
        <Skeleton variant="text" width="50%" height={16} />
      </div>
    </div>
  );
}

export function FlashcardSkeleton() {
  return (
    <div className="skeleton-flashcard" role="status" aria-busy="true" aria-label="Loading flashcard">
      <Skeleton variant="rectangular" height={280} className="skeleton-flashcard-main" />
      <div className="skeleton-flashcard-nav">
        <Skeleton variant="rectangular" width={80} height={44} />
        <Skeleton variant="text" width={60} />
        <Skeleton variant="rectangular" width={80} height={44} />
      </div>
    </div>
  );
}

export function ListItemSkeleton() {
  return (
    <div className="skeleton-list-item" aria-hidden="true">
      <Skeleton variant="circular" width={40} height={40} />
      <div className="skeleton-list-content">
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  );
}

export function ListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="skeleton-list" role="status" aria-busy="true" aria-label="Loading list">
      {Array.from({ length: count }, (_, i) => (
        <ListItemSkeleton key={i} />
      ))}
    </div>
  );
}
