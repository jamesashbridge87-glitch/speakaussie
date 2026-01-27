import { useMemo } from 'react';
import { SessionRecord } from './useProgressTracking';

export interface JourneyPhase {
  id: 'getting-started' | 'finding-voice' | 'building-momentum' | 'confident-communicator';
  name: string;
  weekRange: [number, number];
  description: string;
  goals: string[];
  tips: string[];
  celebrationMessage: string;
  icon: string;
}

export interface JourneyProgress {
  startDate: Date | null;
  currentDay: number;
  currentWeek: number;
  currentPhase: JourneyPhase;
  phaseProgress: number; // 0-100 within current phase
  overallProgress: number; // 0-100 across full 90 days
  daysUntilNextPhase: number;
  isNewPhase: boolean; // True if entered phase in last 2 days
  recommendation: string;
  weeklyGoal: string;
  phaseHistory: PhaseCompletion[];
}

export interface PhaseCompletion {
  phase: JourneyPhase;
  startedAt: Date;
  completedAt?: Date;
  sessionsCompleted: number;
}

const JOURNEY_PHASES: JourneyPhase[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    weekRange: [1, 2],
    description: 'Build your foundation and establish a practice habit',
    goals: [
      'Complete your first 5 sessions',
      'Try at least 2 different scenario categories',
      'Practice 3+ days this week',
    ],
    tips: [
      'Start with "Everyday Conversations" - they\'re the most common!',
      'Don\'t worry about perfection - just get comfortable speaking',
      'Even 5 minutes a day builds the habit',
    ],
    celebrationMessage: 'You\'ve taken the first step! Starting is the hardest part, and you did it.',
    icon: '🌱',
  },
  {
    id: 'finding-voice',
    name: 'Finding Your Voice',
    weekRange: [3, 4],
    description: 'Expand your comfort zone with more challenging conversations',
    goals: [
      'Try a workplace scenario',
      'Learn 10 new slang terms',
      'Complete a scenario you found challenging',
    ],
    tips: [
      'Push yourself with "Workplace" scenarios - they\'ll boost your confidence',
      'Pay attention to the slang - Aussies use it everywhere!',
      'If a scenario feels hard, that means you\'re growing',
    ],
    celebrationMessage: 'You\'re finding your voice! Your confidence is visibly growing.',
    icon: '🎯',
  },
  {
    id: 'building-momentum',
    name: 'Building Momentum',
    weekRange: [5, 8],
    description: 'Deepen your skills and see real progress',
    goals: [
      'Maintain a 7-day streak',
      'Practice all scenario categories',
      'Notice improvement in your confidence score',
    ],
    tips: [
      'This is where the magic happens - consistency beats intensity',
      'Revisit scenarios you did in week 1 - notice how much easier they feel!',
      'Try the advanced scenarios when you\'re ready',
    ],
    celebrationMessage: 'You\'re building real momentum! Your practice is paying off.',
    icon: '🚀',
  },
  {
    id: 'confident-communicator',
    name: 'Confident Communicator',
    weekRange: [9, 12],
    description: 'Master scenarios and cement your confident communication style',
    goals: [
      'Achieve a confidence score of 70+',
      'Complete 50+ total sessions',
      'Feel genuinely confident in workplace conversations',
    ],
    tips: [
      'You\'ve come so far - take a moment to appreciate your progress',
      'Challenge yourself with the most advanced scenarios',
      'Start thinking about real-world situations to apply your skills',
    ],
    celebrationMessage: 'You\'re a Confident Communicator! You\'ve transformed your ability to connect.',
    icon: '👑',
  },
];

const WEEKLY_RECOMMENDATIONS: Record<number, string[]> = {
  1: [
    'Start with "Meeting a New Colleague" - it\'s friendly and common',
    'Try "Ordering Coffee" to practice casual Aussie chat',
  ],
  2: [
    'Explore the "Social" category for relaxed conversations',
    'Practice "Small Talk" scenarios to build natural flow',
  ],
  3: [
    'Time to try a workplace scenario - "Team Meeting" is a great start',
    'Check out the slang library and learn 5 new terms',
  ],
  4: [
    'Practice "Giving an Update" for common workplace situations',
    'Try scenarios you\'ve avoided - growth happens outside comfort zones',
  ],
  5: [
    'Focus on consistency - aim for 5 sessions this week',
    'Revisit an early scenario and notice your improvement',
  ],
  6: [
    'Try the "Speaking Up" category to build assertiveness',
    'Practice scenarios back-to-back to build stamina',
  ],
  7: [
    'Challenge yourself with "Difficult Conversations"',
    'Your confidence score should be climbing - keep it up!',
  ],
  8: [
    'You\'re halfway through your journey - celebrate!',
    'Try combining different scenario types in one session',
  ],
  9: [
    'Focus on mastering your favourite scenarios',
    'You\'re in the home stretch - stay consistent',
  ],
  10: [
    'Try the most challenging scenarios available',
    'Think about real workplace situations to apply your skills',
  ],
  11: [
    'Polish your skills with varied practice',
    'Your transformation is nearly complete!',
  ],
  12: [
    'You\'ve done it! Celebrate your 90-day journey',
    'Consider what comes next - keep practicing to maintain your skills',
  ],
};

function getPhaseForWeek(week: number): JourneyPhase {
  for (const phase of JOURNEY_PHASES) {
    if (week >= phase.weekRange[0] && week <= phase.weekRange[1]) {
      return phase;
    }
  }
  // Beyond 12 weeks, stay in confident communicator
  return JOURNEY_PHASES[JOURNEY_PHASES.length - 1];
}

function calculatePhaseProgress(week: number, phase: JourneyPhase): number {
  const phaseWeeks = phase.weekRange[1] - phase.weekRange[0] + 1;
  const weeksIntoPhase = week - phase.weekRange[0];
  return Math.min(100, (weeksIntoPhase / phaseWeeks) * 100);
}

export function useJourneyProgress(sessions: SessionRecord[]): JourneyProgress {
  return useMemo(() => {
    // Find the earliest session date
    const sortedSessions = [...sessions].sort(
      (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );

    const startDate = sortedSessions.length > 0
      ? new Date(sortedSessions[0].startTime)
      : null;

    if (!startDate) {
      // No sessions yet - return default "day 0" state
      const firstPhase = JOURNEY_PHASES[0];
      return {
        startDate: null,
        currentDay: 0,
        currentWeek: 0,
        currentPhase: firstPhase,
        phaseProgress: 0,
        overallProgress: 0,
        daysUntilNextPhase: 14,
        isNewPhase: false,
        recommendation: 'Start your first session to begin your 90-day confidence journey!',
        weeklyGoal: firstPhase.goals[0],
        phaseHistory: [],
      };
    }

    // Calculate current day and week
    const now = new Date();
    const msPerDay = 24 * 60 * 60 * 1000;
    const currentDay = Math.floor((now.getTime() - startDate.getTime()) / msPerDay) + 1;
    const currentWeek = Math.ceil(currentDay / 7);
    const cappedWeek = Math.min(currentWeek, 12);

    // Get current phase
    const currentPhase = getPhaseForWeek(cappedWeek);
    const phaseProgress = calculatePhaseProgress(cappedWeek, currentPhase);

    // Calculate overall progress (90 days = 100%)
    const overallProgress = Math.min(100, (currentDay / 90) * 100);

    // Calculate days until next phase
    const nextPhaseIndex = JOURNEY_PHASES.findIndex(p => p.id === currentPhase.id) + 1;
    let daysUntilNextPhase = 0;
    if (nextPhaseIndex < JOURNEY_PHASES.length) {
      const nextPhaseStartWeek = JOURNEY_PHASES[nextPhaseIndex].weekRange[0];
      const nextPhaseStartDay = (nextPhaseStartWeek - 1) * 7 + 1;
      daysUntilNextPhase = Math.max(0, nextPhaseStartDay - currentDay);
    }

    // Check if we're in a new phase (within first 2 days)
    const phaseStartDay = (currentPhase.weekRange[0] - 1) * 7 + 1;
    const daysIntoPhase = currentDay - phaseStartDay;
    const isNewPhase = daysIntoPhase >= 0 && daysIntoPhase <= 2;

    // Get recommendation for current week
    const weekRecs = WEEKLY_RECOMMENDATIONS[cappedWeek] || WEEKLY_RECOMMENDATIONS[12];
    const recommendation = weekRecs[Math.floor(Math.random() * weekRecs.length)];

    // Get weekly goal based on phase
    const goalIndex = Math.min(
      Math.floor((currentDay % 14) / 5),
      currentPhase.goals.length - 1
    );
    const weeklyGoal = currentPhase.goals[goalIndex];

    // Build phase history
    const phaseHistory: PhaseCompletion[] = [];
    for (const phase of JOURNEY_PHASES) {
      const phaseStartDay = (phase.weekRange[0] - 1) * 7 + 1;
      const phaseEndDay = phase.weekRange[1] * 7;

      if (currentDay >= phaseStartDay) {
        const sessionsInPhase = sessions.filter(s => {
          const sessionDay = Math.floor(
            (new Date(s.startTime).getTime() - startDate.getTime()) / msPerDay
          ) + 1;
          return sessionDay >= phaseStartDay && sessionDay <= phaseEndDay;
        });

        const completion: PhaseCompletion = {
          phase,
          startedAt: new Date(startDate.getTime() + (phaseStartDay - 1) * msPerDay),
          sessionsCompleted: sessionsInPhase.length,
        };

        if (currentDay > phaseEndDay) {
          completion.completedAt = new Date(startDate.getTime() + phaseEndDay * msPerDay);
        }

        phaseHistory.push(completion);
      }
    }

    return {
      startDate,
      currentDay,
      currentWeek: cappedWeek,
      currentPhase,
      phaseProgress,
      overallProgress,
      daysUntilNextPhase,
      isNewPhase,
      recommendation,
      weeklyGoal,
      phaseHistory,
    };
  }, [sessions]);
}

export { JOURNEY_PHASES };
