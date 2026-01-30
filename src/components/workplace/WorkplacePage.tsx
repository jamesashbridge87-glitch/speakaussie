import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  situationOrder,
  situationNames,
  situationIcons,
  WorkplaceSituation,
  getSituationPhrases,
  workplaceData,
} from '../../data/workplaceData';
import { useWorkplaceProgress } from '../../hooks/useWorkplaceProgress';
import { useGamification } from '../../hooks/useGamification';
import {
  DuotoneIcon,
  Flame,
  Star,
  Trophy,
  Target,
  Heart,
  Lock,
  Repeat,
  MessageSquare,
  TrendingUp,
  Mic,
  Smile,
  ArrowLeft,
  colorSchemes,
} from '../icons';
import { Beer, RefreshCw, ChevronRight } from 'lucide-react';
import './WorkplacePage.css';

// Helper to get situation icon
const getSituationIcon = (emoji: string, isLocked: boolean) => {
  if (isLocked) {
    return <DuotoneIcon icon={Lock} size="md" colorScheme={colorSchemes.ui} />;
  }
  const iconMap: Record<string, React.ReactNode> = {
    '💬': <DuotoneIcon icon={MessageSquare} size="md" colorScheme={colorSchemes.socialCulture} />,
    '🍻': <DuotoneIcon icon={Beer} size="md" colorScheme={colorSchemes.socialCulture} />,
    '😏': <DuotoneIcon icon={Smile} size="md" colorScheme={colorSchemes.socialCulture} />,
    '📈': <DuotoneIcon icon={TrendingUp} size="md" colorScheme={colorSchemes.careerGrowth} />,
    '🔄': <DuotoneIcon icon={RefreshCw} size="md" colorScheme={colorSchemes.stats} />,
    '🎤': <DuotoneIcon icon={Mic} size="md" colorScheme={colorSchemes.industry} />,
  };
  return iconMap[emoji] || <DuotoneIcon icon={MessageSquare} size="md" colorScheme={colorSchemes.socialCulture} />;
};

type ViewMode = 'home' | 'all' | 'favorites' | 'stats';

export function WorkplacePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const navigate = useNavigate();

  const {
    getSituationProgress,
    isSituationUnlocked,
    getOverallProgress,
    getReviewCount,
    favorites,
    resetProgress,
  } = useWorkplaceProgress();

  const {
    xp,
    level,
    streak,
    getXPProgress,
  } = useGamification();

  const xpProgress = getXPProgress();
  const overallProgress = getOverallProgress();
  const totalReviewCount = getReviewCount();

  const handleSituationClick = (situation: WorkplaceSituation) => {
    if (isSituationUnlocked(situation)) {
      navigate(`/workplace/${situation}`);
    }
  };

  const handleQuickPrep = (situation: WorkplaceSituation) => {
    navigate(`/workplace/${situation}`);
  };

  return (
    <div className="workplace-page">
      {/* Header */}
      <header className="workplace-header">
        <button className="back-to-main" onClick={() => navigate('/')} aria-label="Go back to main app">
          <ArrowLeft size={16} /> Back to Main
        </button>
        <div className="header-brand">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Your Aussie Uncle"
            className="header-logo"
          />
          <h1>SpeakAussie</h1>
        </div>
        <p className="header-subtitle">Workplace Phrases</p>

        {/* Stats bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-icon"><DuotoneIcon icon={Flame} size="sm" colorScheme={colorSchemes.stats} /></span>
            <span className="stat-value">{streak}</span>
            <span className="stat-label">Streak</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon"><DuotoneIcon icon={Star} size="sm" colorScheme={colorSchemes.stats} /></span>
            <span className="stat-value">{xp}</span>
            <span className="stat-label">XP</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon"><DuotoneIcon icon={Trophy} size="sm" colorScheme={colorSchemes.stats} /></span>
            <span className="stat-value">{level}</span>
            <span className="stat-label">Level</span>
          </div>
        </div>

        {/* XP Progress bar */}
        <div className="xp-progress">
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
      </header>

      {/* Navigation */}
      <nav className="workplace-nav" aria-label="Workplace navigation">
        <button
          className={`nav-btn ${viewMode === 'home' ? 'active' : ''}`}
          onClick={() => setViewMode('home')}
          aria-label="Go to home view"
          aria-current={viewMode === 'home' ? 'page' : undefined}
        >
          Home
        </button>
        <button
          className={`nav-btn ${viewMode === 'all' ? 'active' : ''}`}
          onClick={() => setViewMode('all')}
          aria-label="View all situations"
          aria-current={viewMode === 'all' ? 'page' : undefined}
        >
          All Situations
        </button>
        <button
          className={`nav-btn ${viewMode === 'favorites' ? 'active' : ''}`}
          onClick={() => setViewMode('favorites')}
          aria-label={`View favorites, ${favorites.length} saved`}
          aria-current={viewMode === 'favorites' ? 'page' : undefined}
        >
          <DuotoneIcon icon={Heart} size="sm" colorScheme={colorSchemes.socialCulture} /> {favorites.length}
        </button>
        <button
          className={`nav-btn ${viewMode === 'stats' ? 'active' : ''}`}
          onClick={() => setViewMode('stats')}
          aria-label="View your statistics"
          aria-current={viewMode === 'stats' ? 'page' : undefined}
        >
          Stats
        </button>
      </nav>

      <main className="workplace-main" role="main">
        {viewMode === 'home' && (
          <>
            {/* Quick Prep Section */}
            <section className="quick-prep-section">
              <div className="quick-prep-card">
                <span className="quick-prep-icon"><DuotoneIcon icon={Target} size="lg" colorScheme={colorSchemes.careerGrowth} /></span>
                <h2>Quick Prep</h2>
                <p>Got something coming up?</p>
                <div className="quick-prep-buttons">
                  <button
                    className="quick-prep-btn"
                    onClick={() => handleQuickPrep('friday-drinks')}
                    aria-label="Prepare for Friday drinks conversation"
                  >
                    Friday drinks
                  </button>
                  <button
                    className="quick-prep-btn"
                    onClick={() => handleQuickPrep('presentations')}
                    aria-label="Prepare for a big meeting"
                  >
                    Big meeting
                  </button>
                  <button
                    className="quick-prep-btn"
                    onClick={() => handleQuickPrep('performance-reviews')}
                    aria-label="Prepare for performance review"
                  >
                    Performance review
                  </button>
                </div>
              </div>
            </section>

            {/* Your Path Section */}
            <section className="your-path-section">
              <h2>Your Path</h2>
              <p className="path-subtitle">Start with the everyday, then level up</p>

              <div className="path-container">
                {situationOrder.slice(0, 3).map((situation, index) => {
                  const progress = getSituationProgress(situation);
                  const isUnlocked = isSituationUnlocked(situation);
                  const isComplete = progress.isComplete;
                  const isCurrent = isUnlocked && !isComplete;

                  return (
                    <div key={situation} className="path-item-wrapper">
                      <button
                        className={`path-item ${isComplete ? 'complete' : ''} ${isCurrent ? 'current' : ''} ${!isUnlocked ? 'locked' : ''}`}
                        onClick={() => handleSituationClick(situation)}
                        disabled={!isUnlocked}
                      >
                        <span className="path-icon">
                          {getSituationIcon(situationIcons[situation], !isUnlocked)}
                        </span>
                        <span className="path-name">{situationNames[situation].split(' ')[0]}</span>
                        <span className="path-status">
                          {isComplete ? '✓ Done' : isUnlocked ? `${progress.learned}/${progress.total}` : <DuotoneIcon icon={Lock} size="xs" colorScheme={colorSchemes.ui} />}
                        </span>
                      </button>
                      {index < 2 && <span className="path-arrow"><ChevronRight size={16} /></span>}
                    </div>
                  );
                })}
                <span className="path-more">· · ·</span>
              </div>

              <button className="see-all-btn" onClick={() => setViewMode('all')} aria-label="See all available situations">
                See all situations <ChevronRight size={16} />
              </button>
            </section>

            {/* Review Reminder */}
            {totalReviewCount > 0 && (
              <section className="review-reminder">
                <p>
                  <DuotoneIcon icon={Repeat} size="sm" colorScheme={colorSchemes.stats} /> {totalReviewCount} phrase{totalReviewCount !== 1 ? 's' : ''} getting rusty —{' '}
                  <button className="link-btn" onClick={() => navigate('/workplace/small-talk')} aria-label="Refresh your rusty phrases">
                    quick refresh?
                  </button>
                </p>
              </section>
            )}
          </>
        )}

        {viewMode === 'all' && (
          <section className="all-situations">
            <h2>All Situations</h2>

            <div className="tier-group">
              <h3 className="tier-title">Foundation</h3>
              <div className="situation-grid">
                {situationOrder.slice(0, 2).map(situation => {
                  const progress = getSituationProgress(situation);
                  const isUnlocked = isSituationUnlocked(situation);
                  const phraseCount = getSituationPhrases(situation).length;

                  return (
                    <button
                      key={situation}
                      className={`situation-card ${!isUnlocked ? 'locked' : ''} ${progress.isComplete ? 'complete' : ''}`}
                      onClick={() => handleSituationClick(situation)}
                      disabled={!isUnlocked}
                    >
                      <span className="situation-icon">
                        {getSituationIcon(situationIcons[situation], !isUnlocked)}
                      </span>
                      <span className="situation-name">{situationNames[situation]}</span>
                      <div className="situation-progress">
                        {isUnlocked ? (
                          <>
                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{ width: `${progress.percentage}%` }}
                              ></div>
                            </div>
                            <span className="progress-text">
                              {progress.learned}/{phraseCount}
                            </span>
                          </>
                        ) : (
                          <span className="unlock-text">Complete {situationNames[situationOrder[situationOrder.indexOf(situation) - 1]].split(' ')[0]}</span>
                        )}
                      </div>
                      {progress.isComplete && <span className="complete-badge">Nailed it!</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="tier-group">
              <h3 className="tier-title">Level Up</h3>
              <div className="situation-grid">
                {situationOrder.slice(2, 4).map(situation => {
                  const progress = getSituationProgress(situation);
                  const isUnlocked = isSituationUnlocked(situation);
                  const phraseCount = getSituationPhrases(situation).length;

                  return (
                    <button
                      key={situation}
                      className={`situation-card ${!isUnlocked ? 'locked' : ''} ${progress.isComplete ? 'complete' : ''}`}
                      onClick={() => handleSituationClick(situation)}
                      disabled={!isUnlocked}
                    >
                      <span className="situation-icon">
                        {getSituationIcon(situationIcons[situation], !isUnlocked)}
                      </span>
                      <span className="situation-name">{situationNames[situation]}</span>
                      <div className="situation-progress">
                        {isUnlocked ? (
                          <>
                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{ width: `${progress.percentage}%` }}
                              ></div>
                            </div>
                            <span className="progress-text">
                              {progress.learned}/{phraseCount}
                            </span>
                          </>
                        ) : (
                          <span className="unlock-text">Complete previous</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="tier-group">
              <h3 className="tier-title">Professional</h3>
              <div className="situation-grid">
                {situationOrder.slice(4).map(situation => {
                  const progress = getSituationProgress(situation);
                  const isUnlocked = isSituationUnlocked(situation);
                  const phraseCount = getSituationPhrases(situation).length;

                  return (
                    <button
                      key={situation}
                      className={`situation-card ${!isUnlocked ? 'locked' : ''} ${progress.isComplete ? 'complete' : ''}`}
                      onClick={() => handleSituationClick(situation)}
                      disabled={!isUnlocked}
                    >
                      <span className="situation-icon">
                        {getSituationIcon(situationIcons[situation], !isUnlocked)}
                      </span>
                      <span className="situation-name">{situationNames[situation]}</span>
                      <div className="situation-progress">
                        {isUnlocked ? (
                          <>
                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{ width: `${progress.percentage}%` }}
                              ></div>
                            </div>
                            <span className="progress-text">
                              {progress.learned}/{phraseCount}
                            </span>
                          </>
                        ) : (
                          <span className="unlock-text">Complete previous</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <button className="back-btn" onClick={() => setViewMode('home')} aria-label="Go back to home view">
              <ArrowLeft size={16} /> Back to Home
            </button>
          </section>
        )}

        {viewMode === 'favorites' && (
          <section className="favorites-section">
            <h2>Your Favorites</h2>
            {favorites.length === 0 ? (
              <p className="no-favorites">
                No favorites yet. Click the heart icon on flashcards to save phrases!
              </p>
            ) : (
              <div className="favorites-list">
                {favorites.map(phraseId => {
                  const phrase = workplaceData.find(p => p.id === phraseId);
                  if (!phrase) return null;
                  return (
                    <div key={phraseId} className="favorite-card">
                      <div className="fav-phrase">"{phrase.phrase}"</div>
                      <div className="fav-meaning">{phrase.meaning}</div>
                      <div className="fav-situation">{situationNames[phrase.situation as WorkplaceSituation]}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {viewMode === 'stats' && (
          <section className="stats-section">
            <h2>Your Progress</h2>

            <div className="overall-progress">
              <h3>Workplace Phrases</h3>
              <div className="big-progress">
                <div className="progress-bar large">
                  <div
                    className="progress-fill"
                    style={{ width: `${overallProgress.percentage}%` }}
                  ></div>
                </div>
                <span className="progress-text">
                  {overallProgress.learned} / {overallProgress.total} phrases learned ({overallProgress.percentage}%)
                </span>
              </div>
            </div>

            <div className="situations-progress">
              <h3>Situations</h3>
              {situationOrder.map(situation => {
                const progress = getSituationProgress(situation);
                return (
                  <div key={situation} className="situation-progress-row">
                    <span className="situation-label">
                      {progress.isComplete ? '✓' : '○'} {situationNames[situation]}
                    </span>
                    <div className="progress-bar small">
                      <div
                        className="progress-fill"
                        style={{ width: `${progress.percentage}%` }}
                      ></div>
                    </div>
                    <span className="progress-fraction">
                      {progress.learned}/{progress.total}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">{overallProgress.situationsComplete}</span>
                <span className="stat-name">Situations Complete</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{favorites.length}</span>
                <span className="stat-name">Favorites</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">{totalReviewCount}</span>
                <span className="stat-name">Due for Review</span>
              </div>
            </div>

            <button className="reset-btn" onClick={resetProgress} aria-label="Reset all workplace progress">
              Reset Workplace Progress
            </button>
          </section>
        )}
      </main>

      {/* Upgrade Banner */}
      <div className="upgrade-banner">
        <div className="upgrade-content">
          <h3>Practice speaking?</h3>
          <p>Try our pronunciation practice or chat with Your Aussie Uncle!</p>
          <div className="upgrade-links">
            <a href="/stats" className="upgrade-link secondary">
              Stats Dashboard
            </a>
            <a href="/" className="upgrade-link primary">
              Full Experience
            </a>
          </div>
        </div>
      </div>

      <footer className="workplace-footer">
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

export default WorkplacePage;
