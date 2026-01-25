import { useState, useEffect, useCallback } from 'react';
import { OnboardingData } from '../components/onboarding';

const ONBOARDING_STORAGE_KEY = 'aussie-english-onboarding';

interface OnboardingState {
  hasCompleted: boolean;
  data: OnboardingData | null;
  completedAt: string | null;
}

const DEFAULT_STATE: OnboardingState = {
  hasCompleted: false,
  data: null,
  completedAt: null,
};

export function useOnboarding() {
  const [state, setState] = useState<OnboardingState>(() => {
    try {
      const stored = localStorage.getItem(ONBOARDING_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Ignore errors
    }
    return DEFAULT_STATE;
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore errors
    }
  }, [state]);

  const completeOnboarding = useCallback((data: OnboardingData) => {
    setState({
      hasCompleted: true,
      data,
      completedAt: new Date().toISOString(),
    });
  }, []);

  const resetOnboarding = useCallback(() => {
    setState(DEFAULT_STATE);
  }, []);

  const updatePreferences = useCallback((updates: Partial<OnboardingData>) => {
    setState((prev) => ({
      ...prev,
      data: prev.data ? { ...prev.data, ...updates } : null,
    }));
  }, []);

  return {
    hasCompletedOnboarding: state.hasCompleted,
    onboardingData: state.data,
    completeOnboarding,
    resetOnboarding,
    updatePreferences,
  };
}

export default useOnboarding;
