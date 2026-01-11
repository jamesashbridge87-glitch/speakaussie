import { useState } from 'react';
import { PracticeMode } from '../hooks/useProgressTracking';
import { PracticeModeSelector } from './PracticeModeSelector';
import { PronunciationPractice } from './PronunciationPractice';
import './SpeakFreePage.css';

export function SpeakFreePage() {
  const [selectedMode, setSelectedMode] = useState<PracticeMode>('everyday');

  return (
    <div className="speak-free-container">
      <header className="speak-free-header">
        <div className="header-brand">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Your Aussie Uncle" className="header-logo" />
          <h1>SpeakAussie</h1>
        </div>
        <p className="header-subtitle">Free Aussie Pronunciation Practice</p>
      </header>

      <main className="speak-free-main">
        <div className="instructions">
          <h2>G'day, mate!</h2>
          <p>Practice your Australian pronunciation for free. Choose a mode and start speaking!</p>
        </div>

        <PracticeModeSelector
          selectedMode={selectedMode}
          onSelectMode={setSelectedMode}
        />

        <div className="pronunciation-section">
          <PronunciationPractice
            mode={selectedMode}
            isSessionActive={true}
          />
        </div>

        <div className="upgrade-banner">
          <div className="upgrade-content">
            <h3>Want to practice with a real AI tutor?</h3>
            <p>Upgrade to SpeakAussie for voice conversations with Your Aussie Uncle!</p>
            <a href={`${import.meta.env.BASE_URL}`} className="upgrade-btn">
              Try Full Experience
            </a>
          </div>
        </div>
      </main>

      <footer className="speak-free-footer">
        <p>Powered by <a href="https://youraussieuncle.com" target="_blank" rel="noopener noreferrer">Your Aussie Uncle</a></p>
      </footer>
    </div>
  );
}

export default SpeakFreePage;
