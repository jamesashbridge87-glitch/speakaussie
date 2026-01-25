interface TutorialStepProps {
  onComplete: () => void;
  onBack: () => void;
}

const TUTORIAL_ITEMS = [
  {
    icon: '🎯',
    title: 'Choose a Scenario',
    description: 'Pick from job interviews, workplace chats, or social situations. Each scenario is designed for real-world practice.',
  },
  {
    icon: '🎤',
    title: 'Start Talking',
    description: 'Just speak naturally! Our AI will respond like a real Australian colleague. No buttons to press - just have a conversation.',
  },
  {
    icon: '✨',
    title: 'Learn as You Go',
    description: 'Aussie slang gets highlighted in your transcript. Hover over terms to see what they mean.',
  },
  {
    icon: '📊',
    title: 'Track Progress',
    description: 'View your practice stats, unlock achievements, and watch your confidence grow over time.',
  },
];

const TIPS = [
  "Don't worry about making mistakes - that's how you learn!",
  "Try to use at least one Aussie expression per session",
  "Practice a little bit every day for the best results",
];

export function TutorialStep({ onComplete, onBack }: TutorialStepProps) {
  return (
    <div className="onboarding-step">
      <div className="step-icon">
        <span className="step-icon-large">🎓</span>
      </div>

      <h1 className="step-title">You're all set!</h1>

      <p className="step-description">
        Here's a quick overview of how SpeakAussie works.
      </p>

      <div className="tutorial-cards">
        {TUTORIAL_ITEMS.map((item, index) => (
          <div key={index} className="tutorial-card">
            <div className="tutorial-card-number">{index + 1}</div>
            <div className="tutorial-card-icon">{item.icon}</div>
            <div className="tutorial-card-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="tutorial-tips">
        <h3 className="tips-title">Pro Tips</h3>
        <ul className="tips-list">
          {TIPS.map((tip, index) => (
            <li key={index}>
              <span className="tip-icon">💡</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="step-actions">
        <button className="step-btn step-btn-secondary" onClick={onBack}>
          Back
        </button>
        <button className="step-btn step-btn-primary" onClick={onComplete}>
          Start Practicing!
        </button>
      </div>

      <style>{`
        .tutorial-cards {
          display: flex;
          flex-direction: column;
          gap: var(--space-3, 12px);
          margin-bottom: var(--space-6, 24px);
        }

        .tutorial-card {
          display: flex;
          gap: var(--space-3, 12px);
          padding: var(--space-4, 16px);
          background: var(--bg-primary, #ffffff);
          border-radius: var(--radius-lg, 12px);
          border: 1px solid var(--border-light, #e5e7eb);
          text-align: left;
        }

        .tutorial-card-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: var(--color-secondary-50, rgba(17, 232, 246, 0.1));
          color: var(--color-secondary-dark, #0ec5d1);
          border-radius: var(--radius-full, 9999px);
          font-size: var(--font-size-sm, 0.875rem);
          font-weight: var(--font-weight-bold, 700);
          flex-shrink: 0;
        }

        .tutorial-card-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .tutorial-card-content {
          flex: 1;
        }

        .tutorial-card-content h4 {
          margin: 0 0 var(--space-1, 4px) 0;
          font-size: var(--font-size-base, 1rem);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-primary, #221f1f);
        }

        .tutorial-card-content p {
          margin: 0;
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-secondary, #4b5563);
          line-height: var(--line-height-normal, 1.5);
        }

        .tutorial-tips {
          padding: var(--space-4, 16px);
          background: linear-gradient(135deg, #fff8e6 0%, #fef3c7 100%);
          border: 1px solid rgba(253, 164, 0, 0.2);
          border-radius: var(--radius-lg, 12px);
          text-align: left;
        }

        .tips-title {
          margin: 0 0 var(--space-3, 12px) 0;
          font-size: var(--font-size-sm, 0.875rem);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-primary-dark, #e59400);
        }

        .tips-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .tips-list li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2, 8px);
          margin-bottom: var(--space-2, 8px);
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-secondary, #4b5563);
        }

        .tips-list li:last-child {
          margin-bottom: 0;
        }

        .tip-icon {
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}

export default TutorialStep;
