import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="site-header" role="banner">
      <div className="page-container">
        <Link to="/" className="brand-title" aria-label="Girish Lade Home">
          GIRISH LADE
        </Link>
      </div>
    </header>
  );
};
