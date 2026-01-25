/**
 * Accessibility Components
 * Skip links, focus traps, and other a11y UI components
 */

import { useEffect, useRef, useCallback, ReactNode, KeyboardEvent } from 'react';
import { trapFocus, saveFocus, restoreFocus, handleArrowKeyNavigation } from '../../utils/accessibility';
import './Accessibility.css';

/**
 * Skip Link Component
 * Allows keyboard users to skip to main content
 */
interface SkipLinkProps {
  targetId: string;
  children?: ReactNode;
}

export function SkipLink({ targetId, children = 'Skip to main content' }: SkipLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.tabIndex = -1;
      target.focus();
      target.scrollIntoView();
    }
  };

  return (
    <a
      href={`#${targetId}`}
      className="skip-link"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

/**
 * Focus Trap Component
 * Traps focus within a container (useful for modals)
 */
interface FocusTrapProps {
  children: ReactNode;
  active?: boolean;
  restoreFocusOnDeactivate?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement>;
  onEscape?: () => void;
}

export function FocusTrap({
  children,
  active = true,
  restoreFocusOnDeactivate = true,
  initialFocusRef,
  onEscape,
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    // Save current focus
    if (restoreFocusOnDeactivate) {
      saveFocus();
    }

    // Set up focus trap
    cleanupRef.current = trapFocus(containerRef.current);

    // Focus initial element if provided
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    }

    return () => {
      cleanupRef.current?.();
      if (restoreFocusOnDeactivate) {
        restoreFocus();
      }
    };
  }, [active, restoreFocusOnDeactivate, initialFocusRef]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && onEscape) {
      e.preventDefault();
      onEscape();
    }
  };

  return (
    <div ref={containerRef} onKeyDown={handleKeyDown}>
      {children}
    </div>
  );
}

/**
 * Visually Hidden Component
 * Content is hidden visually but accessible to screen readers
 */
interface VisuallyHiddenProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export function VisuallyHidden({ children, as: Component = 'span' }: VisuallyHiddenProps) {
  return <Component className="sr-only">{children}</Component>;
}

/**
 * Roving TabIndex Component
 * Manages keyboard navigation for lists/grids
 */
interface RovingTabIndexProps {
  children: (props: {
    getItemProps: (index: number) => {
      tabIndex: number;
      onKeyDown: (e: KeyboardEvent) => void;
      ref: (el: HTMLElement | null) => void;
    };
    focusedIndex: number;
    setFocusedIndex: (index: number) => void;
  }) => ReactNode;
  itemCount: number;
  orientation?: 'horizontal' | 'vertical' | 'both';
  columns?: number;
  wrap?: boolean;
  onSelect?: (index: number) => void;
}

export function RovingTabIndex({
  children,
  itemCount,
  orientation = 'vertical',
  columns = 1,
  wrap = true,
  onSelect,
}: RovingTabIndexProps) {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const focusedIndexRef = useRef(0);

  const setFocusedIndex = useCallback((index: number) => {
    focusedIndexRef.current = index;
    itemRefs.current[index]?.focus();
  }, []);

  const getItemProps = useCallback(
    (index: number) => ({
      tabIndex: index === focusedIndexRef.current ? 0 : -1,
      onKeyDown: (e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.(index);
          return;
        }

        handleArrowKeyNavigation(e.nativeEvent, index, itemCount, {
          columns,
          wrap,
          orientation,
          onNavigate: setFocusedIndex,
        });
      },
      ref: (el: HTMLElement | null) => {
        itemRefs.current[index] = el;
      },
    }),
    [itemCount, columns, wrap, orientation, setFocusedIndex, onSelect]
  );

  return <>{children({ getItemProps, focusedIndex: focusedIndexRef.current, setFocusedIndex })}</>;
}

/**
 * Live Region Component
 * For dynamic content announcements
 */
interface LiveRegionProps {
  children: ReactNode;
  politeness?: 'polite' | 'assertive';
  atomic?: boolean;
  relevant?: 'additions' | 'removals' | 'text' | 'all' | 'additions text';
}

export function LiveRegion({
  children,
  politeness = 'polite',
  atomic = true,
  relevant = 'additions text',
}: LiveRegionProps) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      aria-relevant={relevant as 'additions' | 'removals' | 'text' | 'all'}
    >
      {children}
    </div>
  );
}

/**
 * Landmark Region Component
 * Semantic landmark wrapper
 */
interface LandmarkProps {
  children: ReactNode;
  as?: 'main' | 'nav' | 'aside' | 'section' | 'header' | 'footer';
  label?: string;
  labelledBy?: string;
}

export function Landmark({
  children,
  as: Component = 'section',
  label,
  labelledBy,
}: LandmarkProps) {
  return (
    <Component aria-label={label} aria-labelledby={labelledBy}>
      {children}
    </Component>
  );
}

/**
 * Heading Level Context
 * Ensures proper heading hierarchy
 */
interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  id?: string;
}

export function Heading({ children, level, className, id }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={className} id={id}>
      {children}
    </Tag>
  );
}

/**
 * Announce on Mount Component
 * Announces content to screen readers when mounted
 */
interface AnnounceOnMountProps {
  message: string;
  politeness?: 'polite' | 'assertive';
}

export function AnnounceOnMount({ message, politeness = 'polite' }: AnnounceOnMountProps) {
  const announceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force announcement by clearing and setting
    if (announceRef.current) {
      announceRef.current.textContent = '';
      requestAnimationFrame(() => {
        if (announceRef.current) {
          announceRef.current.textContent = message;
        }
      });
    }
  }, [message]);

  return (
    <div
      ref={announceRef}
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    />
  );
}

export default {
  SkipLink,
  FocusTrap,
  VisuallyHidden,
  RovingTabIndex,
  LiveRegion,
  Landmark,
  Heading,
  AnnounceOnMount,
};
