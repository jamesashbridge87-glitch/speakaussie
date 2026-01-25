import { KeyboardShortcut, formatShortcut } from '../../hooks/useKeyboardShortcuts';
import './KeyboardShortcutsHelp.css';

interface KeyboardShortcutsHelpProps {
  isOpen: boolean;
  onClose: () => void;
  shortcuts: KeyboardShortcut[];
}

export function KeyboardShortcutsHelp({ isOpen, onClose, shortcuts }: KeyboardShortcutsHelpProps) {
  if (!isOpen) return null;

  const enabledShortcuts = shortcuts.filter((s) => s.enabled !== false);

  // Group shortcuts by category
  const generalShortcuts = [
    { key: '?', shift: true, description: 'Show keyboard shortcuts' },
    { key: 'Escape', description: 'Close dialogs' },
  ];

  return (
    <div className="shortcuts-overlay" onClick={onClose}>
      <div className="shortcuts-modal" onClick={(e) => e.stopPropagation()}>
        <div className="shortcuts-header">
          <h2 className="shortcuts-title">Keyboard Shortcuts</h2>
          <button className="shortcuts-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="shortcuts-content">
          <div className="shortcuts-section">
            <h3 className="shortcuts-section-title">General</h3>
            <ul className="shortcuts-list">
              {generalShortcuts.map((shortcut, index) => (
                <li key={index} className="shortcut-item">
                  <span className="shortcut-description">{shortcut.description}</span>
                  <kbd className="shortcut-key">{formatShortcut(shortcut as KeyboardShortcut)}</kbd>
                </li>
              ))}
            </ul>
          </div>

          {enabledShortcuts.length > 0 && (
            <div className="shortcuts-section">
              <h3 className="shortcuts-section-title">Practice</h3>
              <ul className="shortcuts-list">
                {enabledShortcuts.map((shortcut, index) => (
                  <li key={index} className="shortcut-item">
                    <span className="shortcut-description">{shortcut.description}</span>
                    <kbd className="shortcut-key">{formatShortcut(shortcut)}</kbd>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="shortcuts-footer">
          <p className="shortcuts-tip">
            Press <kbd>Shift</kbd> + <kbd>?</kbd> anytime to see this help
          </p>
        </div>
      </div>
    </div>
  );
}

export default KeyboardShortcutsHelp;
