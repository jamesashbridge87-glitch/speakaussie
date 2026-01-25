import { useState, useCallback } from 'react';
import { WelcomeStep } from './steps/WelcomeStep';
import { AssessmentStep } from './steps/AssessmentStep';
import { GoalsStep } from './steps/GoalsStep';
import { TutorialStep } from './steps/TutorialStep';
import { ProgressBar } from '../ui';
import './OnboardingFlow.css';

export type OnboardingStep = 'welcome' | 'assessment' | 'goals' | 'tutorial';

export interface OnboardingData {
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | null;
  dailyGoal: number; // minutes
  focusAreas: string[];
  industryFocus: string | null;
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
  onSkip?: () => void;
}

const STEP_ORDER: OnboardingStep[] = ['welcome', 'assessment', 'goals', 'tutorial'];

const STEP_TITLES: Record<OnboardingStep, string> = {
  welcome: 'Welcome',
  assessment: 'Your Level',
  goals: 'Your Goals',
  tutorial: 'Quick Tour',
};

export function OnboardingFlow({ onComplete, onSkip }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('welcome');
  const [data, setData] = useState<OnboardingData>({
    skillLevel: null,
    dailyGoal: 10,
    focusAreas: [],
    industryFocus: null,
  });

  const currentStepIndex = STEP_ORDER.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / STEP_ORDER.length) * 100;

  const goToNextStep = useCallback(() => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < STEP_ORDER.length) {
      setCurrentStep(STEP_ORDER[nextIndex]);
    } else {
      onComplete(data);
    }
  }, [currentStepIndex, data, onComplete]);

  const goToPreviousStep = useCallback(() => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(STEP_ORDER[prevIndex]);
    }
  }, [currentStepIndex]);

  const updateData = useCallback((updates: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  }, []);

  const handleSkip = useCallback(() => {
    // Set default values when skipping
    const defaultData: OnboardingData = {
      skillLevel: 'intermediate',
      dailyGoal: 10,
      focusAreas: ['workplace'],
      industryFocus: null,
    };
    onSkip?.();
    onComplete(defaultData);
  }, [onComplete, onSkip]);

  return (
    <div className="onboarding-flow">
      <div className="onboarding-header">
        <div className="onboarding-progress">
          <div className="progress-steps">
            {STEP_ORDER.map((step, index) => (
              <div
                key={step}
                className={`progress-step ${index <= currentStepIndex ? 'active' : ''} ${index < currentStepIndex ? 'completed' : ''}`}
              >
                <span className="step-number">{index + 1}</span>
                <span className="step-label">{STEP_TITLES[step]}</span>
              </div>
            ))}
          </div>
          <ProgressBar value={progress} size="sm" color="primary" />
        </div>
        {currentStep !== 'tutorial' && (
          <button className="skip-btn" onClick={handleSkip}>
            Skip for now
          </button>
        )}
      </div>

      <div className="onboarding-content">
        {currentStep === 'welcome' && (
          <WelcomeStep onNext={goToNextStep} />
        )}

        {currentStep === 'assessment' && (
          <AssessmentStep
            selectedLevel={data.skillLevel}
            onSelect={(level) => updateData({ skillLevel: level })}
            onNext={goToNextStep}
            onBack={goToPreviousStep}
          />
        )}

        {currentStep === 'goals' && (
          <GoalsStep
            data={data}
            onUpdate={updateData}
            onNext={goToNextStep}
            onBack={goToPreviousStep}
          />
        )}

        {currentStep === 'tutorial' && (
          <TutorialStep
            onComplete={() => onComplete(data)}
            onBack={goToPreviousStep}
          />
        )}
      </div>
    </div>
  );
}

export default OnboardingFlow;
