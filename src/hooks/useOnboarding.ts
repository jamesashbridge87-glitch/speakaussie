import { useState, useEffect, useCallback } from 'react';

export type ExperienceLevel = 'new-to-australia' | 'settling-in' | 'been-here-awhile';
export type GoalType = 'workplace-confidence' | 'social-connections' | 'sound-local' | 'all-of-above';
export type ComfortLevel = 'nervous' | 'getting-there' | 'pretty-confident';

export interface OnboardingData {
  completed: boolean;
  completedAt?: string;
  experienceLevel?: ExperienceLevel;
  goal?: GoalType;
  comfortLevel?: ComfortLevel;
  name?: string;
  firstSessionCompleted?: boolean;
  recommendedScenarioId?: string;
}

interface OnboardingState {
  data: OnboardingData;
  isLoading: boolean;
}

const STORAGE_KEY = 'speakaussie-onboarding';

const DEFAULT_DATA: OnboardingData = {
  completed: false,
};

// Map user selections to recommended starting scenarios
const SCENARIO_RECOMMENDATIONS: Record<string, string[]> = {
  // For people new to Australia
  'new-to-australia_workplace-confidence': ['meeting-new-colleague', 'team-meeting-intro'],
  'new-to-australia_social-connections': ['coffee-chat', 'friday-drinks-intro'],
  'new-to-australia_sound-local': ['ordering-coffee', 'casual-greeting'],
  'new-to-australia_all-of-above': ['meeting-new-colleague', 'casual-greeting'],

  // For people settling in (6 months - 1 year)
  'settling-in_workplace-confidence': ['team-meeting-contribute', 'giving-update'],
  'settling-in_social-connections': ['lunch-invitation', 'after-work-drinks'],
  'settling-in_sound-local': ['slang-conversation', 'casual-banter'],
  'settling-in_all-of-above': ['team-meeting-contribute', 'casual-banter'],

  // For people who've been here a while
  'been-here-awhile_workplace-confidence': ['speaking-up-meeting', 'difficult-conversation'],
  'been-here-awhile_social-connections': ['networking-event', 'team-celebration'],
  'been-here-awhile_sound-local': ['advanced-slang', 'aussie-humor'],
  'been-here-awhile_all-of-above': ['speaking-up-meeting', 'networking-event'],
};

// Encouragement messages based on comfort level
export const COMFORT_MESSAGES: Record<ComfortLevel, string> = {
  'nervous': "That's completely normal! Everyone feels nervous at first. We'll start you with friendly, low-pressure scenarios. You've got this!",
  'getting-there': "Great progress! You're building confidence. Let's push your comfort zone just a little with some workplace scenarios.",
  'pretty-confident': "Awesome! Let's refine your skills with more challenging scenarios and help you sound like a true local.",
};

// Welcome messages
export const WELCOME_MESSAGES = {
  title: "G'day! Welcome to SpeakAussie",
  subtitle: "I'm your Aussie Uncle, and I'm here to help you speak with confidence.",
  description: "Let's get to know each other so I can recommend the perfect scenarios for you.",
};

export function useOnboarding() {
  const [state, setState] = useState<OnboardingState>({
    data: DEFAULT_DATA,
    isLoading: true,
  });

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored) as OnboardingData;
        setState({ data, isLoading: false });
      } catch {
        setState({ data: DEFAULT_DATA, isLoading: false });
      }
    } else {
      setState({ data: DEFAULT_DATA, isLoading: false });
    }
  }, []);

  // Save to localStorage
  const saveData = useCallback((data: OnboardingData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setState({ data, isLoading: false });
  }, []);

  const updateOnboarding = useCallback((updates: Partial<OnboardingData>) => {
    setState(prev => {
      const newData = { ...prev.data, ...updates };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      return { ...prev, data: newData };
    });
  }, []);

  const completeOnboarding = useCallback((
    experienceLevel: ExperienceLevel,
    goal: GoalType,
    comfortLevel: ComfortLevel,
    name?: string
  ) => {
    // Get recommended scenario based on selections
    const key = `${experienceLevel}_${goal}`;
    const recommendations = SCENARIO_RECOMMENDATIONS[key] || ['meeting-new-colleague'];
    const recommendedScenarioId = recommendations[0];

    const data: OnboardingData = {
      completed: true,
      completedAt: new Date().toISOString(),
      experienceLevel,
      goal,
      comfortLevel,
      name,
      recommendedScenarioId,
    };

    saveData(data);
    return recommendedScenarioId;
  }, [saveData]);

  const markFirstSessionCompleted = useCallback(() => {
    updateOnboarding({ firstSessionCompleted: true });
  }, [updateOnboarding]);

  const resetOnboarding = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ data: DEFAULT_DATA, isLoading: false });
  }, []);

  const getRecommendedScenarios = useCallback((): string[] => {
    const { experienceLevel, goal } = state.data;
    if (!experienceLevel || !goal) return [];

    const key = `${experienceLevel}_${goal}`;
    return SCENARIO_RECOMMENDATIONS[key] || [];
  }, [state.data]);

  return {
    onboardingData: state.data,
    isLoading: state.isLoading,
    needsOnboarding: !state.data.completed,
    completeOnboarding,
    markFirstSessionCompleted,
    resetOnboarding,
    getRecommendedScenarios,
    updateOnboarding,
  };
}
