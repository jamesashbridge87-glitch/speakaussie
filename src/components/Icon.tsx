import './Icon.css';

// Mapping from emoji to icon filename
const emojiToIcon: Record<string, string> = {
  // Scenarios & Categories
  '🎯': 'target',
  '🚀': 'rocket',
  '💼': 'briefcase',
  '📊': 'bar-chart',
  '📈': 'chart-up',
  '🎉': 'celebration',
  '📞': 'phone',
  '👋': 'wave',
  '🎤': 'microphone',
  '💰': 'money',
  '🤝': 'handshake',
  '📋': 'clipboard',
  '🙋': 'hand-raised',
  '🍽️': 'dining',
  '☕': 'coffee',
  '💡': 'lightbulb',
  '🍺': 'beer',
  '💻': 'laptop',
  '🤔': 'thinking',
  '🎄': 'christmas',
  '🌅': 'sunrise',
  '📝': 'notepad',
  '🌷': 'tulip',
  '📧': 'email',
  '😄': 'happy',
  '💬': 'speech',
  '🍻': 'cheers',
  '😏': 'smirk',
  '🔄': 'refresh',
  '🔥': 'fire',
  '⚡': 'lightning',
  '🏆': 'trophy',
  '🗣️': 'speaking',
  '💯': 'hundred',
  '⏱️': 'stopwatch',
  '⌛': 'hourglass',
  '🕐': 'clock',
  '🏠': 'house',
  '🦘': 'kangaroo',
  '🌟': 'star-glow',
  '🎙️': 'studio-mic',
  '📅': 'calendar',
  '🌱': 'seedling',
  '👑': 'crown',
  '👣': 'footprints',
  '⭐': 'star',
  '💪': 'muscle',
  '📚': 'books',
  '🐛': 'bug',
  '🎭': 'masks',
  '🙏': 'pray',
  '🇦🇺': 'australia',
  '🔒': 'lock',
  '❤️': 'heart',
  '🤍': 'heart-outline',
  '🔊': 'speaker',
  '❓': 'question',
  '👍': 'thumbsup',
  '🔁': 'repeat',
  '📇': 'cards',
  '🌏': 'globe',
  '✨': 'sparkles',
  '😰': 'anxious',
  '😊': 'smile',
  '😎': 'cool',
  '📍': 'pin',
  '📄': 'document',
  '🖨️': 'printer',
};

interface IconProps {
  emoji: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  alt?: string;
}

export function Icon({ emoji, size = 'md', className = '', alt }: IconProps) {
  const iconName = emojiToIcon[emoji];

  // Fallback to emoji if no icon mapping exists
  if (!iconName) {
    return <span className={`icon-emoji ${className}`}>{emoji}</span>;
  }

  const src = `${import.meta.env.BASE_URL}icons/icon-${iconName}.jpg`;

  return (
    <img
      src={src}
      alt={alt || iconName}
      className={`icon icon-${size} ${className}`}
      loading="lazy"
    />
  );
}

// Export the mapping for use elsewhere if needed
export { emojiToIcon };

export default Icon;
