import { useEffect, useCallback } from 'react';

interface UseQuizKeyboardProps {
  isPlaying: boolean;
  isFeedback: boolean;
  optionsCount: number;
  onSelectAnswer: (index: number) => void;
  onNext: () => void;
  onBack?: () => void;
}

/**
 * Custom hook for keyboard navigation in quiz components
 *
 * Keyboard shortcuts:
 * - 1-4: Select answer option (during playing state)
 * - Enter/Space: Proceed to next question (during feedback state)
 * - Escape: Go back/exit quiz
 */
export function useQuizKeyboard({
  isPlaying,
  isFeedback,
  optionsCount,
  onSelectAnswer,
  onNext,
  onBack,
}: UseQuizKeyboardProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Don't interfere with input elements
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      const key = event.key;

      // Number keys 1-4 to select answers (during playing state)
      if (isPlaying && !isFeedback) {
        const num = parseInt(key, 10);
        if (num >= 1 && num <= optionsCount) {
          event.preventDefault();
          onSelectAnswer(num - 1);
        }
      }

      // Enter or Space to proceed (during feedback state)
      if (isFeedback && (key === 'Enter' || key === ' ')) {
        event.preventDefault();
        onNext();
      }

      // Escape to go back
      if (key === 'Escape' && onBack) {
        event.preventDefault();
        onBack();
      }
    },
    [isPlaying, isFeedback, optionsCount, onSelectAnswer, onNext, onBack]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}

/**
 * Helper to show keyboard shortcut hints in UI
 */
export function getKeyboardHint(index: number): string {
  return `Press ${index + 1} to select`;
}
