import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { primaryNavItems } from '../../data/navigation';

export const FloatingNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isItemActive = (path: string): boolean => {
    if (path === '/') {
      return currentPath === '/';
    }
    if (path === '/projects') {
      return currentPath.startsWith('/projects');
    }
    return currentPath === path;
  };

  return (
    <div className="floating-nav-wrapper">
      <nav className="floating-nav" aria-label="Main floating navigation">
        {primaryNavItems.map((item) => {
          const active = isItemActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`floating-nav-item ${active ? 'is-active' : ''}`}
              aria-current={active ? 'page' : undefined}
            >
              {active && (
                <motion.div
                  layoutId="navActivePill"
                  className="nav-active-pill"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="floating-nav-label">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
