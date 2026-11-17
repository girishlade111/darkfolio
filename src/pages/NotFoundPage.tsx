import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { Button } from '../components/ui/Button';
import { fadeUp, headingReveal } from '../components/motion/motionVariants';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotFoundPage: React.FC = () => {
  useDocumentTitle("404: Page Can't Be Found — Girish Lade");
  return (
    <PageShell compact>
      <div className="page-container">
        <div className="not-found-container">
          <motion.div
            className="not-found-number"
            variants={headingReveal}
            initial="hidden"
            animate="visible"
          >
            404
          </motion.div>

          <motion.h1
            className="not-found-message"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            PAGE CAN'T BE FOUND
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Button to="/" ariaLabel="Return to homepage">
              GO HOME
            </Button>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
};
