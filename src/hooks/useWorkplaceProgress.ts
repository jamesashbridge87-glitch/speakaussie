import { useState, useEffect, useCallback } from 'react';
import { WorkplaceSituation, situationOrder, workplaceData, getSituationPhrases } from '../data/workplaceData';

interface SituationProgress {
  phrasesLearned: string[];
  phrasesReviewed: string[];
  quizHighScore: number;
  quizzesCompleted: number;
  lastPracticed: string | null;
}

interface WorkplaceProgressState {
  situations: Record<WorkplaceSituation, SituationProgress>;
  favorites: string[];
  totalXPEarned: number;
  quickPrepCount: number;
  reviewSchedule: Record<string, { nextReview: string; interval: number }>;
}

const STORAGE_KEY = 'aussie_workplace_progress';

const createDefaultSituationProgress = (): SituationProgress => ({
  phrasesLearned: [],
  phrasesReviewed: [],
  quizHighScore: 0,
  quizzesCompleted: 0,
  lastPracticed: null,
});

const createDefaultState = (): WorkplaceProgressState => ({
  situations: {
    'small-talk': createDefaultSituationProgress(),
    'friday-drinks': createDefaultSituationProgress(),
    'banter': createDefaultSituationProgress(),
    'performance-reviews': createDefaultSituationProgress(),
    'feedback': createDefaultSituationProgress(),
    'presentations': createDefaultSituationProgress(),
  },
  favorites: [],
  totalXPEarned: 0,
  quickPrepCount: 0,
  reviewSchedule: {},
});

const getInitialState = (): WorkplaceProgressState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...createDefaultState(), ...parsed };
    }
  } catch (e) {
    console.error('Failed to load workplace progress:', e);
  }
  return createDefaultState();
};

export function useWorkplaceProgress() {
  const [state, setState] = useState<WorkplaceProgressState>(getInitialState);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Record a phrase as learned
  const markPhraseLearned = useCallback((phraseId: string, situation: WorkplaceSituation) => {
    setState(prev => {
      const sitProgress = prev.situations[situation];
      if (sitProgress.phrasesLearned.includes(phraseId)) {
        return prev;
      }
      return {
        ...prev,
        situations: {
          ...prev.situations,
          [situation]: {
            ...sitProgress,
            phrasesLearned: [...sitProgress.phrasesLearned, phraseId],
            lastPracticed: new Date().toISOString(),
          },
        },
      };
    });
  }, []);

  // Record flashcard view with spaced repetition feedback
  const recordFlashcardFeedback = useCallback((phraseId: string, situation: WorkplaceSituation, nailed: boolean) => {
    const today = new Date();

    setState(prev => {
      const currentSchedule = prev.reviewSchedule[phraseId] || { nextReview: today.toISOString(), interval: 1 };
      let newInterval: number;

      if (nailed) {
        // Increase interval: 1 -> 3 -> 7 -> 14 -> 30
        const intervalMap: Record<number, number> = { 1: 3, 3: 7, 7: 14, 14: 30, 30: 30 };
        newInterval = intervalMap[currentSchedule.interval] || 30;
      } else {
        // Reset to 1 day
        newInterval = 1;
      }

      const nextReview = new Date(today);
      nextReview.setDate(nextReview.getDate() + newInterval);

      return {
        ...prev,
        reviewSchedule: {
          ...prev.reviewSchedule,
          [phraseId]: {
            nextReview: nextReview.toISOString(),
            interval: newInterval,
          },
        },
        situations: {
          ...prev.situations,
          [situation]: {
            ...prev.situations[situation],
            phrasesLearned: prev.situations[situation].phrasesLearned.includes(phraseId)
              ? prev.situations[situation].phrasesLearned
              : [...prev.situations[situation].phrasesLearned, phraseId],
            lastPracticed: today.toISOString(),
          },
        },
      };
    });
  }, []);

  // Get phrases due for review
  const getPhrasesForReview = useCallback((situation?: WorkplaceSituation): string[] => {
    const today = new Date();
    const phrases = situation ? getSituationPhrases(situation) : workplaceData;

    return phrases
      .filter(p => {
        const schedule = state.reviewSchedule[p.id];
        if (!schedule) return false;
        return new Date(schedule.nextReview) <= today;
      })
      .map(p => p.id);
  }, [state.reviewSchedule]);

  // Count phrases due for review
  const getReviewCount = useCallback((situation?: WorkplaceSituation): number => {
    return getPhrasesForReview(situation).length;
  }, [getPhrasesForReview]);

  // Record quiz completion
  const recordQuizComplete = useCallback((situation: WorkplaceSituation, score: number, _total: number) => {
    setState(prev => ({
      ...prev,
      situations: {
        ...prev.situations,
        [situation]: {
          ...prev.situations[situation],
          quizHighScore: Math.max(prev.situations[situation].quizHighScore, score),
          quizzesCompleted: prev.situations[situation].quizzesCompleted + 1,
          lastPracticed: new Date().toISOString(),
        },
      },
    }));
  }, []);

  // Toggle favorite
  const toggleFavorite = useCallback((phraseId: string): boolean => {
    let added = false;
    setState(prev => {
      const index = prev.favorites.indexOf(phraseId);
      if (index === -1) {
        added = true;
        return { ...prev, favorites: [...prev.favorites, phraseId] };
      } else {
        return { ...prev, favorites: prev.favorites.filter(id => id !== phraseId) };
      }
    });
    return added;
  }, []);

  const isFavorite = useCallback((phraseId: string): boolean => {
    return state.favorites.includes(phraseId);
  }, [state.favorites]);

  // Check if a phrase is learned
  const isPhraseLearned = useCallback((phraseId: string, situation: WorkplaceSituation): boolean => {
    return state.situations[situation].phrasesLearned.includes(phraseId);
  }, [state.situations]);

  // Record Quick Prep usage
  const recordQuickPrep = useCallback(() => {
    setState(prev => ({
      ...prev,
      quickPrepCount: prev.quickPrepCount + 1,
    }));
  }, []);

  // Get situation progress
  const getSituationProgress = useCallback((situation: WorkplaceSituation) => {
    const sitProgress = state.situations[situation];
    const totalPhrases = getSituationPhrases(situation).length;
    return {
      learned: sitProgress.phrasesLearned.length,
      total: totalPhrases,
      percentage: totalPhrases > 0 ? Math.round((sitProgress.phrasesLearned.length / totalPhrases) * 100) : 0,
      isComplete: sitProgress.phrasesLearned.length >= totalPhrases,
      quizHighScore: sitProgress.quizHighScore,
      quizzesCompleted: sitProgress.quizzesCompleted,
    };
  }, [state.situations]);

  // Check if a situation is unlocked
  const isSituationUnlocked = useCallback((situation: WorkplaceSituation): boolean => {
    const index = situationOrder.indexOf(situation);
    if (index === 0) return true; // First situation always unlocked

    // Previous situation must be at least 50% complete
    const prevSituation = situationOrder[index - 1];
    const prevProgress = getSituationProgress(prevSituation);
    return prevProgress.percentage >= 50;
  }, [getSituationProgress]);

  // Get overall progress
  const getOverallProgress = useCallback(() => {
    const totalPhrases = workplaceData.length;
    const learnedPhrases = new Set(
      Object.values(state.situations).flatMap(s => s.phrasesLearned)
    ).size;

    return {
      learned: learnedPhrases,
      total: totalPhrases,
      percentage: totalPhrases > 0 ? Math.round((learnedPhrases / totalPhrases) * 100) : 0,
      situationsComplete: situationOrder.filter(s => getSituationProgress(s).isComplete).length,
      totalSituations: situationOrder.length,
    };
  }, [state.situations, getSituationProgress]);

  // Reset progress
  const resetProgress = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all workplace progress? This cannot be undone.')) {
      setState(createDefaultState());
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return {
    // State
    favorites: state.favorites,
    quickPrepCount: state.quickPrepCount,

    // Actions
    markPhraseLearned,
    recordFlashcardFeedback,
    recordQuizComplete,
    toggleFavorite,
    isFavorite,
    isPhraseLearned,
    recordQuickPrep,
    resetProgress,

    // Computed
    getSituationProgress,
    isSituationUnlocked,
    getOverallProgress,
    getPhrasesForReview,
    getReviewCount,
  };
}
