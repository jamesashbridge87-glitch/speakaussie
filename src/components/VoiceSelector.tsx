import { useState, useRef, useEffect, useCallback } from 'react';
import { voices, Voice, VoiceId, getVoicePreference, saveVoicePreference } from '../data/voices';
import { ArrowLeft, Play, Square, Loader2 } from 'lucide-react';
import './VoiceSelector.css';

const voiceIds = Object.keys(voices) as VoiceId[];

interface VoiceSelectorProps {
  onSelect: (voice: Voice) => void;
  onBack: () => void;
}

export function VoiceSelector({ onSelect, onBack }: VoiceSelectorProps) {
  const [selectedVoice, setSelectedVoice] = useState<VoiceId | null>(getVoicePreference());
  const [focusedIndex, setFocusedIndex] = useState<number>(
    selectedVoice ? voiceIds.indexOf(selectedVoice) : 0
  );
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const [playingVoiceId, setPlayingVoiceId] = useState<VoiceId | null>(null);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const [loadingVoiceId, setLoadingVoiceId] = useState<VoiceId | null>(null);
  const [audioErrorVoiceId, setAudioErrorVoiceId] = useState<VoiceId | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const voiceButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle keyboard navigation within voice options
  const handleVoiceKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = (index + 1) % voiceIds.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = (index - 1 + voiceIds.length) % voiceIds.length;
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleVoiceClick(voiceIds[index]);
        return;
      default:
        return;
    }

    setFocusedIndex(newIndex);
    voiceButtonRefs.current[newIndex]?.focus();
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

    // If clicking on same voice that's loading, cancel
    if (isLoadingAudio && loadingVoiceId === voiceId) {
      setIsLoadingAudio(false);
      setLoadingVoiceId(null);
      return;
    }

    // Reset any previous playing/error state
    setIsPlayingIntro(false);
    setPlayingVoiceId(null);
    setAudioErrorVoiceId(null);

    // Start loading audio
    setIsLoadingAudio(true);
    setLoadingVoiceId(voiceId);

    const audio = new Audio(`${import.meta.env.BASE_URL}${voice.introAudio.replace(/^\//, '')}`);
    audioRef.current = audio;

    audio.oncanplaythrough = () => {
      // Audio is ready to play without buffering
      setIsLoadingAudio(false);
      setLoadingVoiceId(null);
      setIsPlayingIntro(true);
      setPlayingVoiceId(voiceId);
      audio.play().catch(() => {
        setIsPlayingIntro(false);
        setPlayingVoiceId(null);
      });
    };

    audio.onended = () => {
      setIsPlayingIntro(false);
      setPlayingVoiceId(null);
    };

    audio.onerror = () => {
      setIsLoadingAudio(false);
      setLoadingVoiceId(null);
      setIsPlayingIntro(false);
      setPlayingVoiceId(null);
      setAudioErrorVoiceId(voiceId);
    };

    // Start loading the audio
    audio.load();
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
        <ArrowLeft size={16} /> Back
      </button>

      <div className="voice-selector-content">
        <h2>Who would you like to practice with?</h2>
        <p className="voice-selector-subtitle">
          Choose your conversation partner for this session
        </p>

        <div className="voice-options" role="radiogroup" aria-label="Choose your conversation partner">
          {voiceIds.map((voiceId, index) => {
            const voice = voices[voiceId];
            const isSelected = selectedVoice === voiceId;
            const isPlaying = isPlayingIntro && playingVoiceId === voiceId;
            const isLoading = isLoadingAudio && loadingVoiceId === voiceId;
            const hasError = audioErrorVoiceId === voiceId;
            const isFocused = focusedIndex === index;

            return (
              <div key={voiceId} className="voice-option-wrapper">
                <button
                  ref={(el) => { voiceButtonRefs.current[index] = el; }}
                  className={`voice-option ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleVoiceClick(voiceId)}
                  onKeyDown={(e) => handleVoiceKeyDown(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={isFocused ? 0 : -1}
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
                  className={`voice-play-btn ${isPlaying ? 'playing' : ''} ${isLoading ? 'loading' : ''}`}
                  onClick={(e) => handlePlayIntro(voiceId, e)}
                  aria-label={
                    isLoading
                      ? `Loading ${voice.name}'s intro`
                      : isPlaying
                        ? `Stop ${voice.name}'s intro`
                        : `Play ${voice.name}'s intro`
                  }
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="play-icon loading-spinner" size={12} aria-hidden="true" />
                  ) : isPlaying ? (
                    <Square className="play-icon" size={12} aria-hidden="true" />
                  ) : (
                    <Play className="play-icon" size={12} aria-hidden="true" />
                  )}
                  <span className="play-text">
                    {isLoading ? 'Loading' : isPlaying ? 'Stop' : 'Preview'}
                  </span>
                </button>
                {hasError && (
                  <p className="voice-audio-error">
                    Preview unavailable. You can still select {voice.name}.
                  </p>
                )}
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
