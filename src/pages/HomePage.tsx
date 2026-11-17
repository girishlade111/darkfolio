import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ArrowLink } from '../components/ui/ArrowLink';
import { projects } from '../data/projects';
import { fadeUp, headingReveal } from '../components/motion/motionVariants';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const HomePage: React.FC = () => {
  useDocumentTitle('Girish Lade — UI/UX Designer, Full-Stack Developer & LadeStack Founder');
  const featuredProjects = projects.filter((p) => p.featuredOnHome);

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="section section-first" aria-label="Introduction">
        <div className="page-container">
          <div className="hero-split">
            <motion.h1
              className="display-title"
              variants={headingReveal}
              initial="hidden"
              animate="visible"
            >
              BUILDING USEFUL
              <br />
              SOFTWARE WITH
              <br />
              THOUGHTFUL DESIGN.
            </motion.h1>

            <motion.div
              className="hero-intro"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <p className="body-text">
                I'm Girish, a UI/UX designer and full-stack developer building LadeStack, a growing collection of accessible, privacy-conscious developer tools and practical web applications.
              </p>
              <div>
                <ArrowLink to="/about" ariaLabel="Read more about Girish Lade">
                  MORE ABOUT ME
                </ArrowLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="section" aria-label="Selected Work">
        <div className="page-container">
          <div className="section-heading-group">
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              SELECTED WORK
            </motion.h2>
            <motion.p
              className="section-subtitle"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              PRODUCTS &amp; EXPERIMENTS
            </motion.p>
          </div>

          <ProjectGrid projects={featuredProjects} />

          <div style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
            <ArrowLink to="/projects" ariaLabel="View all projects">
              VIEW ALL PROJECTS
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="cta-section" aria-label="Call to Action">
        <div className="page-container">
          <div className="cta-grid">
            <motion.h2
              className="cta-title"
              variants={headingReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              LET'S BUILD
              <br />
              SOMETHING USEFUL.
            </motion.h2>

            <motion.div
              className="cta-action-area"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="body-text">
                Have an idea, improvement, collaboration, or technical question? I'm interested in connecting with people building better developer and productivity experiences.
              </p>
              <div>
                <ArrowLink to="/contact" ariaLabel="Go to contact page">
                  CONTACT
                </ArrowLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
