export interface Voice {
  id: string;
  name: string;
  elevenLabsId: string;
  avatar: string;
  introAudio: string;
}

export const voices: Record<'tom' | 'emma', Voice> = {
  tom: {
    id: 'tom',
    name: 'Tom',
    elevenLabsId: 'DYkrAHD8iwork3YSUBbs',
    avatar: '/images/avatar-tom.webp',
    introAudio: '/audio/tom-intro.mp3',
  },
  emma: {
    id: 'emma',
    name: 'Emma',
    elevenLabsId: '56bWURjYFHyYyVf490Dp',
    avatar: '/images/avatar-emma.webp',
    introAudio: '/audio/emma-intro.mp3',
  },
};

export type VoiceId = keyof typeof voices;

export function getVoice(id: VoiceId): Voice {
  return voices[id];
}

// Storage key for persisting voice preference
const VOICE_PREFERENCE_KEY = 'aussie_voice_preference';

export function saveVoicePreference(voiceId: VoiceId): void {
  try {
    localStorage.setItem(VOICE_PREFERENCE_KEY, voiceId);
  } catch (e) {
    console.error('Failed to save voice preference:', e);
  }
}

export function getVoicePreference(): VoiceId | null {
  try {
    const stored = localStorage.getItem(VOICE_PREFERENCE_KEY);
    if (stored === 'tom' || stored === 'emma') {
      return stored;
    }
  } catch (e) {
    console.error('Failed to load voice preference:', e);
  }
  return null;
}
