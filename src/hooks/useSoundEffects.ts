import { useCallback, useRef, useEffect } from 'react';

// Simple sound effect generator using Web Audio API
export function useSoundEffects() {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize AudioContext on first user interaction
    const initContext = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
    };

    document.addEventListener('click', initContext, { once: true });
    return () => document.removeEventListener('click', initContext);
  }, []);

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Fade out
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  }, []);

  const playCorrect = useCallback(() => {
    // Happy ascending tones
    playTone(523.25, 0.1, 'sine'); // C5
    setTimeout(() => playTone(659.25, 0.1, 'sine'), 100); // E5
    setTimeout(() => playTone(783.99, 0.15, 'sine'), 200); // G5
  }, [playTone]);

  const playIncorrect = useCallback(() => {
    // Descending "wrong" sound
    playTone(311.13, 0.15, 'sawtooth'); // Eb4
    setTimeout(() => playTone(277.18, 0.2, 'sawtooth'), 150); // Db4
  }, [playTone]);

  const playFlip = useCallback(() => {
    // Quick "whoosh" sound
    playTone(800, 0.05, 'sine');
    setTimeout(() => playTone(600, 0.05, 'sine'), 30);
  }, [playTone]);

  const playSuccess = useCallback(() => {
    // Celebratory fanfare
    playTone(523.25, 0.1, 'sine'); // C5
    setTimeout(() => playTone(659.25, 0.1, 'sine'), 100); // E5
    setTimeout(() => playTone(783.99, 0.1, 'sine'), 200); // G5
    setTimeout(() => playTone(1046.5, 0.2, 'sine'), 300); // C6
  }, [playTone]);

  return {
    playCorrect,
    playIncorrect,
    playFlip,
    playSuccess,
  };
}
