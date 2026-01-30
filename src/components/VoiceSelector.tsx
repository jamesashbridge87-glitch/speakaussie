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
  const [playingVoiceId, setPlayingVoiceId] = useState<VoiceId | null>(null);
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
    setSelectedVoice(voiceId);
    saveVoicePreference(voiceId);
  };

  const handlePlayIntro = (voiceId: VoiceId, e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger voice selection

    const voice = voices[voiceId];

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // If clicking play on the same voice that's playing, just stop
    if (isPlayingIntro && playingVoiceId === voiceId) {
      setIsPlayingIntro(false);
      setPlayingVoiceId(null);
      return;
    }

    // Play intro audio
    setIsPlayingIntro(true);
    setPlayingVoiceId(voiceId);
    const audio = new Audio(`${import.meta.env.BASE_URL}${voice.introAudio.replace(/^\//, '')}`);
    audioRef.current = audio;

    audio.onended = () => {
      setIsPlayingIntro(false);
      setPlayingVoiceId(null);
    };

    audio.onerror = () => {
      setIsPlayingIntro(false);
      setPlayingVoiceId(null);
      console.warn('Intro audio not available');
    };

    audio.play().catch(() => {
      setIsPlayingIntro(false);
      setPlayingVoiceId(null);
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
            const isPlaying = isPlayingIntro && playingVoiceId === voiceId;

            return (
              <div key={voiceId} className="voice-option-wrapper">
                <button
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
                  </div>
                  <span className="voice-name">{voice.name}</span>
                  {isSelected && (
                    <span className="voice-selected-badge">Selected</span>
                  )}
                </button>
                <button
                  className={`voice-play-btn ${isPlaying ? 'playing' : ''}`}
                  onClick={(e) => handlePlayIntro(voiceId, e)}
                  aria-label={isPlaying ? `Stop ${voice.name}'s intro` : `Play ${voice.name}'s intro`}
                >
                  {isPlaying ? (
                    <span className="play-icon">■</span>
                  ) : (
                    <span className="play-icon">▶</span>
                  )}
                  <span className="play-text">{isPlaying ? 'Stop' : 'Preview'}</span>
                </button>
              </div>
            );
          })}
        </div>

        <button
          className="voice-continue-btn"
          onClick={handleContinue}
          disabled={!selectedVoice}
        >
          Start Conversation
        </button>
      </div>
    </div>
  );
}

export default VoiceSelector;
