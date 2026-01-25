type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

interface AssessmentStepProps {
  selectedLevel: SkillLevel | null;
  onSelect: (level: SkillLevel) => void;
  onNext: () => void;
  onBack: () => void;
}

const LEVELS = [
  {
    id: 'beginner' as const,
    icon: '🌱',
    label: 'Beginner',
    description: 'New to Australian English or just starting out',
    examples: ['Basic greetings', 'Simple workplace phrases', 'Understanding common slang'],
  },
  {
    id: 'intermediate' as const,
    icon: '🌿',
    label: 'Intermediate',
    description: 'Comfortable with basics, want to improve fluency',
    examples: ['Job interviews', 'Team meetings', 'Casual workplace chat'],
  },
  {
    id: 'advanced' as const,
    icon: '🌳',
    label: 'Advanced',
    description: 'Confident speaker, refining nuances',
    examples: ['Presentations', 'Negotiations', 'Cultural subtleties'],
  },
];

export function AssessmentStep({ selectedLevel, onSelect, onNext, onBack }: AssessmentStepProps) {
  return (
    <div className="onboarding-step">
      <div className="step-icon">
        <span className="step-icon-large">📊</span>
      </div>

      <h1 className="step-title">What's your current level?</h1>

      <p className="step-description">
        This helps us personalize your practice sessions.
        Don't worry - you can always adjust this later!
      </p>

      <div className="level-options">
        {LEVELS.map((level) => (
          <button
            key={level.id}
            className={`level-option ${selectedLevel === level.id ? 'selected' : ''}`}
            onClick={() => onSelect(level.id)}
          >
            <span className="level-icon">{level.icon}</span>
            <div className="level-content">
              <span className="level-label">{level.label}</span>
              <span className="level-description">{level.description}</span>
              <ul className="level-examples">
                {level.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
            {selectedLevel === level.id && (
              <span className="level-check">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="step-actions">
        <button className="step-btn step-btn-secondary" onClick={onBack}>
          Back
        </button>
        <button
          className="step-btn step-btn-primary"
          onClick={onNext}
          disabled={!selectedLevel}
        >
          Continue
        </button>
      </div>

      <style>{`
        .level-options {
          display: flex;
          flex-direction: column;
          gap: var(--space-3, 12px);
          text-align: left;
        }

        .level-option {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4, 16px);
          padding: var(--space-4, 16px);
          background: var(--bg-primary, #ffffff);
          border: 2px solid var(--border-light, #e5e7eb);
          border-radius: var(--radius-lg, 12px);
          cursor: pointer;
          transition: all var(--transition-base, 200ms ease);
          text-align: left;
          width: 100%;
        }

        .level-option:hover {
          border-color: var(--color-primary, #fda400);
        }

        .level-option.selected {
          border-color: var(--color-primary, #fda400);
          background: #fff8e6;
        }

        .level-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .level-content {
          flex: 1;
        }

        .level-label {
          display: block;
          font-size: var(--font-size-base, 1rem);
          font-weight: var(--font-weight-bold, 700);
          color: var(--text-primary, #221f1f);
          margin-bottom: var(--space-1, 4px);
        }

        .level-description {
          display: block;
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-secondary, #4b5563);
          margin-bottom: var(--space-2, 8px);
        }

        .level-examples {
          margin: 0;
          padding-left: var(--space-5, 20px);
          font-size: var(--font-size-xs, 0.75rem);
          color: var(--text-tertiary, #6b7280);
        }

        .level-examples li {
          margin-bottom: var(--space-1, 4px);
        }

        .level-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          background: var(--color-success, #22c55e);
          border-radius: var(--radius-full, 9999px);
          color: var(--color-light, #ffffff);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}

export default AssessmentStep;
