import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingNav } from '../navigation/FloatingNav';
import { pageTransition } from '../motion/motionVariants';

interface PageShellProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  compact?: boolean;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  hideFooter = false,
  compact = false,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`page-shell ${compact ? 'site-shell-compact' : ''}`}>
      <Header />
      <motion.main
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        id="main-content"
      >
        {children}
      </motion.main>
      {!hideFooter && <Footer />}
      <FloatingNav />
    </div>
  );
};
