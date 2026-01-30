import { useState, useRef, useEffect } from 'react';
import { voices, Voice, VoiceId, getVoicePreference, saveVoicePreference } from '../data/voices';
import './VoiceSelector.css';

interface VoiceSelectorProps {
  onSelect: (voice: Voice) => void;
  onBack: () => void;
}

export function VoiceSelector({ onSelect, onBack }: VoiceSelectorProps) {
  const [selectedVoice, setSelectedVoice] = useState<VoiceId | null>(getVoicePreference());
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleVoiceClick = (voiceId: VoiceId) => {
    const voice = voices[voiceId];
    setSelectedVoice(voiceId);
    saveVoicePreference(voiceId);
    setAudioError(false);

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Play intro audio
    setIsPlayingIntro(true);
    const audio = new Audio(`${import.meta.env.BASE_URL}${voice.introAudio.replace(/^\//, '')}`);
    audioRef.current = audio;

    audio.onended = () => {
      setIsPlayingIntro(false);
    };

    audio.onerror = () => {
      setIsPlayingIntro(false);
      setAudioError(true);
      console.warn('Intro audio not available yet - continuing without audio');
    };

    audio.play().catch(() => {
      setIsPlayingIntro(false);
      setAudioError(true);
    });
  };

  const handleContinue = () => {
    if (selectedVoice) {
      // Stop audio if still playing
      if (audioRef.current) {
        audioRef.current.pause();
      }
      onSelect(voices[selectedVoice]);
    }
  };

  return (
    <div className="voice-selector">
      <button className="voice-back-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="voice-selector-content">
        <h2>Who would you like to practice with?</h2>
        <p className="voice-selector-subtitle">
          Choose your conversation partner for this session
        </p>

        <div className="voice-options">
          {(Object.keys(voices) as VoiceId[]).map((voiceId) => {
            const voice = voices[voiceId];
            const isSelected = selectedVoice === voiceId;

            return (
              <button
                key={voiceId}
                className={`voice-option ${isSelected ? 'selected' : ''}`}
                onClick={() => handleVoiceClick(voiceId)}
                aria-pressed={isSelected}
              >
                <div className="voice-avatar-container">
                  <img
                    src={`${import.meta.env.BASE_URL}${voice.avatar.replace(/^\//, '')}`}
                    alt={voice.name}
                    className="voice-avatar"
                  />
                  {isSelected && isPlayingIntro && (
                    <div className="voice-playing-indicator">
                      <span className="playing-dot"></span>
                      <span className="playing-dot"></span>
                      <span className="playing-dot"></span>
                    </div>
                  )}
                </div>
                <span className="voice-name">{voice.name}</span>
                {isSelected && (
                  <span className="voice-selected-badge">Selected</span>
                )}
              </button>
            );
          })}
        </div>

        {audioError && (
          <p className="voice-audio-note">
            Audio intro will be available soon
          </p>
        )}

        <button
          className="voice-continue-btn"
          onClick={handleContinue}
          disabled={!selectedVoice || isPlayingIntro}
        >
          {isPlayingIntro ? 'Playing intro...' : 'Start Conversation'}
        </button>
      </div>
    </div>
  );
}

export default VoiceSelector;
