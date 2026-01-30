import { useState, useCallback } from 'react';
import {
  WorkplaceSituation,
  getSituationPhrases,
  situationNames,
  WorkplacePhrase,
} from '../../data/workplaceData';
import { useWorkplaceProgress } from '../../hooks/useWorkplaceProgress';
import { useGamification } from '../../hooks/useGamification';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { useQuizKeyboard } from '../../hooks/useQuizKeyboard';
import {
  DuotoneIcon,
  FileText,
  Flame,
  Trophy,
  Sparkles,
  ThumbsUp,
  colorSchemes,
} from '../icons';
import './WorkplaceFillBlank.css';

// Map result icons
const getResultIcon = (score: number, total: number) => {
  if (score === total) return <DuotoneIcon icon={Trophy} size="xl" colorScheme={colorSchemes.stats} />;
  if (score >= total * 0.8) return <DuotoneIcon icon={Sparkles} size="xl" colorScheme={colorSchemes.socialCulture} />;
  return <DuotoneIcon icon={ThumbsUp} size="xl" colorScheme={colorSchemes.careerGrowth} />;
};

interface WorkplaceFillBlankProps {
  situation: WorkplaceSituation;
  onBack: () => void;
}

interface FillBlankQuestion {
  phrase: WorkplacePhrase;
  sentence: string;
  blank: string;
  options: string[];
}

const QUIZ_LENGTH = 8;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateQuestions(phrases: WorkplacePhrase[]): FillBlankQuestion[] {
  const shuffled = shuffleArray(phrases).slice(0, Math.min(QUIZ_LENGTH, phrases.length));

  return shuffled.map(phrase => {
    // Use the example sentence and blank out the phrase
    const example = phrase.example;
    const phraseToBlank = phrase.phrase;

    // Create blank sentence - try to find the phrase in the example
    let sentence = example;
    let blank = phraseToBlank;

    // Check if the exact phrase is in the example (case-insensitive)
    const lowerExample = example.toLowerCase();
    const lowerPhrase = phraseToBlank.toLowerCase();
    const phraseIndex = lowerExample.indexOf(lowerPhrase);

    if (phraseIndex !== -1) {
      // Replace the phrase with a blank
      const actualPhrase = example.substring(phraseIndex, phraseIndex + phraseToBlank.length);
      sentence = example.replace(actualPhrase, '_____');
      blank = actualPhrase;
    } else {
      // Create a context sentence from the meaning
      sentence = `Someone says "_____" when they want to ${phrase.meaning.toLowerCase()}.`;
      blank = phraseToBlank;
    }

    // Generate wrong options from other phrases
    const otherPhrases = phrases.filter(p => p.id !== phrase.id);
    const wrongOptions = shuffleArray(otherPhrases)
      .slice(0, 3)
      .map(p => p.phrase);

    const options = shuffleArray([blank, ...wrongOptions]);

    return {
      phrase,
      sentence,
      blank,
      options,
    };
  });
}

type GameState = 'start' | 'playing' | 'feedback' | 'results';

export function WorkplaceFillBlank({ situation, onBack }: WorkplaceFillBlankProps) {
  const [gameState, setGameState] = useState<GameState>('start');
  const [questions, setQuestions] = useState<FillBlankQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const { markPhraseLearned } = useWorkplaceProgress();
  const { recordQuizComplete, recordQuizCorrect } = useGamification();
  const { playCorrect, playIncorrect, playSuccess } = useSoundEffects();

  const phrases = getSituationPhrases(situation);

  const startGame = useCallback(() => {
    const newQuestions = generateQuestions(phrases);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameState('playing');
  }, [phrases]);

  const handleAnswer = useCallback((answer: string) => {
    const question = questions[currentIndex];
    const correct = answer.toLowerCase() === question.blank.toLowerCase();

    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      playCorrect();
      recordQuizCorrect();
      markPhraseLearned(question.phrase.id, situation);
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      playIncorrect();
      setStreak(0);
    }

    setGameState('feedback');
  }, [questions, currentIndex, situation, playCorrect, playIncorrect, recordQuizCorrect, markPhraseLearned]);

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= questions.length) {
      recordQuizComplete(score, questions.length);
      playSuccess();
      setGameState('results');
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setGameState('playing');
    }
  }, [currentIndex, questions.length, score, recordQuizComplete, playSuccess]);

  const getResultMessage = (finalScore: number, total: number) => {
    const percentage = (finalScore / total) * 100;
    if (percentage === 100) return "Perfect! You're a natural!";
    if (percentage >= 80) return "Ripper! Nearly there!";
    if (percentage >= 60) return "Good stuff! Keep practicing.";
    if (percentage >= 40) return "Not bad - you're getting there.";
    return "No worries, have another crack!";
  };

  const question = questions[currentIndex];

  // Keyboard navigation
  const handleKeyboardAnswer = useCallback((index: number) => {
    if (gameState === 'playing' && question && index < question.options.length) {
      handleAnswer(question.options[index]);
    }
  }, [gameState, question, handleAnswer]);

  useQuizKeyboard({
    isPlaying: gameState === 'playing',
    isFeedback: gameState === 'feedback',
    optionsCount: question?.options.length ?? 4,
    onSelectAnswer: handleKeyboardAnswer,
    onNext: nextQuestion,
    onBack,
  });

  return (
    <div className="fill-blank">
      <div className="fill-blank-header">
        <button className="back-btn" onClick={onBack} aria-label="Go back to situation overview">← Back</button>
        <h2>Fill in the Blank</h2>
      </div>

      {gameState === 'start' && (
        <div className="fill-blank-start">
          <div className="start-intro">
            <span className="start-icon"><DuotoneIcon icon={FileText} size="xl" colorScheme={colorSchemes.careerGrowth} /></span>
            <h3>Complete the Sentence</h3>
            <p>Use {situationNames[situation].toLowerCase()} phrases in context.</p>
            <p className="start-info">{Math.min(QUIZ_LENGTH, phrases.length)} sentences</p>
          </div>
          <button className="start-btn" onClick={startGame} aria-label="Start fill in the blank game">
            Start
          </button>
        </div>
      )}

      {(gameState === 'playing' || gameState === 'feedback') && question && (
        <div className="fill-blank-playing">
          <div className="game-progress" aria-live="polite">
            <span className="question-count">
              {currentIndex + 1} of {questions.length}
            </span>
            <span className="game-score">Score: {score}</span>
            {streak >= 3 && (
              <span className="streak-badge"><DuotoneIcon icon={Flame} size="xs" colorScheme={colorSchemes.stats} /> {streak} streak!</span>
            )}
          </div>

          <div className="sentence-card">
            <p className="sentence-prompt">Complete the sentence:</p>
            <p className="sentence-text">{question.sentence}</p>
          </div>

          <div className="options-grid">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  gameState === 'feedback'
                    ? option.toLowerCase() === question.blank.toLowerCase()
                      ? 'correct'
                      : option === selectedAnswer
                      ? 'incorrect'
                      : 'disabled'
                    : ''
                }`}
                onClick={() => gameState === 'playing' && handleAnswer(option)}
                disabled={gameState === 'feedback'}
                aria-label={`Option ${index + 1}: ${option}. Press ${index + 1} to select.`}
              >
                <span className="option-key">{index + 1}</span>
                {option}
              </button>
            ))}
          </div>
          {gameState === 'playing' && (
            <p className="keyboard-hint">Press 1-{question.options.length} to answer, Esc to exit</p>
          )}

          {gameState === 'feedback' && (
            <div className={`feedback-panel ${isCorrect ? 'correct' : 'incorrect'}`}>
              <p className="feedback-title">
                {isCorrect ? '✓ Correct!' : '✗ Not quite'}
              </p>
              {!isCorrect && (
                <p className="correct-answer-text">
                  Answer: <strong>{question.blank}</strong>
                </p>
              )}
              <p className="feedback-context">{question.phrase.context}</p>
              <button className="next-btn" onClick={nextQuestion} aria-label={currentIndex + 1 >= questions.length ? 'See results' : 'Go to next question'}>
                {currentIndex + 1 >= questions.length ? 'See Results' : 'Next →'}
              </button>
            </div>
          )}
        </div>
      )}

      {gameState === 'results' && (
        <div className="fill-blank-results" aria-live="polite">
          <div className="results-header">
            <span className="results-icon">
              {getResultIcon(score, questions.length)}
            </span>
            <h3>Complete!</h3>
          </div>

          <div className="results-score">
            <span className="big-score">{score}</span>
            <span className="score-divider">/</span>
            <span className="total-score">{questions.length}</span>
          </div>

          <p className="results-message">{getResultMessage(score, questions.length)}</p>

          {score === questions.length && (
            <p className="perfect-bonus">+50 XP Perfect Round!</p>
          )}

          <div className="results-actions">
            <button className="retry-btn" onClick={startGame} aria-label="Try the game again">
              Try Again
            </button>
            <button className="done-btn" onClick={onBack} aria-label="Finish and go back">
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
