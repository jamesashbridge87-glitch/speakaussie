import { useConversation } from '@elevenlabs/react';
import { useCallback } from 'react';
import { Difficulty, Scenario } from '../data/scenarios';
import { Voice, VoicePersonality } from '../data/voices';

export type ConnectionStatus = 'disconnected' | 'connecting' | 'connected';

interface Message {
  source: 'user' | 'ai';
  message: string;
}

interface ConversationOptions {
  onConnect?: () => void;
  onDisconnect?: () => void;
  onMessage?: (message: Message) => void;
  onError?: (error: Error) => void;
}

interface SessionOptions {
  scenario: Scenario;
  voice: Voice;
}

// Your ElevenLabs Agent ID
const AGENT_ID = 'g50Lc7IzLlbPiRpgNXQJ';

/**
 * Difficulty-based speaking style modifiers.
 * These are injected based on the scenario's difficulty level.
 */
const DIFFICULTY_MODIFIERS: Record<Difficulty, string> = {
  beginner: `
DIFFICULTY LEVEL: BEGINNER
Adjust your speech for learners who are new to Australian English:
- Speak SLOWLY and CLEARLY - enunciate each word
- Use MINIMAL slang - stick to the most common expressions (g'day, no worries, mate)
- Keep sentences SHORT and simple
- Pause slightly between sentences to give them time to process
- If you use an Aussie expression, use it in a clear context so the meaning is obvious
- Avoid complex idioms or obscure colloquialisms
- Be patient and encouraging if they seem confused
`,
  intermediate: `
DIFFICULTY LEVEL: INTERMEDIATE
Adjust your speech for learners who have some familiarity with Australian English:
- Speak at a NATURAL pace - not too fast, not artificially slow
- Use COMMON Aussie expressions and slang naturally (arvo, keen, heaps, reckon, no worries, flat out)
- Mix casual and standard English
- You can use some idioms if they're widely understood
- If they seem confused by an expression, offer a quick clarification naturally
- Balance being authentic with being understandable
`,
  advanced: `
DIFFICULTY LEVEL: ADVANCED
Speak naturally as an Australian would in real life:
- Use FULL natural speech patterns and pace
- Use slang, colloquialisms, and idioms FREELY (she'll be right, flat out like a lizard drinking, not here to fuck spiders, etc.)
- Include natural filler words, contractions, and casual speech patterns
- Don't slow down or simplify - this is realistic immersion
- Use Australian humour including dry wit and understatement
- Feel free to use regional expressions and less common slang
- Challenge them to keep up with authentic Australian conversation
`,
};

/**
 * Meta-instructions to prevent the AI from speaking emotion words that were meant as tone directions.
 * This is prepended to all scenario prompts.
 */
const EMOTION_HANDLING_INSTRUCTIONS = `
IMPORTANT INSTRUCTION - READ CAREFULLY:
You are an AI voice assistant in a roleplay conversation. Any words describing emotions, feelings, or tones in this prompt (such as "frustrated", "happy", "nervous", "excited", "angry", "warm", "guarded") are DIRECTIONS for HOW to speak, NOT things to say out loud.

NEVER say emotion words as part of your speech. Instead, convey emotions through:
- Your choice of words and phrases
- Sentence structure (short, clipped sentences for frustration; longer, warmer sentences for friendliness)
- Expressive language ("Look, this is getting ridiculous" conveys frustration without saying "I'm frustrated")

WRONG: "I'm feeling frustrated about this situation."
RIGHT: "Look, this isn't good enough. We agreed on last week and now we're scrambling."

WRONG: "I'm happy to help you with that."
RIGHT: "Yeah, no worries - let me sort that out for you."

Now, here is your character and scenario:

`;

/**
 * Template placeholders available for use in scenario prompts and first messages.
 * These allow scenario authors to inject voice-specific content.
 *
 * Available placeholders in prompts and firstMessage:
 * - {name} - Voice name (e.g., "Tom", "Emma")
 * - {expression} - A random expression from the character's repertoire
 * - {speakingStyle} - The character's speaking style description
 * - {traits} - Comma-separated list of character traits
 * - {description} - Character background description
 *
 * Example usage in scenario prompt:
 *   "You are {name}, an Australian helping someone order at a cafe. {expression}"
 */
export interface TemplatePlaceholders {
  /** Voice name - e.g., "Tom", "Emma" */
  name: string;
  /** A random expression from the character's repertoire */
  expression: string;
  /** The character's speaking style description */
  speakingStyle: string;
  /** Comma-separated list of character traits */
  traits: string;
  /** Character background description */
  description: string;
}

/**
 * Build template placeholders from voice data.
 * Returns an object with all available placeholders for template substitution.
 */
function buildTemplatePlaceholders(voice: Voice): TemplatePlaceholders {
  const { personality, name } = voice;

  // Pick a random expression (or fallback to empty)
  const randomExpression =
    personality.exampleExpressions.length > 0
      ? personality.exampleExpressions[
          Math.floor(Math.random() * personality.exampleExpressions.length)
        ]
      : '';

  return {
    name,
    expression: randomExpression,
    speakingStyle: personality.speakingStyle || '',
    traits: personality.traits.join(', ') || '',
    description: personality.description || '',
  };
}

/**
 * Replace template placeholders in text with voice-specific values.
 * Supported placeholders:
 * - {name} - Voice name (e.g., "Tom", "Emma")
 * - {expression} - A random expression from the character's repertoire
 * - {speakingStyle} - The character's speaking style description
 * - {traits} - Comma-separated list of character traits
 * - {description} - Character background description
 */
function injectTemplatePlaceholders(text: string, placeholders: TemplatePlaceholders): string {
  return text
    .replace(/\{name\}/g, placeholders.name)
    .replace(/\{expression\}/g, placeholders.expression)
    .replace(/\{speakingStyle\}/g, placeholders.speakingStyle)
    .replace(/\{traits\}/g, placeholders.traits)
    .replace(/\{description\}/g, placeholders.description);
}

/**
 * Get the difficulty-based speaking style modifier for the scenario
 */
function getDifficultyModifier(difficulty: Difficulty): string {
  return DIFFICULTY_MODIFIERS[difficulty];
}

/**
 * Build character context section from voice personality to inject into prompts.
 * Returns empty string if personality is not defined.
 */
function buildCharacterContext(personality: VoicePersonality, voiceName: string): string {
  // Skip if personality is not yet defined (empty description)
  if (!personality.description) {
    return '';
  }

  const lines = [
    `YOUR CHARACTER: ${voiceName}`,
    '',
    personality.description,
    '',
    'PERSONALITY TRAITS:',
    ...personality.traits.map((trait) => `- ${trait}`),
    '',
    'SPEAKING STYLE:',
    personality.speakingStyle,
    '',
    'EXPRESSIONS YOU NATURALLY USE:',
    personality.exampleExpressions.map((expr) => `"${expr}"`).join(', '),
    '',
    '---',
    '',
  ];

  return lines.join('\n');
}

/**
 * Wrap the scenario prompt with meta-instructions about emotion handling
 */
function wrapPromptWithEmotionInstructions(prompt: string): string {
  return EMOTION_HANDLING_INSTRUCTIONS + prompt;
}

/**
 * Hook to manage voice conversations using ElevenLabs Conversational AI
 */
export function useElevenLabsConversation(options: ConversationOptions = {}) {
  const { onConnect, onDisconnect, onMessage, onError } = options;

  const conversation = useConversation({
    onConnect: () => {
      onConnect?.();
    },
    onDisconnect: () => {
      onDisconnect?.();
    },
    onMessage: (message) => {
      if (message.source === 'user' && message.message) {
        onMessage?.({ source: 'user', message: message.message });
      } else if (message.source === 'ai' && message.message) {
        onMessage?.({ source: 'ai', message: message.message });
      }
    },
    onError: (error: unknown) => {
      console.error('ElevenLabs conversation error:', error);
      const errorObj = error instanceof Error ? error : new Error(String(error));
      onError?.(errorObj);
    },
  });

  const {
    status: elevenLabsStatus,
    isSpeaking,
  } = conversation;

  // Map ElevenLabs status to our status type
  const status: ConnectionStatus =
    elevenLabsStatus === 'connected' ? 'connected' :
    elevenLabsStatus === 'connecting' ? 'connecting' : 'disconnected';

  /**
   * Start a new conversation session with a scenario and voice
   */
  const startSession = useCallback(async (sessionOptions: SessionOptions) => {
    try {
      const { scenario, voice } = sessionOptions;

      // Build template placeholders for this voice
      const placeholders = buildTemplatePlaceholders(voice);

      // Build the character context from voice personality
      const characterContext = buildCharacterContext(voice.personality, voice.name);

      // Get difficulty-based speaking style modifier
      const difficultyModifier = getDifficultyModifier(scenario.difficulty);

      // Inject template placeholders into prompt and first message
      const basePrompt = injectTemplatePlaceholders(scenario.prompt, placeholders);
      // Wrap with meta-instructions, difficulty modifier, and character context
      const prompt = wrapPromptWithEmotionInstructions(
        difficultyModifier + '\n' + characterContext + basePrompt
      );
      const firstMessage = injectTemplatePlaceholders(scenario.firstMessage, placeholders);

      await conversation.startSession({
        agentId: AGENT_ID,
        overrides: {
          agent: {
            prompt: {
              prompt: prompt,
            },
            firstMessage: firstMessage,
          },
          tts: {
            voiceId: voice.elevenLabsId,
          },
        },
      });
    } catch (error) {
      console.error('Failed to start ElevenLabs session:', error);
      onError?.(error instanceof Error ? error : new Error('Failed to start session'));
      throw error;
    }
  }, [conversation, onError]);

  /**
   * End the current session
   */
  const endSession = useCallback(async () => {
    try {
      await conversation.endSession();
    } catch (error) {
      console.error('Failed to end session:', error);
    }
  }, [conversation]);

  /**
   * Get input (microphone) frequency data for visualization
   */
  const getInputByteFrequencyData = useCallback((): Uint8Array | null => {
    try {
      const data = conversation.getInputByteFrequencyData?.();
      return data ?? null;
    } catch {
      return null;
    }
  }, [conversation]);

  /**
   * Get output (speaker) frequency data for visualization
   */
  const getOutputByteFrequencyData = useCallback((): Uint8Array | null => {
    try {
      const data = conversation.getOutputByteFrequencyData?.();
      return data ?? null;
    } catch {
      return null;
    }
  }, [conversation]);

  /**
   * Send feedback about the conversation
   */
  const sendFeedback = useCallback((positive: boolean) => {
    try {
      conversation.sendFeedback?.(positive);
    } catch (error) {
      console.error('Failed to send feedback:', error);
    }
  }, [conversation]);

  // Mute/unmute controls (if available in ElevenLabs SDK)
  const isMuted = false; // ElevenLabs handles this internally
  const isListening = status === 'connected' && !isSpeaking;

  const toggleMute = useCallback(() => {
    // ElevenLabs SDK may not expose mute control directly
    console.warn('Mute toggle not directly supported - ElevenLabs handles audio automatically');
  }, []);

  return {
    // State
    status,
    isSpeaking,
    isListening,
    isMuted,
    isProcessing: false,

    // Session management
    startSession,
    endSession,

    // Mute controls
    toggleMute,
    mute: toggleMute,
    unmute: toggleMute,

    // Audio visualization
    getInputByteFrequencyData,
    getOutputByteFrequencyData,

    // Feedback
    sendFeedback,
  };
}
