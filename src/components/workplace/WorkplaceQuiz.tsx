import { useState, useCallback } from 'react';
import {
  WorkplaceSituation,
  WorkplacePhrase,
  getSituationPhrases,
  situationNames,
} from '../../data/workplaceData';
import { useWorkplaceProgress } from '../../hooks/useWorkplaceProgress';
import { useGamification } from '../../hooks/useGamification';
import { useSoundEffects } from '../../hooks/useSoundEffects';
import { useQuizKeyboard } from '../../hooks/useQuizKeyboard';
import {
  DuotoneIcon,
  HelpCircle,
  Flame,
  Trophy,
  Sparkles,
  ThumbsUp,
  ArrowLeft,
  colorSchemes,
} from '../icons';
import { ChevronRight } from 'lucide-react';
import './WorkplaceQuiz.css';

// Map result icons
const getResultIcon = (score: number, total: number) => {
  if (score === total) return <DuotoneIcon icon={Trophy} size="xl" colorScheme={colorSchemes.stats} />;
  if (score >= total * 0.8) return <DuotoneIcon icon={Sparkles} size="xl" colorScheme={colorSchemes.socialCulture} />;
  return <DuotoneIcon icon={ThumbsUp} size="xl" colorScheme={colorSchemes.careerGrowth} />;
};

interface WorkplaceQuizProps {
  situation: WorkplaceSituation;
  onBack: () => void;
}

interface QuizQuestion {
  phrase: WorkplacePhrase;
  questionType: 'phrase-to-meaning' | 'scenario';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const QUIZ_LENGTH = 10;

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateQuestions(phrases: WorkplacePhrase[]): QuizQuestion[] {
  const shuffled = shuffleArray(phrases).slice(0, Math.min(QUIZ_LENGTH, phrases.length));

  return shuffled.map((phrase, index) => {
    // Alternate between question types for variety
    const questionType = index % 2 === 0 ? 'phrase-to-meaning' : 'scenario';

    if (questionType === 'phrase-to-meaning') {
      // Standard: What does this phrase mean?
      const correctAnswer = phrase.meaning;
      const otherPhrases = phrases.filter(p => p.id !== phrase.id);
      const wrongAnswers = shuffleArray(otherPhrases)
        .slice(0, 3)
        .map(p => p.meaning);
      const options = shuffleArray([correctAnswer, ...wrongAnswers]);

      return {
        phrase,
        questionType,
        question: `What does "${phrase.phrase}" mean?`,
        options,
        correctAnswer,
        explanation: phrase.context,
      };
    } else {
      // Scenario: What would you say in this situation?
      const correctAnswer = phrase.phrase;
      const otherPhrases = phrases.filter(p => p.id !== phrase.id && p.subcategory === phrase.subcategory);
      const wrongPool = otherPhrases.length >= 3 ? otherPhrases : phrases.filter(p => p.id !== phrase.id);
      const wrongAnswers = shuffleArray(wrongPool)
        .slice(0, 3)
        .map(p => p.phrase);
      const options = shuffleArray([correctAnswer, ...wrongAnswers]);

      // Create a scenario question based on context
      const scenarioQuestions = [
        `${phrase.context}. What would you say?`,
        `You want to ${phrase.meaning.toLowerCase()}. What's a natural way to express this?`,
        `Which phrase would work in this situation: ${phrase.context.toLowerCase()}?`,
      ];
      const question = scenarioQuestions[index % scenarioQuestions.length];

      return {
        phrase,
        questionType,
        question,
        options,
        correctAnswer,
        explanation: `"${phrase.phrase}" - ${phrase.whatTheyHear}`,
      };
    }
  });
}

type QuizState = 'start' | 'playing' | 'feedback' | 'results';

export function WorkplaceQuiz({ situation, onBack }: WorkplaceQuizProps) {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);

  const { recordQuizComplete } = useWorkplaceProgress();
  const { recordQuizComplete: recordGamificationQuiz, recordQuizCorrect } = useGamification();
  const { playCorrect, playIncorrect, playSuccess } = useSoundEffects();

  const phrases = getSituationPhrases(situation);

  const startQuiz = useCallback(() => {
    const newQuestions = generateQuestions(phrases);
    setQuestions(newQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setQuizState('playing');
  }, [phrases]);

  const handleAnswer = useCallback((answer: string) => {
    const correct = answer === questions[currentQuestion].correctAnswer;
    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      playCorrect();
      recordQuizCorrect();
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      playIncorrect();
      setStreak(0);
    }

    setQuizState('feedback');
  }, [questions, currentQuestion, playCorrect, playIncorrect, recordQuizCorrect]);

  const nextQuestion = useCallback(() => {
    if (currentQuestion + 1 >= questions.length) {
      recordQuizComplete(situation, score + (isCorrect ? 0 : 0), questions.length);
      recordGamificationQuiz(score, questions.length);
      playSuccess();
      setQuizState('results');
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setQuizState('playing');
    }
  }, [currentQuestion, questions.length, score, isCorrect, situation, recordQuizComplete, recordGamificationQuiz, playSuccess]);

  const getResultMessage = (finalScore: number, total: number) => {
    const percentage = (finalScore / total) * 100;
    if (percentage === 100) return "Perfect! You're nailing this!";
    if (percentage >= 80) return "Nice one! You're getting the hang of it.";
    if (percentage >= 60) return "Good effort! Keep practicing.";
    if (percentage >= 40) return "Not bad - a bit more practice and you'll have it.";
    return "No worries, give it another crack!";
  };

  const question = questions[currentQuestion];

  // Keyboard navigation
  const handleKeyboardAnswer = useCallback((index: number) => {
    if (quizState === 'playing' && question && index < question.options.length) {
      handleAnswer(question.options[index]);
    }
  }, [quizState, question, handleAnswer]);

  useQuizKeyboard({
    isPlaying: quizState === 'playing',
    isFeedback: quizState === 'feedback',
    optionsCount: question?.options.length ?? 4,
    onSelectAnswer: handleKeyboardAnswer,
    onNext: nextQuestion,
    onBack,
  });

  return (
    <div className="workplace-quiz">
      <div className="quiz-header">
        <button className="back-btn" onClick={onBack} aria-label="Go back to situation overview"><ArrowLeft size={16} /> Back</button>
        <h2>{situationNames[situation]} Quiz</h2>
      </div>

      {quizState === 'start' && (
        <div className="quiz-start">
          <div className="quiz-intro">
            <span className="quiz-icon"><DuotoneIcon icon={HelpCircle} size="xl" colorScheme={colorSchemes.stats} /></span>
            <h3>Ready for a Quiz?</h3>
            <p>Test your knowledge of {situationNames[situation].toLowerCase()} phrases.</p>
            <p className="quiz-info">{Math.min(QUIZ_LENGTH, phrases.length)} questions</p>
          </div>
          <button className="start-btn" onClick={startQuiz} aria-label="Start the quiz">
            Start Quiz
          </button>
        </div>
      )}

      {(quizState === 'playing' || quizState === 'feedback') && question && (
        <div className="quiz-playing">
          <div className="quiz-progress" aria-live="polite">
            <span className="question-count">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="quiz-score">Score: {score}</span>
            {streak >= 3 && (
              <span className="streak-badge"><DuotoneIcon icon={Flame} size="xs" colorScheme={colorSchemes.stats} /> {streak} in a row!</span>
            )}
          </div>

          <div className="question-card">
            <p className="question-text">{question.question}</p>

            <div className="answer-options">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`answer-btn ${
                    quizState === 'feedback'
                      ? option === question.correctAnswer
                        ? 'correct'
                        : option === selectedAnswer
                        ? 'incorrect'
                        : 'disabled'
                      : ''
                  }`}
                  onClick={() => quizState === 'playing' && handleAnswer(option)}
                  disabled={quizState === 'feedback'}
                  aria-label={`Option ${index + 1}: ${option}. Press ${index + 1} to select.`}
                >
                  <span className="answer-key">{index + 1}</span>
                  {option}
                </button>
              ))}
            </div>
            {quizState === 'playing' && (
              <p className="keyboard-hint">Press 1-{question.options.length} to answer, Esc to exit</p>
            )}
          </div>

          {quizState === 'feedback' && (
            <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`} aria-live="polite">
              <p className="feedback-message">
                {isCorrect ? 'Nice one!' : 'Not quite!'}
              </p>
              {!isCorrect && (
                <p className="correct-answer">
                  The answer was: <strong>{question.correctAnswer}</strong>
                </p>
              )}
              <p className="explanation">{question.explanation}</p>
              <button className="next-btn" onClick={nextQuestion} aria-label={currentQuestion + 1 >= questions.length ? 'See results' : 'Go to next question'}>
                {currentQuestion + 1 >= questions.length ? 'See Results' : <>Next <ChevronRight size={16} /></>}
              </button>
            </div>
          )}
        </div>
      )}

      {quizState === 'results' && (
        <div className="quiz-results" aria-live="polite">
          <div className="results-header">
            <span className="results-icon">
              {getResultIcon(score, questions.length)}
            </span>
            <h3>Quiz Complete!</h3>
          </div>

          <div className="results-score">
            <span className="big-score">{score}</span>
            <span className="score-divider">/</span>
            <span className="total-score">{questions.length}</span>
          </div>

          <p className="results-message">{getResultMessage(score, questions.length)}</p>

          {score === questions.length && (
            <p className="perfect-bonus">+50 XP Perfect Quiz Bonus!</p>
          )}

          <div className="results-actions">
            <button className="retry-btn" onClick={startQuiz} aria-label="Try the quiz again">
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
