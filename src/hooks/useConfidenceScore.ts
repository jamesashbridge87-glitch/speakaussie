import { useMemo } from 'react';
import { ProgressStats, SessionRecord } from './useProgressTracking';

export interface ConfidenceScoreData {
  overall: number; // 0-100
  breakdown: {
    consistency: number; // Based on streak and frequency
    experience: number; // Based on total sessions and time
    variety: number; // Based on scenarios/modes practiced
    growth: number; // Based on improvement trend
  };
  level: 'beginner' | 'developing' | 'confident' | 'fluent';
  levelProgress: number; // Progress to next level (0-100)
  weeklyChange: number; // Change from last week
  milestones: Milestone[];
  nextMilestone: Milestone | null;
  encouragement: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  icon: string;
  achieved: boolean;
  achievedAt?: Date;
  requirement: number;
  current: number;
  type: 'sessions' | 'time' | 'streak' | 'variety';
}

const LEVEL_THRESHOLDS = {
  beginner: 0,
  developing: 25,
  confident: 55,
  fluent: 80,
};

const LEVEL_LABELS = {
  beginner: 'Getting Started',
  developing: 'Building Confidence',
  confident: 'Speaking with Confidence',
  fluent: 'Aussie Natural',
};

const ENCOURAGEMENT_MESSAGES = {
  beginner: [
    "Every conversation starts with a single word. You're on your way!",
    "The hardest part is starting - and you've done it!",
    "Small steps lead to big confidence. Keep going!",
  ],
  developing: [
    "You're building momentum! Your confidence is growing.",
    "Practice makes progress. You're doing great!",
    "You're finding your voice - keep at it!",
  ],
  confident: [
    "You're speaking with real confidence now!",
    "Look how far you've come! Your progress is amazing.",
    "You're becoming a natural communicator!",
  ],
  fluent: [
    "You're speaking like a true Aussie! Ripper job!",
    "Your confidence is inspiring. Keep shining!",
    "You've mastered the art of confident communication!",
  ],
};

function getLevel(score: number): 'beginner' | 'developing' | 'confident' | 'fluent' {
  if (score >= LEVEL_THRESHOLDS.fluent) return 'fluent';
  if (score >= LEVEL_THRESHOLDS.confident) return 'confident';
  if (score >= LEVEL_THRESHOLDS.developing) return 'developing';
  return 'beginner';
}

function getLevelProgress(score: number, level: string): number {
  const thresholds = Object.entries(LEVEL_THRESHOLDS);
  const currentIndex = thresholds.findIndex(([l]) => l === level);
  const nextIndex = currentIndex + 1;

  if (nextIndex >= thresholds.length) {
    // Already at max level
    return ((score - LEVEL_THRESHOLDS.fluent) / (100 - LEVEL_THRESHOLDS.fluent)) * 100;
  }

  const currentThreshold = thresholds[currentIndex][1];
  const nextThreshold = thresholds[nextIndex][1];
  const range = nextThreshold - currentThreshold;

  return ((score - currentThreshold) / range) * 100;
}

function getRandomMessage(level: string): string {
  const messages = ENCOURAGEMENT_MESSAGES[level as keyof typeof ENCOURAGEMENT_MESSAGES] || ENCOURAGEMENT_MESSAGES.beginner;
  return messages[Math.floor(Math.random() * messages.length)];
}

function calculateMilestones(stats: ProgressStats, sessions: SessionRecord[]): Milestone[] {
  const milestones: Milestone[] = [
    // Session milestones
    {
      id: 'sessions-5',
      title: 'First Steps',
      description: 'Complete 5 practice sessions',
      icon: '👣',
      achieved: stats.totalSessions >= 5,
      requirement: 5,
      current: stats.totalSessions,
      type: 'sessions',
    },
    {
      id: 'sessions-25',
      title: 'Building Habits',
      description: 'Complete 25 practice sessions',
      icon: '🎯',
      achieved: stats.totalSessions >= 25,
      requirement: 25,
      current: stats.totalSessions,
      type: 'sessions',
    },
    {
      id: 'sessions-50',
      title: 'Committed Learner',
      description: 'Complete 50 practice sessions',
      icon: '⭐',
      achieved: stats.totalSessions >= 50,
      requirement: 50,
      current: stats.totalSessions,
      type: 'sessions',
    },
    {
      id: 'sessions-100',
      title: 'Century Club',
      description: 'Complete 100 practice sessions',
      icon: '💯',
      achieved: stats.totalSessions >= 100,
      requirement: 100,
      current: stats.totalSessions,
      type: 'sessions',
    },
    // Time milestones (in minutes)
    {
      id: 'time-60',
      title: 'First Hour',
      description: 'Practice for 1 hour total',
      icon: '⏱️',
      achieved: stats.totalPracticeTime >= 3600,
      requirement: 60,
      current: Math.floor(stats.totalPracticeTime / 60),
      type: 'time',
    },
    {
      id: 'time-300',
      title: 'Dedicated Practitioner',
      description: 'Practice for 5 hours total',
      icon: '📚',
      achieved: stats.totalPracticeTime >= 18000,
      requirement: 300,
      current: Math.floor(stats.totalPracticeTime / 60),
      type: 'time',
    },
    {
      id: 'time-600',
      title: 'Speaking Champion',
      description: 'Practice for 10 hours total',
      icon: '🏆',
      achieved: stats.totalPracticeTime >= 36000,
      requirement: 600,
      current: Math.floor(stats.totalPracticeTime / 60),
      type: 'time',
    },
    // Streak milestones
    {
      id: 'streak-7',
      title: 'Week Warrior',
      description: 'Practice 7 days in a row',
      icon: '🔥',
      achieved: stats.streak >= 7,
      requirement: 7,
      current: stats.streak,
      type: 'streak',
    },
    {
      id: 'streak-14',
      title: 'Fortnight Fighter',
      description: 'Practice 14 days in a row',
      icon: '💪',
      achieved: stats.streak >= 14,
      requirement: 14,
      current: stats.streak,
      type: 'streak',
    },
    {
      id: 'streak-30',
      title: 'Monthly Master',
      description: 'Practice 30 days in a row',
      icon: '👑',
      achieved: stats.streak >= 30,
      requirement: 30,
      current: stats.streak,
      type: 'streak',
    },
    // Variety milestones
    {
      id: 'variety-all',
      title: 'Well Rounded',
      description: 'Practice in all 3 categories',
      icon: '🌟',
      achieved: stats.modeBreakdown.everyday > 0 && stats.modeBreakdown.slang > 0 && stats.modeBreakdown.workplace > 0,
      requirement: 3,
      current: [stats.modeBreakdown.everyday, stats.modeBreakdown.slang, stats.modeBreakdown.workplace].filter(v => v > 0).length,
      type: 'variety',
    },
  ];

  // Add achieved dates from session data for achieved milestones
  return milestones.map(milestone => {
    if (milestone.achieved && sessions.length > 0) {
      // Find when the milestone was achieved
      let achievedAt: Date | undefined;

      if (milestone.type === 'sessions') {
        const achievementSession = sessions[milestone.requirement - 1];
        if (achievementSession) {
          achievedAt = new Date(achievementSession.startTime);
        }
      } else if (milestone.type === 'time') {
        // Find when total time exceeded requirement
        let totalTime = 0;
        for (const session of sessions) {
          totalTime += session.duration;
          if (totalTime >= milestone.requirement * 60) {
            achievedAt = new Date(session.startTime);
            break;
          }
        }
      }

      return { ...milestone, achievedAt };
    }
    return milestone;
  });
}

export function useConfidenceScore(
  stats: ProgressStats,
  sessions: SessionRecord[],
  pronunciationAverage: number = 0
): ConfidenceScoreData {
  return useMemo(() => {
    // Calculate consistency score (0-30 points)
    // Based on streak and weekly activity
    const streakPoints = Math.min(stats.streak * 2, 15); // Up to 15 points for 7+ day streak
    const weeklyActivityPoints = Math.min(stats.sessionsThisWeek * 2.5, 15); // Up to 15 points for 6+ sessions/week
    const consistency = Math.round(streakPoints + weeklyActivityPoints);

    // Calculate experience score (0-30 points)
    // Based on total sessions and practice time
    const sessionPoints = Math.min(stats.totalSessions * 0.3, 15); // Up to 15 points for 50+ sessions
    const timePoints = Math.min((stats.totalPracticeTime / 60) * 0.05, 15); // Up to 15 points for 300+ minutes
    const experience = Math.round(sessionPoints + timePoints);

    // Calculate variety score (0-20 points)
    // Based on practicing different modes
    const modesUsed = [stats.modeBreakdown.everyday, stats.modeBreakdown.slang, stats.modeBreakdown.workplace].filter(v => v > 0).length;
    const varietyBase = modesUsed * 5; // 5 points per mode
    const balanceBonus = modesUsed === 3 ? 5 : 0; // Bonus for using all 3
    const variety = Math.min(varietyBase + balanceBonus, 20);

    // Calculate growth score (0-20 points)
    // Based on pronunciation improvement and positive feedback
    const pronunciationPoints = Math.min(pronunciationAverage * 0.1, 10); // Up to 10 points
    const positiveFeedback = sessions.filter(s => s.feedback === true).length;
    const feedbackPoints = Math.min(positiveFeedback * 0.5, 10); // Up to 10 points
    const growth = Math.round(pronunciationPoints + feedbackPoints);

    // Calculate overall score
    const overall = Math.min(consistency + experience + variety + growth, 100);

    // Determine level
    const level = getLevel(overall);
    const levelProgress = getLevelProgress(overall, level);

    // Calculate weekly change (simplified - compare current stats to last week)
    const weeklyChange = stats.sessionsThisWeek >= 3 ? Math.round(stats.sessionsThisWeek * 1.5) : 0;

    // Calculate milestones
    const milestones = calculateMilestones(stats, sessions);
    const unachievedMilestones = milestones.filter(m => !m.achieved);
    const nextMilestone = unachievedMilestones.length > 0
      ? unachievedMilestones.reduce((closest, m) => {
          const closestProgress = closest.current / closest.requirement;
          const mProgress = m.current / m.requirement;
          return mProgress > closestProgress ? m : closest;
        })
      : null;

    // Get encouragement message
    const encouragement = getRandomMessage(level);

    return {
      overall,
      breakdown: {
        consistency,
        experience,
        variety,
        growth,
      },
      level,
      levelProgress,
      weeklyChange,
      milestones,
      nextMilestone,
      encouragement,
    };
  }, [stats, sessions, pronunciationAverage]);
}

export { LEVEL_LABELS };
