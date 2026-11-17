import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { ArrowLink } from '../components/ui/ArrowLink';
import { skillCategories } from '../data/skills';
import { fadeUp, headingReveal } from '../components/motion/motionVariants';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const SkillsPage: React.FC = () => {
  useDocumentTitle('Skills & Capabilities — Girish Lade');
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="section section-first" aria-label="Skills &amp; Capabilities">
        <div className="page-container">
          <div className="hero-split">
            <motion.h1
              className="display-title display-title-wide"
              variants={headingReveal}
              initial="hidden"
              animate="visible"
            >
              DESIGN THINKING
              <br />
              MEETS HANDS-ON
              <br />
              ENGINEERING.
            </motion.h1>

            <motion.div
              className="hero-intro"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <p className="body-text">
                My work crosses frontend architecture, interface design, full-stack integrations, browser runtimes, technical content, and AI-assisted workflows. I choose technologies to fit the problem, not the other way around.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Categories */}
      <section className="section" aria-label="Technical Capabilities">
        <div className="page-container">
          <div className="skills-category-grid">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                  {cat.title}
                </h2>
                <p className="body-text" style={{ fontSize: '0.9375rem', marginBottom: '16px' }}>
                  {cat.description}
                </p>
                <div className="skill-pills-wrap">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
