import { memo, ReactNode } from 'react';

interface QuickLinkProps {
  icon: ReactNode;
  text: string;
  variant: 'slang' | 'workplace' | 'speak' | 'practice';
  onClick: () => void;
}

export const QuickLink = memo(function QuickLink({
  icon,
  text,
  variant,
  onClick,
}: QuickLinkProps) {
  return (
    <button className={`quick-link ${variant}`} onClick={onClick}>
      <span className="link-icon">{icon}</span>
      <span className="link-text">{text}</span>
    </button>
  );
});
