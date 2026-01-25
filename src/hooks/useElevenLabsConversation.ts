import { useConversation } from '@elevenlabs/react';
import { useCallback } from 'react';
import { Scenario } from '../data/scenarios';

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
}

// Your ElevenLabs Agent ID
const AGENT_ID = 'g50Lc7IzLlbPiRpgNXQJ';

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
   * Start a new conversation session with a scenario
   */
  const startSession = useCallback(async (sessionOptions: SessionOptions) => {
    try {
      const { scenario } = sessionOptions;

      await conversation.startSession({
        agentId: AGENT_ID,
        overrides: {
          agent: {
            prompt: {
              prompt: scenario.prompt,
            },
            firstMessage: scenario.firstMessage,
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
