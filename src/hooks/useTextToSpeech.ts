import { useState, useCallback, useEffect, useRef } from 'react';

interface UseTextToSpeechOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
}

export function useTextToSpeech(options: UseTextToSpeechOptions = {}) {
  const { lang = 'en-AU', rate = 0.9, pitch = 1 } = options;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setIsSupported('speechSynthesis' in window);
  }, []);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported) return;

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Try to find an Australian English voice
      const voices = window.speechSynthesis.getVoices();
      const ausVoice = voices.find(
        (v) => v.lang === 'en-AU' || v.lang.startsWith('en-AU')
      );
      if (ausVoice) {
        utterance.voice = ausVoice;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isSupported, lang, rate, pitch]
  );

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [isSupported]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  return {
    speak,
    stop,
    isSpeaking,
    isSupported,
  };
}
