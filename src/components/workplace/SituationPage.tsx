import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  WorkplaceSituation,
  situationNames,
  situationDescriptions,
  situationIcons,
  getSituationPhrases,
  getSituationSubcategories,
  subcategoryNames,
} from '../../data/workplaceData';
import { useWorkplaceProgress } from '../../hooks/useWorkplaceProgress';
import { useGamification } from '../../hooks/useGamification';
import { WorkplaceFlashcards } from './WorkplaceFlashcards';
import { WorkplaceQuiz } from './WorkplaceQuiz';
import { WorkplaceFillBlank } from './WorkplaceFillBlank';
import './SituationPage.css';

type GameMode = 'overview' | 'flashcards' | 'quiz' | 'fillblank' | 'favorites';

export function SituationPage() {
  const { situation } = useParams<{ situation: WorkplaceSituation }>();
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState<GameMode>('overview');

  const {
    getSituationProgress,
    isSituationUnlocked,
    getReviewCount,
    favorites,
    isPhraseLearned,
  } = useWorkplaceProgress();

  useGamification(); // Initialize gamification tracking

  // Validate situation
  if (!situation || !situationNames[situation as WorkplaceSituation]) {
    return (
      <div className="situation-page">
        <p>Situation not found.</p>
        <button onClick={() => navigate('/workplace')}>Back to Workplace</button>
      </div>
    );
  }

  const validSituation = situation as WorkplaceSituation;
  const phrases = getSituationPhrases(validSituation);
  const subcategories = getSituationSubcategories(validSituation);
  const progress = getSituationProgress(validSituation);
  const reviewCount = getReviewCount(validSituation);
  const isUnlocked = isSituationUnlocked(validSituation);

  const situationFavorites = useMemo(() => {
    return phrases.filter(p => favorites.includes(p.id));
  }, [phrases, favorites]);

  // Get next subcategory to learn
  const getNextSubcategory = () => {
    for (const sub of subcategories) {
      const subPhrases = phrases.filter(p => p.subcategory === sub);
      const learned = subPhrases.filter(p =>
        isPhraseLearned(p.id, validSituation)
      ).length;
      if (learned < subPhrases.length) {
        return { subcategory: sub, count: subPhrases.length };
      }
    }
    return null;
  };

  const nextSubcategory = getNextSubcategory();

  if (!isUnlocked) {
    return (
      <div className="situation-page locked">
        <header className="situation-header">
          <button className="back-btn" onClick={() => navigate('/workplace')}>
            ← Back
          </button>
          <h1>🔒 {situationNames[validSituation]}</h1>
        </header>
        <main className="situation-main">
          <div className="locked-message">
            <p>Complete the previous situation to unlock this one!</p>
            <button onClick={() => navigate('/workplace')}>Go Back</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="situation-page">
      <header className="situation-header">
        <button className="back-btn" onClick={() => navigate('/workplace')}>
          ← Back
        </button>
        <div className="header-title">
          <span className="header-icon">{situationIcons[validSituation]}</span>
          <h1>{situationNames[validSituation]}</h1>
        </div>
        <p className="header-progress">
          You've nailed {progress.learned} phrases. {progress.total - progress.learned} to go.
        </p>
      </header>

      {activeMode === 'overview' && (
        <main className="situation-main">
          {/* Up Next Card */}
          <section className="up-next-section">
            <h2>Up Next{nextSubcategory ? `: ${subcategoryNames[nextSubcategory.subcategory] || nextSubcategory.subcategory}` : ''}</h2>
            <button
              className="up-next-card"
              onClick={() => setActiveMode('flashcards')}
            >
              <span className="up-next-icon">📇</span>
              <div className="up-next-content">
                <h3>Learn {nextSubcategory ? nextSubcategory.count : phrases.length} phrases</h3>
                <p>{situationDescriptions[validSituation]}</p>
              </div>
              <span className="up-next-arrow">→</span>
            </button>
          </section>

          {/* Practice Section */}
          <section className="practice-section">
            <h2>Practice What You've Learned</h2>
            <div className="practice-grid">
              <button
                className="practice-card"
                onClick={() => setActiveMode('quiz')}
              >
                <span className="practice-icon">❓</span>
                <h3>Quiz</h3>
                <p>Test your recall</p>
              </button>
              <button
                className="practice-card"
                onClick={() => setActiveMode('fillblank')}
              >
                <span className="practice-icon">📝</span>
                <h3>Fill in the Blank</h3>
                <p>Use them in context</p>
              </button>
              <button
                className="practice-card"
                onClick={() => setActiveMode('favorites')}
              >
                <span className="practice-icon">⭐</span>
                <h3>Favorites</h3>
                <p>{situationFavorites.length} saved</p>
              </button>
            </div>
          </section>

          {/* Review Reminder */}
          {reviewCount > 0 && (
            <section className="review-section">
              <p>
                🔁 {reviewCount} phrase{reviewCount !== 1 ? 's' : ''} getting rusty
              </p>
              <button
                className="refresh-btn"
                onClick={() => setActiveMode('flashcards')}
              >
                Refresh now
              </button>
            </section>
          )}

          {/* Subcategories */}
          <section className="subcategories-section">
            <h2>Topics in this Situation</h2>
            <div className="subcategory-list">
              {subcategories.map(sub => {
                const subPhrases = phrases.filter(p => p.subcategory === sub);
                return (
                  <div key={sub} className="subcategory-item">
                    <span className="sub-name">{subcategoryNames[sub] || sub}</span>
                    <span className="sub-count">{subPhrases.length} phrases</span>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      )}

      {activeMode === 'flashcards' && (
        <main className="situation-main game-mode">
          <WorkplaceFlashcards
            situation={validSituation}
            onBack={() => setActiveMode('overview')}
          />
        </main>
      )}

      {activeMode === 'quiz' && (
        <main className="situation-main game-mode">
          <WorkplaceQuiz
            situation={validSituation}
            onBack={() => setActiveMode('overview')}
          />
        </main>
      )}

      {activeMode === 'fillblank' && (
        <main className="situation-main game-mode">
          <WorkplaceFillBlank
            situation={validSituation}
            onBack={() => setActiveMode('overview')}
          />
        </main>
      )}

      {activeMode === 'favorites' && (
        <main className="situation-main">
          <button className="mode-back-btn" onClick={() => setActiveMode('overview')}>
            ← Back to Overview
          </button>
          <h2>Your Favorites</h2>
          {situationFavorites.length === 0 ? (
            <p className="no-favorites">
              No favorites in this situation yet. Click the heart icon on flashcards to save phrases!
            </p>
          ) : (
            <div className="favorites-list">
              {situationFavorites.map(phrase => (
                <div key={phrase.id} className="favorite-card">
                  <div className="fav-phrase">"{phrase.phrase}"</div>
                  <div className="fav-meaning">{phrase.meaning}</div>
                  <div className="fav-context">{phrase.context}</div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default SituationPage;
