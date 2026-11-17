import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  onClick,
  children,
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  if (to) {
    return (
      <Link to={to} className={`btn-primary ${className}`} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
