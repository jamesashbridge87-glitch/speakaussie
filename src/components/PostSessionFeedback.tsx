import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scenario } from '../data/scenarios';
import { getRandomEncouragement, getScenarioTip } from '../data/feedbackMessages';
import { useScenarioProgress, SessionFeedback } from '../hooks/useScenarioProgress';
import {
  DuotoneIcon,
  Target,
  Briefcase,
  BarChart3,
  TrendingUp,
  Sparkles,
  Theater,
  Stethoscope,
  Laptop,
  Users,
  FileText,
  Heart,
  Globe,
  Phone,
  Crown,
  Plane,
  Smile,
  UtensilsCrossed,
  HardHat,
  GraduationCap,
  Building,
  BookOpen,
  Mic,
  Repeat,
  colorSchemes,
} from './icons';
import { Rocket, Star, Dumbbell, Calendar, Lightbulb, ClipboardList } from 'lucide-react';
import './PostSessionFeedback.css';

// Map scenario emojis to Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  '🎯': <DuotoneIcon icon={Target} size="lg" colorScheme={colorSchemes.careerGrowth} />,
  '🚀': <DuotoneIcon icon={Rocket} size="lg" colorScheme={colorSchemes.careerGrowth} />,
  '💼': <DuotoneIcon icon={Briefcase} size="lg" colorScheme={colorSchemes.industry} />,
  '📊': <DuotoneIcon icon={BarChart3} size="lg" colorScheme={colorSchemes.stats} />,
  '📈': <DuotoneIcon icon={TrendingUp} size="lg" colorScheme={colorSchemes.careerGrowth} />,
  '🎉': <DuotoneIcon icon={Sparkles} size="lg" colorScheme={colorSchemes.socialCulture} />,
  '🎭': <DuotoneIcon icon={Theater} size="lg" colorScheme={colorSchemes.socialCulture} />,
  '🏥': <DuotoneIcon icon={Stethoscope} size="lg" colorScheme={colorSchemes.industry} />,
  '💻': <DuotoneIcon icon={Laptop} size="lg" colorScheme={colorSchemes.industry} />,
  '🌏': <DuotoneIcon icon={Globe} size="lg" colorScheme={colorSchemes.socialCulture} />,
  '📋': <DuotoneIcon icon={FileText} size="lg" colorScheme={colorSchemes.dailyWork} />,
  '💚': <DuotoneIcon icon={Heart} size="lg" colorScheme={colorSchemes.socialCulture} />,
  '🤝': <DuotoneIcon icon={Users} size="lg" colorScheme={colorSchemes.socialCulture} />,
  '📞': <DuotoneIcon icon={Phone} size="lg" colorScheme={colorSchemes.industry} />,
  '👑': <DuotoneIcon icon={Crown} size="lg" colorScheme={colorSchemes.stats} />,
  '✈️': <DuotoneIcon icon={Plane} size="lg" colorScheme={colorSchemes.careerGrowth} />,
  '😂': <DuotoneIcon icon={Smile} size="lg" colorScheme={colorSchemes.socialCulture} />,
  '🍽️': <DuotoneIcon icon={UtensilsCrossed} size="lg" colorScheme={colorSchemes.industry} />,
  '🏗️': <DuotoneIcon icon={HardHat} size="lg" colorScheme={colorSchemes.industry} />,
  '🎓': <DuotoneIcon icon={GraduationCap} size="lg" colorScheme={colorSchemes.careerGrowth} />,
  '🏦': <DuotoneIcon icon={Building} size="lg" colorScheme={colorSchemes.industry} />,
  '📚': <DuotoneIcon icon={BookOpen} size="lg" colorScheme={colorSchemes.careerGrowth} />,
  '🔄': <DuotoneIcon icon={Repeat} size="md" colorScheme={colorSchemes.stats} />,
  '🎤': <DuotoneIcon icon={Mic} size="md" colorScheme={colorSchemes.socialCulture} />,
  '📅': <DuotoneIcon icon={Calendar} size="md" colorScheme={colorSchemes.dailyWork} />,
  '💡': <DuotoneIcon icon={Lightbulb} size="md" colorScheme={colorSchemes.stats} />,
  '📝': <DuotoneIcon icon={ClipboardList} size="md" colorScheme={colorSchemes.dailyWork} />,
};

const getIcon = (emoji: string) => {
  if (iconMap[emoji]) {
    return iconMap[emoji];
  }
  return <span style={{ fontSize: 32 }}>{emoji}</span>;
};

export type SessionFeeling = 'great' | 'okay' | 'tough';

interface PostSessionFeedbackProps {
  scenario: Scenario;
  onComplete: (feeling: SessionFeeling) => void;
  onSelectScenario: (scenario: Scenario) => void;
  recommendedScenario?: Scenario | null;
}

// Map session feeling to spaced repetition feedback
const feelingToFeedback: Record<SessionFeeling, SessionFeedback> = {
  great: 'easy',
  okay: 'good',
  tough: 'hard',
};

export function PostSessionFeedback({
  scenario,
  onComplete,
  onSelectScenario,
  recommendedScenario,
}: PostSessionFeedbackProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<'feeling' | 'feedback' | 'next'>('feeling');
  const [feeling, setFeeling] = useState<SessionFeeling | null>(null);
  const [encouragement, setEncouragement] = useState('');
  const [tip, setTip] = useState('');

  const { recordScenarioCompletion, getDaysUntilReview } = useScenarioProgress();

  const handlePracticePronunciation = () => {
    if (feeling) {
      onComplete(feeling);
      navigate('/speak');
    }
  };

  useEffect(() => {
    if (feeling) {
      setEncouragement(getRandomEncouragement(feeling));
      setTip(getScenarioTip(scenario.id));
    }
  }, [feeling, scenario.id]);

  const handleFeelingSelect = (selectedFeeling: SessionFeeling) => {
    setFeeling(selectedFeeling);

    // Record the scenario completion for spaced repetition
    const feedback = feelingToFeedback[selectedFeeling];
    recordScenarioCompletion(scenario.id, feedback);

    setStep('feedback');
  };

  const handleContinue = () => {
    setStep('next');
  };

  const handleDone = () => {
    if (feeling) {
      onComplete(feeling);
    }
  };

  const handleRepeat = () => {
    if (feeling) {
      onComplete(feeling);
      onSelectScenario(scenario);
    }
  };

  const handleTryRecommended = () => {
    if (feeling && recommendedScenario) {
      onComplete(feeling);
      onSelectScenario(recommendedScenario);
    }
  };

  // Get the next review info after recording
  const daysUntilReview = getDaysUntilReview(scenario.id);

  return (
    <div className="post-session-overlay">
      <div className="post-session-modal">
        {step === 'feeling' && (
          <div className="feedback-step feeling-step">
            <div className="step-icon">{getIcon(scenario.icon)}</div>
            <h2>Session Complete!</h2>
            <p className="scenario-name">{scenario.title}</p>
            <p className="feeling-question">How did that go?</p>
            <p className="feeling-hint">This helps schedule your next review</p>

            <div className="feeling-buttons">
              <button
                className="feeling-btn great"
                onClick={() => handleFeelingSelect('great')}
              >
                <span className="feeling-emoji"><DuotoneIcon icon={Smile} size="lg" colorScheme={colorSchemes.socialCulture} /></span>
                <span className="feeling-label">Great</span>
                <span className="feeling-desc">I felt confident</span>
              </button>

              <button
                className="feeling-btn okay"
                onClick={() => handleFeelingSelect('okay')}
              >
                <span className="feeling-emoji"><DuotoneIcon icon={Dumbbell} size="lg" colorScheme={colorSchemes.stats} /></span>
                <span className="feeling-label">Okay</span>
                <span className="feeling-desc">Getting there</span>
              </button>

              <button
                className="feeling-btn tough"
                onClick={() => handleFeelingSelect('tough')}
              >
                <span className="feeling-emoji"><DuotoneIcon icon={Heart} size="lg" colorScheme={colorSchemes.ui} /></span>
                <span className="feeling-label">Tough</span>
                <span className="feeling-desc">Found it hard</span>
              </button>
            </div>
          </div>
        )}

        {step === 'feedback' && feeling && (
          <div className="feedback-step encouragement-step">
            <div className="encouragement-icon">
              {feeling === 'great'
                ? <DuotoneIcon icon={Star} size="xl" colorScheme={colorSchemes.stats} />
                : feeling === 'okay'
                ? <DuotoneIcon icon={Dumbbell} size="xl" colorScheme={colorSchemes.careerGrowth} />
                : <DuotoneIcon icon={Heart} size="xl" colorScheme={colorSchemes.socialCulture} />}
            </div>

            <p className="encouragement-message">{encouragement}</p>

            {daysUntilReview !== null && (
              <div className="review-schedule-info">
                <span className="review-icon"><DuotoneIcon icon={Calendar} size="sm" colorScheme={colorSchemes.dailyWork} /></span>
                <p className="review-text">
                  {daysUntilReview === 0
                    ? "We'll remind you to practice this again today"
                    : daysUntilReview === 1
                    ? "We'll remind you to practice this again tomorrow"
                    : `We'll remind you to practice this again in ${daysUntilReview} days`
                  }
                </p>
              </div>
            )}

            <div className="tip-box">
              <span className="tip-icon"><DuotoneIcon icon={Lightbulb} size="sm" colorScheme={colorSchemes.stats} /></span>
              <p className="tip-text">{tip}</p>
            </div>

            <button className="continue-btn" onClick={handleContinue}>
              Continue
            </button>
          </div>
        )}

        {step === 'next' && feeling && (
          <div className="feedback-step next-step">
            <h2>What's next?</h2>

            <div className="next-options">
              <button className="next-option repeat" onClick={handleRepeat}>
                <span className="option-icon"><DuotoneIcon icon={Repeat} size="md" colorScheme={colorSchemes.stats} /></span>
                <div className="option-content">
                  <span className="option-title">Practice again</span>
                  <span className="option-desc">Repeat {scenario.title}</span>
                </div>
              </button>

              {recommendedScenario && (
                <button className="next-option recommended" onClick={handleTryRecommended}>
                  <span className="option-icon">{getIcon(recommendedScenario.icon)}</span>
                  <div className="option-content">
                    <span className="option-title">Try something new</span>
                    <span className="option-desc">{recommendedScenario.title}</span>
                  </div>
                  <span className="recommended-badge">Recommended</span>
                </button>
              )}

              <button className="next-option pronunciation" onClick={handlePracticePronunciation}>
                <span className="option-icon"><DuotoneIcon icon={Mic} size="md" colorScheme={colorSchemes.socialCulture} /></span>
                <div className="option-content">
                  <span className="option-title">Practice pronunciation</span>
                  <span className="option-desc">Polish your Aussie accent</span>
                </div>
              </button>

              <button className="next-option browse" onClick={handleDone}>
                <span className="option-icon"><DuotoneIcon icon={ClipboardList} size="md" colorScheme={colorSchemes.dailyWork} /></span>
                <div className="option-content">
                  <span className="option-title">Browse scenarios</span>
                  <span className="option-desc">See all practice options</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostSessionFeedback;
