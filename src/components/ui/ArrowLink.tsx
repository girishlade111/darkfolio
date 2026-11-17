import React from 'react';
import { Link } from 'react-router-dom';

interface ArrowLinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export const ArrowLink: React.FC<ArrowLinkProps> = ({
  to,
  href,
  children,
  className = '',
  onClick,
  ariaLabel,
}) => {
  const content = (
    <>
      <span>{children}</span>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`arrow-link ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`arrow-link ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </a>
  );
};
