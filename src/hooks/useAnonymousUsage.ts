import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'aussie_anonymous_usage';
const FREE_MINUTES_PER_DAY = 2;

interface AnonymousUsage {
  date: string;
  minutesUsed: number;
}

function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

function getStoredUsage(): AnonymousUsage | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

function setStoredUsage(usage: AnonymousUsage): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  } catch {
    // localStorage might be full or disabled
  }
}

export function useAnonymousUsage() {
  const [minutesUsed, setMinutesUsed] = useState(0);

  // Load usage on mount
  useEffect(() => {
    const stored = getStoredUsage();
    const today = getTodayString();

    if (stored && stored.date === today) {
      setMinutesUsed(stored.minutesUsed);
    } else {
      // New day, reset usage
      setMinutesUsed(0);
    }
  }, []);

  const getRemainingMinutes = useCallback((): number => {
    const stored = getStoredUsage();
    const today = getTodayString();

    if (stored && stored.date === today) {
      return Math.max(0, FREE_MINUTES_PER_DAY - stored.minutesUsed);
    }
    return FREE_MINUTES_PER_DAY;
  }, []);

  const canStartSession = useCallback((): { allowed: boolean; remaining: number; message?: string } => {
    const remaining = getRemainingMinutes();

    if (remaining <= 0) {
      return {
        allowed: false,
        remaining: 0,
        message: "You've used your free 2 minutes today. Sign up to get more practice time!",
      };
    }

    return {
      allowed: true,
      remaining,
    };
  }, [getRemainingMinutes]);

  const recordUsage = useCallback((minutes: number): void => {
    const today = getTodayString();
    const stored = getStoredUsage();

    let newMinutesUsed = minutes;
    if (stored && stored.date === today) {
      newMinutesUsed = stored.minutesUsed + minutes;
    }

    setStoredUsage({ date: today, minutesUsed: newMinutesUsed });
    setMinutesUsed(newMinutesUsed);
  }, []);

  const startSessionTracking = useCallback((): { sessionStart: number } => {
    return { sessionStart: Date.now() };
  }, []);

  const endSessionTracking = useCallback((sessionStart: number): void => {
    const elapsedMs = Date.now() - sessionStart;
    const elapsedMinutes = Math.ceil(elapsedMs / 60000); // Round up to nearest minute
    recordUsage(elapsedMinutes);
  }, [recordUsage]);

  return {
    minutesUsed,
    remainingMinutes: getRemainingMinutes(),
    dailyLimit: FREE_MINUTES_PER_DAY,
    canStartSession,
    recordUsage,
    startSessionTracking,
    endSessionTracking,
  };
}
