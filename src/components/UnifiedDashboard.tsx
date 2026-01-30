import { useNavigate } from 'react-router-dom';
import { useMemo, useCallback } from 'react';
import { useGamification } from '../hooks/useGamification';
import { useProgressTracking } from '../hooks/useProgressTracking';
import { useWorkplaceProgress } from '../hooks/useWorkplaceProgress';
import { StatCard } from './ui/StatCard';
import { AchievementMini } from './ui/AchievementBadge';
import { QuickLink } from './ui/QuickLink';
import {
  DuotoneIcon,
  Trophy,
  Star,
  Flame,
  Dumbbell,
  MessageCircle,
  Timer,
  Briefcase,
  HelpCircle,
  Medal,
  Mic,
  ArrowLeft,
  colorSchemes,
} from './icons';
import './UnifiedDashboard.css';

// Pure utility function - no need to memoize
function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  if (mins < 60) return `${mins}m`;
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours}h ${remainingMins}m`;
}

export function UnifiedDashboard() {
  const navigate = useNavigate();

  // Gamification stats
  const {
    xp,
    level,
    streak,
    maxStreak,
    cardsViewed,
    quizzesCompleted,
    getXPProgress,
    getUnlockedAchievements,
    getAllAchievements,
  } = useGamification();

  // Progress tracking stats
  const { getStats } = useProgressTracking();

  // Workplace progress
  const { getOverallProgress: getWorkplaceOverall } = useWorkplaceProgress();

  // Memoize computed values
  const xpProgress = useMemo(() => getXPProgress(), [getXPProgress]);
  const progressStats = useMemo(() => getStats(), [getStats]);
  const workplaceProgress = useMemo(() => getWorkplaceOverall(), [getWorkplaceOverall]);
  const unlockedAchievements = useMemo(() => getUnlockedAchievements(), [getUnlockedAchievements]);
  const allAchievements = useMemo(() => getAllAchievements(), [getAllAchievements]);

  // Memoize recent achievements (last 4)
  const recentAchievements = useMemo(
    () => unlockedAchievements.slice(-4),
    [unlockedAchievements]
  );

  // Memoize navigation handlers
  const navigateToWorkplace = useCallback(() => navigate('/workplace'), [navigate]);
  const navigateToSpeak = useCallback(() => navigate('/speak'), [navigate]);
  const navigateToApp = useCallback(() => navigate('/'), [navigate]);

  return (
    <div className="unified-dashboard">
      <header className="dashboard-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <DuotoneIcon icon={ArrowLeft} size="sm" colorScheme={colorSchemes.ui} /> Back to Main
        </button>
        <div className="header-brand">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Your Aussie Uncle"
            className="header-logo"
          />
          <h1>SpeakAussie</h1>
        </div>
        <p className="header-subtitle">Your Progress Dashboard</p>
      </header>

      <main className="dashboard-main">
        {/* Level & XP Section */}
        <section className="dashboard-section level-section">
          <div className="level-display">
            <div className="level-badge">
              <span className="level-icon"><DuotoneIcon icon={Trophy} size="lg" colorScheme={colorSchemes.stats} /></span>
              <span className="level-number">{level}</span>
            </div>
            <div className="level-info">
              <h2>Level {level}</h2>
              <div className="xp-bar-container">
                <div className="xp-bar">
                  <div
                    className="xp-fill"
                    style={{ width: `${Math.min(xpProgress.percentage, 100)}%` }}
                  ></div>
                </div>
                <span className="xp-text">
                  {xpProgress.progress} / {xpProgress.needed} XP to Level {level + 1}
                </span>
              </div>
            </div>
          </div>
          <div className="total-xp">
            <span className="xp-icon"><DuotoneIcon icon={Star} size="md" colorScheme={colorSchemes.stats} /></span>
            <span className="xp-value">{xp}</span>
            <span className="xp-label">Total XP</span>
          </div>
        </section>

        {/* Streak Section */}
        <section className="dashboard-section streak-section">
          <div className="streak-card current">
            <span className="streak-icon"><DuotoneIcon icon={Flame} size="lg" colorScheme={colorSchemes.stats} /></span>
            <div className="streak-info">
              <span className="streak-value">{streak}</span>
              <span className="streak-label">Day Streak</span>
            </div>
          </div>
          <div className="streak-card best">
            <span className="streak-icon"><DuotoneIcon icon={Dumbbell} size="lg" colorScheme={colorSchemes.stats} /></span>
            <div className="streak-info">
              <span className="streak-value">{maxStreak}</span>
              <span className="streak-label">Best Streak</span>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="dashboard-section stats-grid">
          <StatCard
            icon={<DuotoneIcon icon={MessageCircle} size="lg" colorScheme={colorSchemes.stats} />}
            value={progressStats.totalSessions}
            label="Conversations"
            variant="conversations"
            progress={(progressStats.totalSessions / 50) * 100}
            progressHint={`${progressStats.sessionsThisWeek} this week`}
          />
          <StatCard
            icon={<DuotoneIcon icon={Timer} size="lg" colorScheme={colorSchemes.stats} />}
            value={formatTime(progressStats.totalPracticeTime)}
            label="Practice Time"
            variant="time"
            progress={(progressStats.totalPracticeTime / 3600) * 100}
            progressHint={`${formatTime(progressStats.practiceTimeThisWeek)} this week`}
          />
          <StatCard
            icon={<DuotoneIcon icon={Briefcase} size="lg" colorScheme={colorSchemes.stats} />}
            value={workplaceProgress.learned}
            label="Workplace Phrases"
            variant="workplace"
            progress={workplaceProgress.percentage}
            progressHint={`${workplaceProgress.situationsComplete} situations complete`}
          />
          <StatCard
            icon={<DuotoneIcon icon={HelpCircle} size="lg" colorScheme={colorSchemes.stats} />}
            value={quizzesCompleted}
            label="Quizzes Completed"
            variant="quizzes"
            progress={(quizzesCompleted / 20) * 100}
            progressHint={`${cardsViewed} cards viewed`}
          />
          <StatCard
            icon={<DuotoneIcon icon={Medal} size="lg" colorScheme={colorSchemes.stats} />}
            value={unlockedAchievements.length}
            label="Achievements"
            variant="achievements"
            progress={(unlockedAchievements.length / allAchievements.length) * 100}
            progressHint={`${allAchievements.length - unlockedAchievements.length} to unlock`}
          />
        </section>

        {/* Achievements Preview */}
        <section className="dashboard-section achievements-preview">
          <h3>Recent Achievements</h3>
          {recentAchievements.length === 0 ? (
            <p className="no-achievements">Start learning to unlock achievements!</p>
          ) : (
            <div className="achievements-row">
              {recentAchievements.map((achievement) => (
                <AchievementMini key={achievement.id} achievement={achievement} />
              ))}
            </div>
          )}
        </section>

        {/* Quick Links */}
        <section className="dashboard-section quick-links">
          <h3>Continue Learning</h3>
          <div className="links-row">
            <QuickLink
              icon={<DuotoneIcon icon={Briefcase} size="lg" colorScheme={colorSchemes.industry} />}
              text="Workplace"
              variant="workplace"
              onClick={navigateToWorkplace}
            />
            <QuickLink
              icon={<DuotoneIcon icon={Mic} size="lg" colorScheme={colorSchemes.socialCulture} />}
              text="Speak"
              variant="speak"
              onClick={navigateToSpeak}
            />
            <QuickLink
              icon={<DuotoneIcon icon={MessageCircle} size="lg" colorScheme={colorSchemes.careerGrowth} />}
              text="Practice"
              variant="practice"
              onClick={navigateToApp}
            />
          </div>
        </section>
      </main>

      <footer className="dashboard-footer">
        <p>
          Powered by{' '}
          <a href="https://youraussieuncle.com" target="_blank" rel="noopener noreferrer">
            Your Aussie Uncle
          </a>
        </p>
      </footer>
    </div>
  );
}

export default UnifiedDashboard;
