import React from 'react';

interface EditorialArtProps {
  type: 'workspace' | 'architecture';
}

export const EditorialArt: React.FC<EditorialArtProps> = ({ type }) => {
  if (type === 'workspace') {
    return (
      <svg
        viewBox="0 0 500 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        role="img"
        aria-label="Studio desk and design workspace composition"
      >
        <defs>
          <linearGradient id="art-wall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22201e" />
            <stop offset="100%" stopColor="#141312" />
          </linearGradient>
          <linearGradient id="desk-surface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d5cfc9" />
            <stop offset="100%" stopColor="#a39c94" />
          </linearGradient>
          <linearGradient id="cup-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d5a6c" />
            <stop offset="100%" stopColor="#1f323e" />
          </linearGradient>
        </defs>
        <rect width="500" height="450" fill="url(#art-wall)" />
        {/* Soft atmospheric window light angle */}
        <polygon points="120,0 350,0 500,450 0,450" fill="#2d2a27" opacity="0.4" />
        {/* Desk plane */}
        <polygon points="0,220 500,200 500,450 0,450" fill="url(#desk-surface)" />
        {/* Soft shadow cast */}
        <polygon points="140,290 280,310 260,420 120,380" fill="#756f68" opacity="0.7" />
        {/* Studio ceramic cup */}
        <ellipse cx="140" cy="300" rx="28" ry="10" fill="#8c7a6b" />
        <path d="M120 250 L160 250 L158 295 L122 295 Z" fill="url(#cup-body)" />
        <ellipse cx="140" cy="250" rx="20" ry="7" fill="#152129" />
        <path d="M118 260 C106 260, 106 280, 120 282" stroke="#2c424f" strokeWidth="4" fill="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 500 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label="Mechanical and architectural engineering structure"
    >
      <defs>
        <linearGradient id="arch-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1c1e" />
          <stop offset="100%" stopColor="#0e0f11" />
        </linearGradient>
        <linearGradient id="arch-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cfd8dc" />
          <stop offset="100%" stopColor="#78909c" />
        </linearGradient>
      </defs>
      <rect width="500" height="560" fill="url(#arch-bg)" />
      {/* Precision architectural elevation lines */}
      <line x1="80" y1="40" x2="80" y2="520" stroke="#2a3036" strokeWidth="1" strokeDasharray="6 6" />
      <line x1="250" y1="40" x2="250" y2="520" stroke="#374149" strokeWidth="1.5" />
      <line x1="420" y1="40" x2="420" y2="520" stroke="#2a3036" strokeWidth="1" strokeDasharray="6 6" />
      
      <circle cx="250" cy="240" r="140" stroke="#3d4954" strokeWidth="1.5" fill="none" />
      <circle cx="250" cy="240" r="90" stroke="#546575" strokeWidth="2" fill="none" />
      
      {/* Sculptural geometric cantilever structure */}
      <polygon points="140,360 250,220 360,360 250,330" fill="url(#arch-metal)" opacity="0.85" />
      <polygon points="190,440 250,330 310,440" fill="#455a64" />
      <circle cx="250" cy="220" r="14" fill="#ffd9d9" />
    </svg>
  );
};
