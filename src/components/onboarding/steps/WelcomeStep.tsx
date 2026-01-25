interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="onboarding-step">
      <div className="step-icon">
        <span className="step-icon-large">🇦🇺</span>
      </div>

      <h1 className="step-title">G'day, mate!</h1>

      <p className="step-description">
        Welcome to <strong>SpeakAussie</strong> - your personal AI tutor for mastering
        Australian English. Whether you're preparing for job interviews, workplace conversations,
        or just want to fit in better, we've got you covered.
      </p>

      <div className="welcome-features">
        <div className="welcome-feature">
          <span className="feature-icon">🎤</span>
          <div className="feature-text">
            <strong>Real conversations</strong>
            <span>Practice with AI that responds naturally</span>
          </div>
        </div>
        <div className="welcome-feature">
          <span className="feature-icon">📚</span>
          <div className="feature-text">
            <strong>Aussie slang & culture</strong>
            <span>Learn expressions used in real workplaces</span>
          </div>
        </div>
        <div className="welcome-feature">
          <span className="feature-icon">📈</span>
          <div className="feature-text">
            <strong>Track your progress</strong>
            <span>Watch your confidence grow over time</span>
          </div>
        </div>
      </div>

      <div className="step-actions">
        <button className="step-btn step-btn-primary" onClick={onNext}>
          Let's Get Started
        </button>
      </div>

      <style>{`
        .welcome-features {
          display: flex;
          flex-direction: column;
          gap: var(--space-3, 12px);
          margin: var(--space-6, 24px) 0;
          text-align: left;
        }

        .welcome-feature {
          display: flex;
          align-items: center;
          gap: var(--space-3, 12px);
          padding: var(--space-4, 16px);
          background: var(--bg-primary, #ffffff);
          border-radius: var(--radius-lg, 12px);
          border: 1px solid var(--border-light, #e5e7eb);
        }

        .feature-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .feature-text {
          display: flex;
          flex-direction: column;
        }

        .feature-text strong {
          font-size: var(--font-size-base, 1rem);
          color: var(--text-primary, #221f1f);
        }

        .feature-text span {
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-secondary, #4b5563);
        }
      `}</style>
    </div>
  );
}

export default WelcomeStep;
