import React, { useState, ReactNode } from 'react';
import './chip.css';

export interface ChipProps {
  /** The text content of the chip */
  label: string;
  /** Visual variant of the chip */
  variant?: 'default' | 'outlined' | 'filled' | 'selectable';
  /** Size of the chip */
  size?: 'small' | 'medium' | 'large';
  /** Color theme of the chip */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Whether the chip is disabled */
  disabled?: boolean;
  /** Whether the chip can be removed */
  removable?: boolean;
  /** Whether the chip is initially selected (for selectable variant) */
  selected?: boolean;
  /** Icon to display in the chip */
  icon?: ReactNode;
  /** Avatar to display in the chip (string URL or React element) */
  avatar?: string | ReactNode;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Remove handler */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  disabled = false,
  removable = false,
  selected = false,
  icon,
  avatar,
  onClick,
  onRemove,
  className = '',
  ...props
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    if (variant === 'selectable') {
      setIsSelected(!isSelected);
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (variant === 'selectable') {
        setIsSelected(!isSelected);
      }
      if (onClick) {
        onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }
    }
  };

  const baseClasses = [
    'chip',
    `chip--${variant}`,
    `chip--${size}`,
    `chip--${color}`,
    disabled && 'chip--disabled',
    (variant === 'selectable' && isSelected) && 'chip--selected',
    className
  ].filter(Boolean).join(' ');

  const renderAvatar = () => {
    if (!avatar) return null;
    
    return (
      <div className="chip__avatar">
        {typeof avatar === 'string' ? (
          <img src={avatar} alt="" className="chip__avatar-image" />
        ) : (
          avatar
        )}
      </div>
    );
  };

  const renderIcon = () => {
    if (!icon || avatar) return null;
    
    return (
      <div className="chip__icon">
        {icon}
      </div>
    );
  };

  const renderRemoveButton = () => {
    if (!removable) return null;
    
    return (
      <button
        className="chip__remove"
        onClick={handleRemove}
        disabled={disabled}
        aria-label={`Remove ${label}`}
        type="button"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M9 3L3 9M3 3L9 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  return (
    <div
      className={baseClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={variant === 'selectable' ? 'button' : undefined}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-pressed={variant === 'selectable' ? isSelected : undefined}
      {...props}
    >
      {renderAvatar()}
      {renderIcon()}
      <span className="chip__label">{label}</span>
      {renderRemoveButton()}
    </div>
  );
};

export { Chip };