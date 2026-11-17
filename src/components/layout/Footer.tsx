import React from 'react';
import { Link } from 'react-router-dom';
import { footerNavItems, socialLinks, ecosystemLinks } from '../../data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="page-container">
        <div className="footer-grid">
          {/* Column 1: Navigation */}
          <div className="footer-col">
            <span className="footer-col-title">NAVIGATION</span>
            {footerNavItems.map((item) => (
              <Link key={item.path} to={item.path} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Column 2: Connect */}
          <div className="footer-col">
            <span className="footer-col-title">CONNECT</span>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Column 3: LadeStack */}
          <div className="footer-col">
            <span className="footer-col-title">LADESTACK</span>
            {ecosystemLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Column 4: Copyright */}
          <div className="footer-col">
            <span className="footer-col-title">COPYRIGHT</span>
            <span className="footer-copyright">
              (C) {currentYear}
              <br />
              Girish Balaso Lade
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
