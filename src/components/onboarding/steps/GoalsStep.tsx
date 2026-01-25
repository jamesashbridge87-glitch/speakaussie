import { OnboardingData } from '../OnboardingFlow';

interface GoalsStepProps {
  data: OnboardingData;
  onUpdate: (updates: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const FOCUS_AREAS = [
  { id: 'interviews', label: 'Job Interviews', icon: '👔' },
  { id: 'workplace', label: 'Workplace Chat', icon: '💼' },
  { id: 'meetings', label: 'Team Meetings', icon: '🤝' },
  { id: 'slang', label: 'Aussie Slang', icon: '🦘' },
  { id: 'social', label: 'Social Events', icon: '🍻' },
  { id: 'customers', label: 'Customer Service', icon: '🛒' },
];

const INDUSTRIES = [
  { id: 'tech', label: 'Technology / IT' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance / Banking' },
  { id: 'hospitality', label: 'Hospitality' },
  { id: 'construction', label: 'Construction / Trades' },
  { id: 'education', label: 'Education' },
  { id: 'retail', label: 'Retail' },
  { id: 'other', label: 'Other' },
];

export function GoalsStep({ data, onUpdate, onNext, onBack }: GoalsStepProps) {
  const toggleFocusArea = (areaId: string) => {
    const current = data.focusAreas;
    const updated = current.includes(areaId)
      ? current.filter((id) => id !== areaId)
      : [...current, areaId];
    onUpdate({ focusAreas: updated });
  };

  return (
    <div className="onboarding-step">
      <div className="step-icon">
        <span className="step-icon-large">🎯</span>
      </div>

      <h1 className="step-title">Set your goals</h1>

      <p className="step-description">
        Tell us what you want to focus on so we can recommend the best scenarios for you.
      </p>

      {/* Daily goal slider */}
      <div className="goal-section">
        <h3 className="goal-section-title">Daily practice goal</h3>
        <div className="goal-slider-container">
          <div className="goal-slider-label">
            <span>How much time per day?</span>
            <span className="goal-slider-value">{data.dailyGoal} min</span>
          </div>
          <input
            type="range"
            min="5"
            max="30"
            step="5"
            value={data.dailyGoal}
            onChange={(e) => onUpdate({ dailyGoal: Number(e.target.value) })}
            className="goal-slider"
          />
          <div className="goal-slider-marks">
            <span>5 min</span>
            <span>15 min</span>
            <span>30 min</span>
          </div>
        </div>
      </div>

      {/* Focus areas */}
      <div className="goal-section">
        <h3 className="goal-section-title">What do you want to practice?</h3>
        <p className="goal-section-hint">Select all that apply</p>
        <div className="checkbox-grid">
          {FOCUS_AREAS.map((area) => (
            <button
              key={area.id}
              className={`checkbox-item ${data.focusAreas.includes(area.id) ? 'checked' : ''}`}
              onClick={() => toggleFocusArea(area.id)}
            >
              <span className="checkbox-icon">{area.icon}</span>
              <span className="checkbox-label">{area.label}</span>
              <span className="checkbox-box">
                {data.focusAreas.includes(area.id) && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Industry (optional) */}
      <div className="goal-section">
        <h3 className="goal-section-title">Your industry <span className="optional-tag">(optional)</span></h3>
        <p className="goal-section-hint">We'll customize vocabulary for your field</p>
        <div className="industry-select">
          <select
            value={data.industryFocus || ''}
            onChange={(e) => onUpdate({ industryFocus: e.target.value || null })}
            className="industry-dropdown"
          >
            <option value="">Select your industry...</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry.id} value={industry.id}>
                {industry.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="step-actions">
        <button className="step-btn step-btn-secondary" onClick={onBack}>
          Back
        </button>
        <button
          className="step-btn step-btn-primary"
          onClick={onNext}
          disabled={data.focusAreas.length === 0}
        >
          Continue
        </button>
      </div>

      <style>{`
        .goal-section {
          margin-bottom: var(--space-6, 24px);
          text-align: left;
        }

        .goal-section-title {
          margin: 0 0 var(--space-2, 8px) 0;
          font-size: var(--font-size-base, 1rem);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--text-primary, #221f1f);
        }

        .goal-section-hint {
          margin: 0 0 var(--space-3, 12px) 0;
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-tertiary, #6b7280);
        }

        .optional-tag {
          font-weight: var(--font-weight-normal, 400);
          color: var(--text-tertiary, #6b7280);
          font-size: var(--font-size-sm, 0.875rem);
        }

        .goal-slider-marks {
          display: flex;
          justify-content: space-between;
          margin-top: var(--space-2, 8px);
          font-size: var(--font-size-xs, 0.75rem);
          color: var(--text-tertiary, #6b7280);
        }

        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--space-3, 12px);
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: var(--space-2, 8px);
          padding: var(--space-3, 12px);
          background: var(--bg-primary, #ffffff);
          border: 2px solid var(--border-light, #e5e7eb);
          border-radius: var(--radius-md, 8px);
          cursor: pointer;
          transition: all var(--transition-fast, 150ms ease);
          width: 100%;
        }

        .checkbox-item:hover {
          border-color: var(--color-secondary, #11e8f6);
        }

        .checkbox-item.checked {
          border-color: var(--color-secondary, #11e8f6);
          background: #e6f9fb;
        }

        .checkbox-icon {
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .checkbox-label {
          flex: 1;
          font-size: var(--font-size-sm, 0.875rem);
          color: var(--text-primary, #221f1f);
          text-align: left;
        }

        .checkbox-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: 2px solid var(--color-gray-300, #d1d5db);
          border-radius: var(--radius-sm, 4px);
          transition: all var(--transition-fast, 150ms ease);
          flex-shrink: 0;
        }

        .checkbox-item.checked .checkbox-box {
          background: var(--color-secondary, #11e8f6);
          border-color: var(--color-secondary, #11e8f6);
        }

        .industry-dropdown {
          width: 100%;
          padding: var(--space-3, 12px) var(--space-4, 16px);
          background: var(--bg-primary, #ffffff);
          border: 2px solid var(--border-light, #e5e7eb);
          border-radius: var(--radius-md, 8px);
          font-size: var(--font-size-base, 1rem);
          color: var(--text-primary, #221f1f);
          cursor: pointer;
          transition: border-color var(--transition-fast, 150ms ease);
        }

        .industry-dropdown:focus {
          outline: none;
          border-color: var(--color-primary, #fda400);
        }

        .industry-dropdown:hover {
          border-color: var(--color-primary, #fda400);
        }
      `}</style>
    </div>
  );
}

export default GoalsStep;
