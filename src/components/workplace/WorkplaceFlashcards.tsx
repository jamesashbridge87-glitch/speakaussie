import { useState, useCallback, useMemo } from 'react';
import {
  WorkplaceSituation,
  getSituationPhrases,
  subcategoryNames,
  difficultyNames,
  WorkplaceDifficulty,
} from '../../data/workplaceData';
import { useWorkplaceProgress } from '../../hooks/useWorkplaceProgress';
import { useGamification } from '../../hooks/useGamification';
import { useTextToSpeech } from '../../hooks/useTextToSpeech';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import './WorkplaceFlashcards.css';

interface WorkplaceFlashcardsProps {
  situation: WorkplaceSituation;
  onBack: () => void;
}

export function WorkplaceFlashcards({ situation, onBack }: WorkplaceFlashcardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showExpanded, setShowExpanded] = useState(false);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | 'all'>('all');

  const {
    markPhraseLearned,
    recordFlashcardFeedback,
    toggleFavorite,
    isFavorite,
  } = useWorkplaceProgress();

  const { recordCardView, addXP } = useGamification();
  const { speak, isSpeaking, isSupported: ttsSupported } = useTextToSpeech();
  const { playFlip } = useSoundEffects();

  const allPhrases = getSituationPhrases(situation);
  const subcategories = [...new Set(allPhrases.map(p => p.subcategory))];

  const filteredPhrases = useMemo(() => {
    if (selectedSubcategory === 'all') return allPhrases;
    return allPhrases.filter(p => p.subcategory === selectedSubcategory);
  }, [allPhrases, selectedSubcategory]);

  const currentPhrase = filteredPhrases[currentIndex];

  const handleFeedback = useCallback((nailed: boolean) => {
    if (!currentPhrase) return;

    recordFlashcardFeedback(currentPhrase.id, situation, nailed);
    markPhraseLearned(currentPhrase.id, situation);
    recordCardView();
    addXP(nailed ? 2 : 1, nailed ? 'nailed' : 'practice');
    playFlip();

    // Move to next card
    if (currentIndex < filteredPhrases.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowExpanded(false);
    }
  }, [currentPhrase, situation, recordFlashcardFeedback, markPhraseLearned, recordCardView, addXP, playFlip, currentIndex, filteredPhrases.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
    setShowExpanded(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(filteredPhrases.length - 1, prev + 1));
    setShowExpanded(false);
  }, [filteredPhrases.length]);

  const handleSpeak = useCallback((e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    speak(text);
  }, [speak]);

  const handleToggleFavorite = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentPhrase) {
      toggleFavorite(currentPhrase.id);
    }
  }, [currentPhrase, toggleFavorite]);

  const getDifficultyColor = (difficulty: WorkplaceDifficulty) => {
    switch (difficulty) {
      case 'beginner': return '#22c55e';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#ef4444';
    }
  };

  if (!currentPhrase) {
    return (
      <div className="workplace-flashcards">
        <button className="back-btn" onClick={onBack} aria-label="Go back to situation overview">← Back</button>
        <p>No phrases available for this filter.</p>
      </div>
    );
  }

  return (
    <div className="workplace-flashcards">
      <div className="flashcard-header">
        <button className="back-btn" onClick={onBack} aria-label="Go back to situation overview">← Back</button>
        <span className="subcategory-label">
          {subcategoryNames[currentPhrase.subcategory] || currentPhrase.subcategory}
        </span>
      </div>

      {/* Filter */}
      <div className="flashcard-filter">
        <select
          value={selectedSubcategory}
          onChange={(e) => {
            setSelectedSubcategory(e.target.value);
            setCurrentIndex(0);
            setShowExpanded(false);
          }}
          className="subcategory-select"
        >
          <option value="all">All Topics ({allPhrases.length})</option>
          {subcategories.map(sub => (
            <option key={sub} value={sub}>
              {subcategoryNames[sub] || sub} ({allPhrases.filter(p => p.subcategory === sub).length})
            </option>
          ))}
        </select>
      </div>

      {/* Flashcard */}
      <div className="flashcard-container">
        <div className="flashcard">
          {/* Action buttons */}
          <div className="flashcard-actions">
            <button
              className={`action-btn favorite ${isFavorite(currentPhrase.id) ? 'active' : ''}`}
              onClick={handleToggleFavorite}
              aria-label="Toggle favorite"
            >
              {isFavorite(currentPhrase.id) ? '❤️' : '🤍'}
            </button>
            {ttsSupported && (
              <button
                className={`action-btn speak ${isSpeaking ? 'speaking' : ''}`}
                onClick={(e) => handleSpeak(e, currentPhrase.phrase)}
                aria-label="Listen to pronunciation"
              >
                🔊
              </button>
            )}
          </div>

          {/* Difficulty badge */}
          <span
            className="difficulty-badge"
            style={{ backgroundColor: getDifficultyColor(currentPhrase.difficulty) }}
          >
            {difficultyNames[currentPhrase.difficulty]}
          </span>

          {/* Main content */}
          <div className="flashcard-main">
            <div className="phrase">"{currentPhrase.phrase}"</div>
            <div className="divider"></div>
            <div className="meaning">{currentPhrase.meaning}</div>
          </div>

          {/* Expandable content */}
          {!showExpanded ? (
            <button
              className="expand-btn"
              onClick={() => setShowExpanded(true)}
              aria-label="See more details about this phrase"
            >
              See more ↓
            </button>
          ) : (
            <div className="expanded-content">
              <div className="detail-section">
                <h4>When to use</h4>
                <p>{currentPhrase.context}</p>
              </div>

              <div className="detail-section">
                <h4>What they hear</h4>
                <p>"{currentPhrase.whatTheyHear}"</p>
              </div>

              {currentPhrase.alternatives && currentPhrase.alternatives.length > 0 && (
                <div className="detail-section">
                  <h4>Also works</h4>
                  <p>{currentPhrase.alternatives.join(' • ')}</p>
                </div>
              )}

              {currentPhrase.avoid && (
                <div className="detail-section avoid">
                  <h4>Avoid</h4>
                  <p>{currentPhrase.avoid}</p>
                </div>
              )}

              {currentPhrase.culturalNote && (
                <div className="detail-section cultural">
                  <h4>Cultural tip</h4>
                  <p>{currentPhrase.culturalNote}</p>
                </div>
              )}

              <div className="detail-section example">
                <h4>Example</h4>
                <p>"{currentPhrase.example}"</p>
                {ttsSupported && (
                  <button
                    className="speak-example-btn"
                    onClick={(e) => handleSpeak(e, currentPhrase.example)}
                    aria-label="Listen to example pronunciation"
                  >
                    🔊 Listen
                  </button>
                )}
              </div>

              <button
                className="collapse-btn"
                onClick={() => setShowExpanded(false)}
                aria-label="Collapse phrase details"
              >
                Collapse ↑
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Feedback buttons */}
      <div className="feedback-buttons">
        <button
          className="feedback-btn need-practice"
          onClick={() => handleFeedback(false)}
          aria-label="Mark as needs more practice"
        >
          Need practice
        </button>
        <button
          className="feedback-btn nailed-it"
          onClick={() => handleFeedback(true)}
          aria-label="Mark as mastered"
        >
          Nailed it ✓
        </button>
      </div>

      {/* Navigation */}
      <div className="flashcard-nav">
        <button
          className="nav-btn"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          aria-label="Go to previous flashcard"
        >
          ← Previous
        </button>
        <span className="card-counter" aria-live="polite">
          {currentIndex + 1} / {filteredPhrases.length}
        </span>
        <button
          className="nav-btn"
          onClick={handleNext}
          disabled={currentIndex === filteredPhrases.length - 1}
          aria-label="Go to next flashcard"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
