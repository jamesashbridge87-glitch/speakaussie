import React, { useState } from 'react';
import './FeedbackButton.css';

interface FeedbackButtonProps {
  onSubmit?: (feedback: FeedbackData) => void;
}

export interface FeedbackData {
  type: 'bug' | 'feature' | 'scenario' | 'general';
  message: string;
  email?: string;
  timestamp: Date;
}

const feedbackTypes = [
  { id: 'bug', label: 'Report a bug', icon: '🐛', description: 'Something not working right?' },
  { id: 'feature', label: 'Suggest a feature', icon: '💡', description: 'Have an idea to improve the app?' },
  { id: 'scenario', label: 'Request a scenario', icon: '🎭', description: 'What workplace situation should we add?' },
  { id: 'general', label: 'General feedback', icon: '💬', description: 'Anything else on your mind?' },
] as const;

export function FeedbackButton({ onSubmit }: FeedbackButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'type' | 'form' | 'thanks'>('type');
  const [selectedType, setSelectedType] = useState<FeedbackData['type'] | null>(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleTypeSelect = (type: FeedbackData['type']) => {
    setSelectedType(type);
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !message.trim()) return;

    const feedback: FeedbackData = {
      type: selectedType,
      message: message.trim(),
      email: email.trim() || undefined,
      timestamp: new Date(),
    };

    // Store in localStorage as a simple feedback collection
    const existingFeedback = JSON.parse(localStorage.getItem('speakaussie_feedback') || '[]');
    existingFeedback.push(feedback);
    localStorage.setItem('speakaussie_feedback', JSON.stringify(existingFeedback));

    onSubmit?.(feedback);
    setStep('thanks');
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => {
      setStep('type');
      setSelectedType(null);
      setMessage('');
      setEmail('');
    }, 300);
  };

  const getPlaceholder = () => {
    switch (selectedType) {
      case 'bug':
        return "Describe what happened and what you expected to happen...";
      case 'feature':
        return "Describe the feature and how it would help you...";
      case 'scenario':
        return "What workplace situation would you like to practice? Be specific!";
      case 'general':
        return "Share your thoughts, suggestions, or feedback...";
      default:
        return "Your feedback...";
    }
  };

  return (
    <>
      <button
        className="feedback-trigger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Give feedback"
      >
        <span className="feedback-icon">💬</span>
        <span className="feedback-label">Feedback</span>
      </button>

      {isOpen && (
        <div className="feedback-overlay" onClick={handleClose}>
          <div className="feedback-modal" onClick={e => e.stopPropagation()}>
            <button className="feedback-close" onClick={handleClose}>
              ×
            </button>

            {step === 'type' && (
              <div className="feedback-content">
                <h2>How can we improve?</h2>
                <p className="feedback-subtitle">Your feedback helps us make SpeakAussie better</p>

                <div className="feedback-type-grid">
                  {feedbackTypes.map(type => (
                    <button
                      key={type.id}
                      className="feedback-type-btn"
                      onClick={() => handleTypeSelect(type.id)}
                    >
                      <span className="type-icon">{type.icon}</span>
                      <span className="type-label">{type.label}</span>
                      <span className="type-desc">{type.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 'form' && selectedType && (
              <div className="feedback-content">
                <button className="feedback-back" onClick={() => setStep('type')}>
                  ← Back
                </button>

                <div className="feedback-type-header">
                  <span className="type-icon-large">
                    {feedbackTypes.find(t => t.id === selectedType)?.icon}
                  </span>
                  <h2>{feedbackTypes.find(t => t.id === selectedType)?.label}</h2>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder={getPlaceholder()}
                      rows={5}
                      required
                      autoFocus
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="feedback-email">Email (optional)</label>
                    <input
                      id="feedback-email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                    />
                    <span className="form-hint">If you'd like us to follow up</span>
                  </div>

                  <button type="submit" className="feedback-submit" disabled={!message.trim()}>
                    Send Feedback
                  </button>
                </form>
              </div>
            )}

            {step === 'thanks' && (
              <div className="feedback-content thanks-content">
                <div className="thanks-icon">🙏</div>
                <h2>Thanks for your feedback!</h2>
                <p>We really appreciate you taking the time to help us improve SpeakAussie.</p>
                <button className="feedback-done-btn" onClick={handleClose}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FeedbackButton;
