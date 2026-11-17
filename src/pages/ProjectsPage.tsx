import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ArrowLink } from '../components/ui/ArrowLink';
import { projects } from '../data/projects';
import { fadeUp, headingReveal } from '../components/motion/motionVariants';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ProjectsPage: React.FC = () => {
  useDocumentTitle('Projects by Girish Lade — Browser IDEs, PDF Tools & Web Apps');
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="section section-first" aria-label="Projects Overview">
        <div className="page-container">
          <div className="hero-split">
            <motion.h1
              className="display-title"
              variants={headingReveal}
              initial="hidden"
              animate="visible"
            >
              SELECTED
              <br />
              PROJECTS
            </motion.h1>

            <motion.div
              className="hero-intro"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <p className="body-text">
                Browser-first tools, practical web applications, and product experiments focused on useful workflows, thoughtful interfaces, and responsible engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section" aria-label="All Projects Catalog">
        <div className="page-container">
          <div className="section-heading-group">
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              ALL PRODUCTS &amp; EXPERIMENTS
            </motion.h2>
            <motion.p
              className="section-subtitle"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              BROWSER-FIRST UTILITIES &amp; APPLICATIONS
            </motion.p>
          </div>

          <ProjectGrid projects={projects} />
        </div>
      </section>

      {/* Closing CTA */}
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
