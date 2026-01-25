/**
 * Accessibility Utilities
 * ARIA helpers, focus management, and accessibility-related utilities
 */

// ARIA Live Region Politeness Levels
export type AriaLive = 'off' | 'polite' | 'assertive';

// Common ARIA Roles
export type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'button'
  | 'checkbox'
  | 'dialog'
  | 'grid'
  | 'gridcell'
  | 'link'
  | 'listbox'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'option'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'searchbox'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'tablist'
  | 'tabpanel'
  | 'textbox'
  | 'timer'
  | 'tooltip'
  | 'tree'
  | 'treeitem';

/**
 * Generate unique IDs for ARIA relationships
 */
let idCounter = 0;
export function generateId(prefix = 'a11y'): string {
  return `${prefix}-${++idCounter}`;
}

/**
 * Create ARIA labelledby string from multiple IDs
 */
export function ariaLabelledBy(...ids: (string | undefined | null)[]): string {
  return ids.filter(Boolean).join(' ');
}

/**
 * Create ARIA describedby string from multiple IDs
 */
export function ariaDescribedBy(...ids: (string | undefined | null)[]): string {
  return ids.filter(Boolean).join(' ');
}

/**
 * Common ARIA props for interactive elements
 */
export interface AriaButtonProps {
  role?: 'button';
  tabIndex?: number;
  'aria-pressed'?: boolean;
  'aria-expanded'?: boolean;
  'aria-disabled'?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export function getButtonProps(options: {
  label?: string;
  labelledBy?: string;
  describedBy?: string;
  pressed?: boolean;
  expanded?: boolean;
  disabled?: boolean;
}): AriaButtonProps {
  return {
    role: 'button',
    tabIndex: options.disabled ? -1 : 0,
    'aria-pressed': options.pressed,
    'aria-expanded': options.expanded,
    'aria-disabled': options.disabled,
    'aria-label': options.label,
    'aria-labelledby': options.labelledBy,
    'aria-describedby': options.describedBy,
  };
}

/**
 * ARIA props for dialog/modal elements
 */
export interface AriaDialogProps {
  role: 'dialog' | 'alertdialog';
  'aria-modal': boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}

export function getDialogProps(options: {
  isAlert?: boolean;
  label?: string;
  labelledBy?: string;
  describedBy?: string;
}): AriaDialogProps {
  return {
    role: options.isAlert ? 'alertdialog' : 'dialog',
    'aria-modal': true,
    'aria-label': options.label,
    'aria-labelledby': options.labelledBy,
    'aria-describedby': options.describedBy,
  };
}

/**
 * ARIA props for progress indicators
 */
export interface AriaProgressProps {
  role: 'progressbar';
  'aria-valuenow'?: number;
  'aria-valuemin': number;
  'aria-valuemax': number;
  'aria-valuetext'?: string;
  'aria-label'?: string;
}

export function getProgressProps(options: {
  value?: number;
  min?: number;
  max?: number;
  label?: string;
  valueText?: string;
}): AriaProgressProps {
  const { value, min = 0, max = 100, label, valueText } = options;
  return {
    role: 'progressbar',
    'aria-valuenow': value,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuetext': valueText,
    'aria-label': label,
  };
}

/**
 * ARIA props for tab interfaces
 */
export interface AriaTabProps {
  role: 'tab';
  id: string;
  'aria-selected': boolean;
  'aria-controls': string;
  tabIndex: number;
}

export interface AriaTabPanelProps {
  role: 'tabpanel';
  id: string;
  'aria-labelledby': string;
  tabIndex: number;
  hidden?: boolean;
}

export function getTabProps(options: {
  id: string;
  panelId: string;
  isSelected: boolean;
}): AriaTabProps {
  return {
    role: 'tab',
    id: options.id,
    'aria-selected': options.isSelected,
    'aria-controls': options.panelId,
    tabIndex: options.isSelected ? 0 : -1,
  };
}

export function getTabPanelProps(options: {
  id: string;
  tabId: string;
  isSelected: boolean;
}): AriaTabPanelProps {
  return {
    role: 'tabpanel',
    id: options.id,
    'aria-labelledby': options.tabId,
    tabIndex: 0,
    hidden: !options.isSelected,
  };
}

/**
 * ARIA props for listbox/combobox
 */
export interface AriaListboxProps {
  role: 'listbox';
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-activedescendant'?: string;
  'aria-multiselectable'?: boolean;
}

export interface AriaOptionProps {
  role: 'option';
  id: string;
  'aria-selected': boolean;
  'aria-disabled'?: boolean;
}

export function getListboxProps(options: {
  label?: string;
  labelledBy?: string;
  activeDescendant?: string;
  multiSelectable?: boolean;
}): AriaListboxProps {
  return {
    role: 'listbox',
    'aria-label': options.label,
    'aria-labelledby': options.labelledBy,
    'aria-activedescendant': options.activeDescendant,
    'aria-multiselectable': options.multiSelectable,
  };
}

export function getOptionProps(options: {
  id: string;
  isSelected: boolean;
  isDisabled?: boolean;
}): AriaOptionProps {
  return {
    role: 'option',
    id: options.id,
    'aria-selected': options.isSelected,
    'aria-disabled': options.isDisabled,
  };
}

/**
 * Focus management utilities
 */

// Get all focusable elements within a container
export function getFocusableElements(
  container: HTMLElement
): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]',
  ];

  const elements = container.querySelectorAll<HTMLElement>(
    focusableSelectors.join(', ')
  );

  return Array.from(elements).filter(
    (el) =>
      !el.hasAttribute('disabled') &&
      el.getAttribute('aria-hidden') !== 'true' &&
      el.offsetParent !== null // visible
  );
}

// Trap focus within a container
export function trapFocus(container: HTMLElement): () => void {
  const focusableElements = getFocusableElements(container);
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable?.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);

  // Focus first element
  firstFocusable?.focus();

  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

// Save and restore focus
let savedFocus: HTMLElement | null = null;

export function saveFocus(): void {
  savedFocus = document.activeElement as HTMLElement;
}

export function restoreFocus(): void {
  if (savedFocus && typeof savedFocus.focus === 'function') {
    savedFocus.focus();
    savedFocus = null;
  }
}

/**
 * Skip link utility
 */
export function createSkipLink(targetId: string, text = 'Skip to main content'): HTMLAnchorElement {
  const link = document.createElement('a');
  link.href = `#${targetId}`;
  link.className = 'skip-link sr-only';
  link.textContent = text;

  link.addEventListener('focus', () => {
    link.classList.remove('sr-only');
  });

  link.addEventListener('blur', () => {
    link.classList.add('sr-only');
  });

  return link;
}

/**
 * Keyboard navigation helpers for lists/grids
 */
export type NavigationDirection = 'up' | 'down' | 'left' | 'right' | 'home' | 'end';

export function getNextIndex(
  currentIndex: number,
  totalItems: number,
  direction: NavigationDirection,
  columns = 1,
  wrap = true
): number {
  switch (direction) {
    case 'up': {
      const newIndex = currentIndex - columns;
      if (newIndex >= 0) return newIndex;
      return wrap ? totalItems - 1 : currentIndex;
    }
    case 'down': {
      const newIndex = currentIndex + columns;
      if (newIndex < totalItems) return newIndex;
      return wrap ? 0 : currentIndex;
    }
    case 'left': {
      if (currentIndex > 0) return currentIndex - 1;
      return wrap ? totalItems - 1 : currentIndex;
    }
    case 'right': {
      if (currentIndex < totalItems - 1) return currentIndex + 1;
      return wrap ? 0 : currentIndex;
    }
    case 'home':
      return 0;
    case 'end':
      return totalItems - 1;
    default:
      return currentIndex;
  }
}

export function handleArrowKeyNavigation(
  event: KeyboardEvent,
  currentIndex: number,
  totalItems: number,
  options: {
    columns?: number;
    wrap?: boolean;
    onNavigate: (newIndex: number) => void;
    orientation?: 'horizontal' | 'vertical' | 'both';
  }
): void {
  const { columns = 1, wrap = true, onNavigate, orientation = 'both' } = options;

  let direction: NavigationDirection | null = null;

  switch (event.key) {
    case 'ArrowUp':
      if (orientation === 'vertical' || orientation === 'both') {
        direction = 'up';
      }
      break;
    case 'ArrowDown':
      if (orientation === 'vertical' || orientation === 'both') {
        direction = 'down';
      }
      break;
    case 'ArrowLeft':
      if (orientation === 'horizontal' || orientation === 'both') {
        direction = 'left';
      }
      break;
    case 'ArrowRight':
      if (orientation === 'horizontal' || orientation === 'both') {
        direction = 'right';
      }
      break;
    case 'Home':
      direction = 'home';
      break;
    case 'End':
      direction = 'end';
      break;
  }

  if (direction) {
    event.preventDefault();
    const newIndex = getNextIndex(currentIndex, totalItems, direction, columns, wrap);
    onNavigate(newIndex);
  }
}

/**
 * Reduced motion detection
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * High contrast mode detection
 */
export function prefersHighContrast(): boolean {
  return window.matchMedia('(prefers-contrast: more)').matches;
}

/**
 * Color scheme preference
 */
export function prefersDarkMode(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
