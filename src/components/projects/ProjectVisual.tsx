import React from 'react';

interface ProjectVisualProps {
  slug: string;
  name: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ slug, name }) => {
  switch (slug) {
    case 'gb-coder':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="gb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e2226" />
              <stop offset="100%" stopColor="#111315" />
            </linearGradient>
            <linearGradient id="gb-disc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5d6cc" />
              <stop offset="100%" stopColor="#c79b8f" />
            </linearGradient>
            <linearGradient id="gb-glow" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#a3c4bc" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#415a77" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#gb-bg)" />
          <ellipse cx="200" cy="270" rx="140" ry="45" fill="url(#gb-glow)" />
          
          <ellipse cx="200" cy="240" rx="90" ry="32" fill="#2c353d" />
          <path d="M110 210 C110 230, 290 230, 290 210 L290 235 C290 255, 110 255, 110 235 Z" fill="#21282e" />
          <ellipse cx="200" cy="210" rx="90" ry="30" fill="url(#gb-disc)" opacity="0.85" />
          
          <ellipse cx="200" cy="160" rx="70" ry="24" fill="#3d4952" />
          <path d="M130 135 C130 152, 270 152, 270 135 L270 155 C270 172, 130 172, 130 155 Z" fill="#2d373f" />
          <ellipse cx="200" cy="135" rx="70" ry="22" fill="#ffd9d9" />
          
          <circle cx="200" cy="90" r="28" fill="#f8e3dc" />
        </svg>
      );

    case 'ls-pdf':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="pdf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#251c1b" />
              <stop offset="100%" stopColor="#140f0e" />
            </linearGradient>
            <linearGradient id="pdf-pillar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#bf664b" />
              <stop offset="100%" stopColor="#7a3724" />
            </linearGradient>
            <linearGradient id="pdf-block" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e89f8a" />
              <stop offset="100%" stopColor="#b36d59" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#pdf-bg)" />
          
          <rect x="230" y="40" width="18" height="260" rx="9" fill="url(#pdf-pillar)" />
          <rect x="256" y="40" width="18" height="260" rx="9" fill="url(#pdf-pillar)" />
          <rect x="282" y="40" width="18" height="260" rx="9" fill="url(#pdf-pillar)" />
          
          <ellipse cx="320" cy="130" rx="60" ry="18" stroke="#d49b6a" strokeWidth="8" fill="none" transform="rotate(-15 320 130)" />
          
          <path d="M220 230 L380 230 L380 340 L220 340 Z" fill="url(#pdf-block)" />
          <polygon points="120,290 150,270 150,320 120,340" fill="#9e5644" />
          <polygon points="90,310 120,290 120,340 90,360" fill="#783e30" />
        </svg>
      );

    case 'md2pdf':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="md-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a2228" />
              <stop offset="100%" stopColor="#0d1216" />
            </linearGradient>
            <linearGradient id="md-silk1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f0f4f8" />
              <stop offset="100%" stopColor="#b8c8d8" />
            </linearGradient>
            <linearGradient id="md-silk2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8eaec4" />
              <stop offset="100%" stopColor="#e2ebf3" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#md-bg)" />
          
          <path
            d="M 20 60 Q 180 160, 380 90 L 380 240 Q 200 320, 20 210 Z"
            fill="url(#md-silk1)"
            opacity="0.9"
          />
          <path
            d="M 20 160 Q 220 220, 380 180 L 380 340 Q 160 380, 20 300 Z"
            fill="url(#md-silk2)"
            opacity="0.75"
          />
        </svg>
      );

    case 'bharat-land-converter':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="land-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d261e" />
              <stop offset="100%" stopColor="#0f1610" />
            </linearGradient>
            <linearGradient id="land-step" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8cb89a" />
              <stop offset="100%" stopColor="#4a7356" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#land-bg)" />
          
          <ellipse cx="200" cy="190" rx="140" ry="80" stroke="#334737" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <ellipse cx="200" cy="190" rx="100" ry="55" stroke="#48634e" strokeWidth="1.5" fill="none" />
          <ellipse cx="200" cy="190" rx="60" ry="32" stroke="#688c70" strokeWidth="1.5" fill="none" />
          
          <polygon points="120,240 200,195 280,240 200,285" fill="url(#land-step)" />
          <polygon points="150,225 200,195 250,225 200,255" fill="#a4cca8" />
          <circle cx="200" cy="195" r="8" fill="#ffd9d9" />
        </svg>
      );

    case 'swift-resume':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="sr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#251e2b" />
              <stop offset="100%" stopColor="#130e17" />
            </linearGradient>
            <linearGradient id="sr-poly" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d8b4e2" />
              <stop offset="100%" stopColor="#8d689b" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#sr-bg)" />
          
          <rect x="140" y="180" width="120" height="130" rx="8" fill="#2d2435" />
          <polygon points="140,180 200,145 260,180 200,215" fill="url(#sr-poly)" />
          <rect x="175" y="130" width="50" height="50" rx="6" fill="#eed9f5" />
          
          <circle cx="200" cy="95" r="22" fill="#ffd9d9" />
        </svg>
      );

    case 'ls-image-compressor':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="img-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c2626" />
              <stop offset="100%" stopColor="#0d1414" />
            </linearGradient>
            <linearGradient id="img-sphere" x1="20%" y1="20%" x2="90%" y2="90%">
              <stop offset="0%" stopColor="#bbf2f0" />
              <stop offset="50%" stopColor="#87cbc8" />
              <stop offset="100%" stopColor="#417371" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#img-bg)" />
          
          <ellipse cx="200" cy="200" rx="130" ry="40" stroke="#3d6161" strokeWidth="3" transform="rotate(-20 200 200)" fill="none" opacity="0.6" />
          <circle cx="200" cy="200" r="75" fill="url(#img-sphere)" />
          <ellipse cx="200" cy="200" rx="130" ry="40" stroke="#7be3de" strokeWidth="2.5" strokeDasharray="180 300" transform="rotate(-20 200 200)" fill="none" />
          
          <circle cx="115" cy="140" r="12" fill="#ffd9d9" />
        </svg>
      );

    case 'ladestack':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="ls-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#291e21" />
              <stop offset="100%" stopColor="#140d0f" />
            </linearGradient>
            <linearGradient id="ls-stack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7cad0" />
              <stop offset="100%" stopColor="#b56576" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#ls-bg)" />
          
          <rect x="100" y="240" width="200" height="40" rx="20" fill="#38252b" />
          <rect x="120" y="190" width="160" height="40" rx="20" fill="#54313b" />
          <rect x="140" y="140" width="120" height="40" rx="20" fill="url(#ls-stack)" />
          <circle cx="200" cy="95" r="22" fill="#ffd9d9" />
        </svg>
      );

    case 'gamehub':
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="gh-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#221b2b" />
              <stop offset="100%" stopColor="#100b17" />
            </linearGradient>
            <linearGradient id="gh-gem" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d1b3ff" />
              <stop offset="100%" stopColor="#7e4fc9" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#gh-bg)" />
          
          <polygon points="200,80 280,125 200,170 120,125" fill="url(#gh-gem)" />
          <polygon points="120,125 200,170 200,260 120,215" fill="#4f2b8a" />
          <polygon points="200,170 280,125 280,215 200,260" fill="#6939b5" />
          
          <circle cx="100" cy="180" r="14" fill="#ffd9d9" />
          <circle cx="300" cy="170" r="18" fill="#a27fe6" />
        </svg>
      );

    case 'ladestack-drive':
    default:
      return (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          role="img"
          aria-label={`${name} visual artwork`}
        >
          <defs>
            <linearGradient id="drv-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c242c" />
              <stop offset="100%" stopColor="#0c1116" />
            </linearGradient>
            <linearGradient id="drv-slab" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b0d4f1" />
              <stop offset="100%" stopColor="#5283a8" />
            </linearGradient>
          </defs>
          <rect width="400" height="380" fill="url(#drv-bg)" />
          
          <rect x="110" y="210" width="180" height="50" rx="12" fill="#243340" />
          <rect x="130" y="160" width="140" height="44" rx="12" fill="#324759" />
          <rect x="150" y="110" width="100" height="38" rx="10" fill="url(#drv-slab)" />
          <circle cx="200" cy="70" r="14" fill="#ffd9d9" />
        </svg>
      );
  }
};
