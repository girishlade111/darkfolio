import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { fadeUp, headingReveal } from '../components/motion/motionVariants';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ContactPage: React.FC = () => {
  useDocumentTitle('Contact Girish Lade — Developer & LadeStack Founder');
  return (
    <PageShell>
      <div className="page-container contact-hero-wrap">
        {/* Massive Heading */}
        <motion.h1
          className="display-title"
          variants={headingReveal}
          initial="hidden"
          animate="visible"
        >
          REACH OUT
          <br />
          AND SAY HELLO
        </motion.h1>

        {/* Split Grid */}
        <div className="contact-split-grid">
          {/* Left Column: Direct Links with Arrow */}
          <motion.div
            className="contact-links-list"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a
              href="mailto:admin@ladestack.in"
              className="contact-direct-link"
              aria-label="Send email to admin@ladestack.in"
            >
              <span>EMAIL</span>
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
            </a>

            <a
              href="https://www.linkedin.com/in/girish-lade/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-link"
              aria-label="Open Girish Lade's LinkedIn profile"
            >
              <span>LINKEDIN</span>
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
            </a>

            <a
              href="https://github.com/girishlade111"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-link"
              aria-label="Open Girish Lade's GitHub profile"
            >
              <span>GITHUB</span>
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
            </a>

            <a
              href="https://www.instagram.com/girish_lade_/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-link"
              aria-label="Open Girish Lade's Instagram profile"
            >
              <span>INSTAGRAM</span>
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
            </a>

            <a
              href="https://codepen.io/Girish-Lade-the-looper"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-direct-link"
              aria-label="Open Girish Lade's CodePen profile"
            >
              <span>CODEPEN</span>
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
            </a>
          </motion.div>

          {/* Right Column: Supporting Description */}
          <motion.div
            className="contact-desc-box"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="body-text" style={{ fontSize: '1.1rem', lineHeight: '1.75' }}>
              Have an interesting project, collaboration idea, or useful tool suggestion? I enjoy discussing developer experience, web products, thoughtful UI/UX, AI integrations, and practical software ideas. Explore my work on GitHub or get in touch through LadeStack's official email.
            </p>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
};
