import { useEffect, useCallback, useState } from 'react';

export interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  meta?: boolean;
  description: string;
  action: () => void;
  enabled?: boolean;
}

interface UseKeyboardShortcutsOptions {
  enabled?: boolean;
  preventDefault?: boolean;
}

export function useKeyboardShortcuts(
  shortcuts: KeyboardShortcut[],
  options: UseKeyboardShortcutsOptions = {}
) {
  const { enabled = true, preventDefault = true } = options;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      // Don't trigger shortcuts when typing in inputs
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      for (const shortcut of shortcuts) {
        if (shortcut.enabled === false) continue;

        const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const ctrlMatch = shortcut.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
        const shiftMatch = shortcut.shift ? event.shiftKey : !event.shiftKey;
        const altMatch = shortcut.alt ? event.altKey : !event.altKey;

        if (keyMatch && ctrlMatch && shiftMatch && altMatch) {
          if (preventDefault) {
            event.preventDefault();
          }
          shortcut.action();
          return;
        }
      }
    },
    [shortcuts, enabled, preventDefault]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

// Hook to show/hide keyboard shortcuts help
export function useKeyboardShortcutsHelp() {
  const [isOpen, setIsOpen] = useState(false);

  const openHelp = useCallback(() => setIsOpen(true), []);
  const closeHelp = useCallback(() => setIsOpen(false), []);
  const toggleHelp = useCallback(() => setIsOpen((prev) => !prev), []);

  // Register the ? shortcut to open help
  useKeyboardShortcuts([
    {
      key: '?',
      shift: true,
      description: 'Show keyboard shortcuts',
      action: toggleHelp,
    },
    {
      key: 'Escape',
      description: 'Close dialogs',
      action: closeHelp,
      enabled: isOpen,
    },
  ]);

  return { isOpen, openHelp, closeHelp, toggleHelp };
}

// Predefined shortcuts for the app
export function getAppShortcuts(handlers: {
  onStartSession?: () => void;
  onEndSession?: () => void;
  onToggleMute?: () => void;
  onShowProgress?: () => void;
  onNavigateHome?: () => void;
  onNavigateSlang?: () => void;
}): KeyboardShortcut[] {
  return [
    {
      key: 's',
      description: 'Start practice session',
      action: handlers.onStartSession || (() => {}),
      enabled: !!handlers.onStartSession,
    },
    {
      key: 'e',
      description: 'End current session',
      action: handlers.onEndSession || (() => {}),
      enabled: !!handlers.onEndSession,
    },
    {
      key: 'm',
      description: 'Toggle microphone mute',
      action: handlers.onToggleMute || (() => {}),
      enabled: !!handlers.onToggleMute,
    },
    {
      key: 'p',
      description: 'Show/hide progress',
      action: handlers.onShowProgress || (() => {}),
      enabled: !!handlers.onShowProgress,
    },
    {
      key: 'h',
      description: 'Go to home/practice',
      action: handlers.onNavigateHome || (() => {}),
      enabled: !!handlers.onNavigateHome,
    },
    {
      key: 'l',
      description: 'Go to slang learning',
      action: handlers.onNavigateSlang || (() => {}),
      enabled: !!handlers.onNavigateSlang,
    },
  ];
}

// Format shortcut for display
export function formatShortcut(shortcut: KeyboardShortcut): string {
  const parts: string[] = [];

  if (shortcut.ctrl) parts.push('Ctrl');
  if (shortcut.alt) parts.push('Alt');
  if (shortcut.shift) parts.push('Shift');
  if (shortcut.meta) parts.push('Cmd');

  // Format special keys
  let keyDisplay = shortcut.key;
  if (shortcut.key === ' ') keyDisplay = 'Space';
  if (shortcut.key === 'ArrowUp') keyDisplay = '↑';
  if (shortcut.key === 'ArrowDown') keyDisplay = '↓';
  if (shortcut.key === 'ArrowLeft') keyDisplay = '←';
  if (shortcut.key === 'ArrowRight') keyDisplay = '→';
  if (shortcut.key === 'Escape') keyDisplay = 'Esc';

  parts.push(keyDisplay.toUpperCase());

  return parts.join(' + ');
}
