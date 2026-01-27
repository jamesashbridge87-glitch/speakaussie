import { useState } from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { useAuth } from '../hooks/useAuth';
import './SubscriptionPlans.css';

interface SubscriptionPlansProps {
  onAuthRequired?: () => void;
}

export function SubscriptionPlans({ onAuthRequired }: SubscriptionPlansProps) {
  const { isAuthenticated } = useAuth();
  const { usage, startCheckout, openBillingPortal } = useSubscription();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelectPlan = async (plan: 'starter' | 'professional' | 'executive') => {
    if (!isAuthenticated) {
      onAuthRequired?.();
      return;
    }

    setLoadingPlan(plan);
    setError(null);

    try {
      await startCheckout(plan);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start checkout');
      setLoadingPlan(null);
    }
  };

  const handleManageSubscription = async () => {
    setError(null);
    try {
      await openBillingPortal();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to open billing portal');
    }
  };

  const currentPlan = usage?.plan || 'free';
  const isPaidPlan = currentPlan !== 'free';

  const planDetails = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      minutes: 5,
      description: 'Start building confidence',
      features: ['5 minutes per day', 'All scenarios', 'Slang library', 'Basic progress tracking'],
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 49,
      minutes: 15,
      description: 'Most popular',
      popular: true,
      features: ['15 minutes per day', 'All scenarios', 'Confidence score tracking', 'Session recordings', 'Priority support'],
    },
    {
      id: 'executive',
      name: 'Executive',
      price: 99,
      minutes: 60,
      description: 'For serious communicators',
      features: ['Unlimited practice', 'All Professional features', 'Monthly group coaching call', 'Direct feedback on progress', 'Early access to new scenarios'],
    },
  ];

  return (
    <div className="subscription-plans">
      <div className="plans-header">
        <h2>Choose Your Plan</h2>
        <p>Practice more with a paid plan. Cancel anytime.</p>
      </div>

      {error && <div className="plans-error">{error}</div>}

      <div className="plans-grid">
        {planDetails.map(plan => {
          const isCurrentPlan = plan.id === currentPlan;
          const isDisabled = plan.id === 'free' || isCurrentPlan;

          return (
            <div
              key={plan.id}
              className={`plan-card ${plan.popular ? 'popular' : ''} ${isCurrentPlan ? 'current' : ''}`}
            >
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              {isCurrentPlan && <span className="current-badge">Current Plan</span>}

              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="plan-price">
                <span className="price-amount">${plan.price}</span>
                <span className="price-period">/month AUD</span>
              </div>

              <div className="plan-minutes">
                {plan.minutes} min/day
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {plan.id !== 'free' && (
                <button
                  className={`plan-button ${isCurrentPlan ? 'current' : ''}`}
                  onClick={() => handleSelectPlan(plan.id as 'starter' | 'professional' | 'executive')}
                  disabled={isDisabled || loadingPlan !== null}
                >
                  {loadingPlan === plan.id
                    ? 'Loading...'
                    : isCurrentPlan
                    ? 'Current Plan'
                    : 'Select Plan'}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {isPaidPlan && (
        <div className="manage-subscription">
          <button onClick={handleManageSubscription} className="manage-btn">
            Manage Subscription
          </button>
        </div>
      )}
    </div>
  );
}
