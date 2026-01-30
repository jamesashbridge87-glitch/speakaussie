import { useState, useEffect, useCallback } from 'react';
import { Scenario, ScenarioCategory } from '../data/scenarios';
import { allScenarios as scenarios } from '../data/allScenarios';

// Spaced repetition intervals in days
const SPACED_INTERVALS = [1, 3, 7, 14, 30];

interface ScenarioReviewData {
  scenarioId: string;
  lastCompleted: string; // ISO date string
  nextReview: string; // ISO date string
  intervalIndex: number; // Index into SPACED_INTERVALS
  timesCompleted: number;
}

interface ScenarioProgressState {
  favorites: string[]; // scenario IDs
  reviewSchedule: Record<string, ScenarioReviewData>;
}

const STORAGE_KEY = 'aussie_scenario_progress';

const createDefaultState = (): ScenarioProgressState => ({
  favorites: [],
  reviewSchedule: {},
});

const getInitialState = (): ScenarioProgressState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...createDefaultState(), ...parsed };
    }
  } catch (e) {
    console.error('Failed to load scenario progress:', e);
  }
  return createDefaultState();
};

export type SessionFeedback = 'easy' | 'good' | 'hard';

export function useScenarioProgress() {
  const [state, setState] = useState<ScenarioProgressState>(getInitialState);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Toggle favorite
  const toggleFavorite = useCallback((scenarioId: string): boolean => {
    let added = false;
    setState(prev => {
      const index = prev.favorites.indexOf(scenarioId);
      if (index === -1) {
        added = true;
        return { ...prev, favorites: [...prev.favorites, scenarioId] };
      } else {
        return { ...prev, favorites: prev.favorites.filter(id => id !== scenarioId) };
      }
    });
    return added;
  }, []);

  // Check if a scenario is favorited
  const isFavorite = useCallback((scenarioId: string): boolean => {
    return state.favorites.includes(scenarioId);
  }, [state.favorites]);

  // Get all favorite scenarios
  const getFavoriteScenarios = useCallback((): Scenario[] => {
    return scenarios.filter(s => state.favorites.includes(s.id));
  }, [state.favorites]);

  // Record scenario completion with spaced repetition feedback
  const recordScenarioCompletion = useCallback((scenarioId: string, feedback: SessionFeedback) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    setState(prev => {
      const currentReview = prev.reviewSchedule[scenarioId];
      let newIntervalIndex: number;

      if (!currentReview) {
        // First time completing this scenario
        newIntervalIndex = feedback === 'easy' ? 2 : feedback === 'good' ? 1 : 0;
      } else {
        // Adjust interval based on feedback
        if (feedback === 'easy') {
          // Jump ahead by 2 intervals
          newIntervalIndex = Math.min(SPACED_INTERVALS.length - 1, currentReview.intervalIndex + 2);
        } else if (feedback === 'good') {
          // Move to next interval
          newIntervalIndex = Math.min(SPACED_INTERVALS.length - 1, currentReview.intervalIndex + 1);
        } else {
          // Reset to beginning
          newIntervalIndex = 0;
        }
      }

      const nextReview = new Date(today);
      nextReview.setDate(nextReview.getDate() + SPACED_INTERVALS[newIntervalIndex]);

      return {
        ...prev,
        reviewSchedule: {
          ...prev.reviewSchedule,
          [scenarioId]: {
            scenarioId,
            lastCompleted: today.toISOString(),
            nextReview: nextReview.toISOString(),
            intervalIndex: newIntervalIndex,
            timesCompleted: (currentReview?.timesCompleted || 0) + 1,
          },
        },
      };
    });
  }, []);

  // Check if a scenario is due for review
  const isDueForReview = useCallback((scenarioId: string): boolean => {
    const review = state.reviewSchedule[scenarioId];
    if (!review) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextReview = new Date(review.nextReview);

    return nextReview <= today;
  }, [state.reviewSchedule]);

  // Get all scenarios due for review
  const getScenariosDueForReview = useCallback((): Scenario[] => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return scenarios.filter(scenario => {
      const review = state.reviewSchedule[scenario.id];
      if (!review) return false;
      const nextReview = new Date(review.nextReview);
      return nextReview <= today;
    });
  }, [state.reviewSchedule]);

  // Get review count for a category (or all)
  const getReviewCount = useCallback((category?: ScenarioCategory): number => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return scenarios.filter(scenario => {
      if (category && scenario.category !== category) return false;
      const review = state.reviewSchedule[scenario.id];
      if (!review) return false;
      const nextReview = new Date(review.nextReview);
      return nextReview <= today;
    }).length;
  }, [state.reviewSchedule]);

  // Get days until next review for a scenario
  const getDaysUntilReview = useCallback((scenarioId: string): number | null => {
    const review = state.reviewSchedule[scenarioId];
    if (!review) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextReview = new Date(review.nextReview);

    const diffTime = nextReview.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }, [state.reviewSchedule]);

  // Get scenario review data
  const getScenarioReviewData = useCallback((scenarioId: string): ScenarioReviewData | null => {
    return state.reviewSchedule[scenarioId] || null;
  }, [state.reviewSchedule]);

  // Check if scenario has been completed at least once
  const hasCompletedScenario = useCallback((scenarioId: string): boolean => {
    return !!state.reviewSchedule[scenarioId];
  }, [state.reviewSchedule]);

  // Reset progress
  const resetProgress = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all scenario progress? This cannot be undone.')) {
      setState(createDefaultState());
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  return {
    // State
    favorites: state.favorites,
    favoriteCount: state.favorites.length,

    // Favorite actions
    toggleFavorite,
    isFavorite,
    getFavoriteScenarios,

    // Spaced repetition actions
    recordScenarioCompletion,
    isDueForReview,
    getScenariosDueForReview,
    getReviewCount,
    getDaysUntilReview,
    getScenarioReviewData,
    hasCompletedScenario,

    // Reset
    resetProgress,
  };
}
