import { useState } from 'react';
import {
  ExperienceLevel,
  GoalType,
  ComfortLevel,
  COMFORT_MESSAGES,
  WELCOME_MESSAGES,
} from '../hooks/useOnboarding';
import { Icon } from './Icon';
import './OnboardingFlow.css';

interface OnboardingFlowProps {
  onComplete: (
    experienceLevel: ExperienceLevel,
    goal: GoalType,
    comfortLevel: ComfortLevel,
    name?: string
  ) => void;
  onSkip?: () => void;
}

type Step = 'welcome' | 'experience' | 'goal' | 'comfort' | 'ready';

interface Option<T> {
  value: T;
  label: string;
  description: string;
  icon: string;
}

const EXPERIENCE_OPTIONS: Option<ExperienceLevel>[] = [
  {
    value: 'new-to-australia',
    label: 'New to Australia',
    description: 'Just arrived or less than 6 months',
    icon: '🌏',
  },
  {
    value: 'settling-in',
    label: 'Settling In',
    description: '6 months to 2 years in Australia',
    icon: '🏠',
  },
  {
    value: 'been-here-awhile',
    label: 'Been Here a While',
    description: 'More than 2 years',
    icon: '🦘',
  },
];

const GOAL_OPTIONS: Option<GoalType>[] = [
  {
    value: 'workplace-confidence',
    label: 'Workplace Confidence',
    description: 'Feel confident in meetings and with colleagues',
    icon: '💼',
  },
  {
    value: 'social-connections',
    label: 'Social Connections',
    description: 'Make friends and fit in socially',
    icon: '🤝',
  },
  {
    value: 'sound-local',
    label: 'Sound Like a Local',
    description: 'Master Aussie slang and expressions',
    icon: '🗣️',
  },
  {
    value: 'all-of-above',
    label: 'All of the Above',
    description: 'I want it all!',
    icon: '✨',
  },
];

const COMFORT_OPTIONS: Option<ComfortLevel>[] = [
  {
    value: 'nervous',
    label: 'A Bit Nervous',
    description: 'I often feel anxious speaking at work',
    icon: '😰',
  },
  {
    value: 'getting-there',
    label: 'Getting There',
    description: 'Some situations are fine, others are tricky',
    icon: '😊',
  },
  {
    value: 'pretty-confident',
    label: 'Pretty Confident',
    description: 'I just want to polish my skills',
    icon: '😎',
  },
];

export function OnboardingFlow({ onComplete, onSkip }: OnboardingFlowProps) {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel | null>(null);
  const [goal, setGoal] = useState<GoalType | null>(null);
  const [comfortLevel, setComfortLevel] = useState<ComfortLevel | null>(null);

  const handleNext = () => {
    switch (step) {
      case 'welcome':
        setStep('experience');
        break;
      case 'experience':
        if (experienceLevel) setStep('goal');
        break;
      case 'goal':
        if (goal) setStep('comfort');
        break;
      case 'comfort':
        if (comfortLevel) setStep('ready');
        break;
      case 'ready':
        if (experienceLevel && goal && comfortLevel) {
          onComplete(experienceLevel, goal, comfortLevel, name || undefined);
        }
        break;
    }
  };

  const handleBack = () => {
    switch (step) {
      case 'experience':
        setStep('welcome');
        break;
      case 'goal':
        setStep('experience');
        break;
      case 'comfort':
        setStep('goal');
        break;
      case 'ready':
        setStep('comfort');
        break;
    }
  };

  const STEPS: Step[] = ['welcome', 'experience', 'goal', 'comfort', 'ready'];
  const STEP_LABELS: Record<Step, string> = {
    welcome: 'Welcome',
    experience: 'Experience',
    goal: 'Goals',
    comfort: 'Comfort',
    ready: 'Ready!',
  };

  const getCurrentStepIndex = () => STEPS.indexOf(step);
  const getProgress = () => ((getCurrentStepIndex() + 1) / STEPS.length) * 100;

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-modal">
        {/* Progress indicator */}
        <div className="onboarding-progress-section">
          <div className="step-indicator">
            <span className="step-current">Step {getCurrentStepIndex() + 1}</span>
            <span className="step-divider">/</span>
            <span className="step-total">{STEPS.length}</span>
          </div>
          <div className="onboarding-progress">
            <div
              className="onboarding-progress-fill"
              style={{ width: `${getProgress()}%` }}
            />
          </div>
          <div className="step-dots">
            {STEPS.map((s, index) => (
              <div
                key={s}
                className={`step-dot ${index <= getCurrentStepIndex() ? 'completed' : ''} ${s === step ? 'active' : ''}`}
                title={STEP_LABELS[s]}
              />
            ))}
          </div>
        </div>

        {/* Welcome Step */}
        {step === 'welcome' && (
          <div className="onboarding-step welcome-step">
            <div className="welcome-avatar">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Your Aussie Uncle"
                className="avatar-image"
              />
            </div>
            <h2>{WELCOME_MESSAGES.title}</h2>
            <p className="welcome-subtitle">{WELCOME_MESSAGES.subtitle}</p>
            <p className="welcome-description">{WELCOME_MESSAGES.description}</p>

            <div className="name-input-group">
              <label htmlFor="userName">What should I call you?</label>
              <input
                id="userName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                autoFocus
              />
            </div>

            <div className="onboarding-actions">
              <button className="onboarding-btn primary" onClick={handleNext}>
                Let's Get Started
              </button>
              {onSkip && (
                <button className="onboarding-btn text" onClick={onSkip}>
                  Skip for now
                </button>
              )}
            </div>
          </div>
        )}

        {/* Experience Step */}
        {step === 'experience' && (
          <div className="onboarding-step">
            <h2>Where are you in your Aussie journey?</h2>
            <p className="step-description">This helps me recommend the right scenarios for you.</p>

            <div className="options-grid">
              {EXPERIENCE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  className={`option-card ${experienceLevel === option.value ? 'selected' : ''}`}
                  onClick={() => setExperienceLevel(option.value)}
                >
                  <span className="option-icon"><Icon emoji={option.icon} size="lg" /></span>
                  <span className="option-label">{option.label}</span>
                  <span className="option-description">{option.description}</span>
                </button>
              ))}
            </div>

            <div className="onboarding-actions">
              <button className="onboarding-btn secondary" onClick={handleBack}>
                Back
              </button>
              <button
                className="onboarding-btn primary"
                onClick={handleNext}
                disabled={!experienceLevel}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Goal Step */}
        {step === 'goal' && (
          <div className="onboarding-step">
            <h2>What's your main goal?</h2>
            <p className="step-description">We'll prioritize scenarios that match what matters most to you.</p>

            <div className="options-grid">
              {GOAL_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  className={`option-card ${goal === option.value ? 'selected' : ''}`}
                  onClick={() => setGoal(option.value)}
                >
                  <span className="option-icon"><Icon emoji={option.icon} size="lg" /></span>
                  <span className="option-label">{option.label}</span>
                  <span className="option-description">{option.description}</span>
                </button>
              ))}
            </div>

            <div className="onboarding-actions">
              <button className="onboarding-btn secondary" onClick={handleBack}>
                Back
              </button>
              <button
                className="onboarding-btn primary"
                onClick={handleNext}
                disabled={!goal}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Comfort Step */}
        {step === 'comfort' && (
          <div className="onboarding-step">
            <h2>How do you feel about speaking at work?</h2>
            <p className="step-description">Be honest - there's no wrong answer!</p>

            <div className="options-grid">
              {COMFORT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  className={`option-card ${comfortLevel === option.value ? 'selected' : ''}`}
                  onClick={() => setComfortLevel(option.value)}
                >
                  <span className="option-icon"><Icon emoji={option.icon} size="lg" /></span>
                  <span className="option-label">{option.label}</span>
                  <span className="option-description">{option.description}</span>
                </button>
              ))}
            </div>

            <div className="onboarding-actions">
              <button className="onboarding-btn secondary" onClick={handleBack}>
                Back
              </button>
              <button
                className="onboarding-btn primary"
                onClick={handleNext}
                disabled={!comfortLevel}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Ready Step */}
        {step === 'ready' && comfortLevel && (
          <div className="onboarding-step ready-step">
            <div className="ready-icon"><Icon emoji="🎉" size="xl" /></div>
            <h2>You're all set{name ? `, ${name}` : ''}!</h2>

            <div className="encouragement-message">
              <p>{COMFORT_MESSAGES[comfortLevel]}</p>
            </div>

            <div className="ready-summary">
              <h3>Your personalized plan:</h3>
              <ul>
                <li>
                  <span className="summary-icon"><Icon emoji="📍" size="sm" /></span>
                  <span>Starting point matched to your experience</span>
                </li>
                <li>
                  <span className="summary-icon"><Icon emoji="🎯" size="sm" /></span>
                  <span>Scenarios focused on {goal === 'all-of-above' ? 'all your goals' : goal?.replace('-', ' ')}</span>
                </li>
                <li>
                  <span className="summary-icon"><Icon emoji="📈" size="sm" /></span>
                  <span>Difficulty adjusted to your comfort level</span>
                </li>
              </ul>
            </div>

            <div className="onboarding-actions">
              <button className="onboarding-btn secondary" onClick={handleBack}>
                Back
              </button>
              <button className="onboarding-btn primary large" onClick={handleNext}>
                Start Practicing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
