import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { ArrowLink } from '../components/ui/ArrowLink';
import { EditorialArt } from '../components/ui/EditorialArt';
import { fadeUp, headingReveal } from '../components/motion/motionVariants';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const AboutPage: React.FC = () => {
  useDocumentTitle('About Girish Lade — Engineer, Product Designer & Developer');
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="section section-first" aria-label="About Girish Lade">
        <div className="page-container">
          <motion.h1
            className="display-title display-title-wide"
            variants={headingReveal}
            initial="hidden"
            animate="visible"
          >
            ENGINEER BY TRAINING.
            <br />
            BUILDER BY CHOICE.
          </motion.h1>

          <motion.div
            className="about-intro-grid"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p className="body-text">
              I'm Girish Balaso Lade, an independent developer and product designer based in Pune, India. My academic path began in Mechanical Engineering, while my professional curiosity took me into web development, interaction design, AI-assisted software creation, and browser-native computing.
            </p>
            <p className="body-text">
              I started LadeStack around a straightforward belief: everyday software should be useful before it is complicated. I care about polished interfaces, predictable workflows, responsible privacy design, and removing unnecessary costs or setup barriers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="section" aria-label="How I Work">
        <div className="page-container">
          <div className="section-heading-group">
            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              HOW I WORK
            </motion.h2>
          </div>

          <div className="process-grid">
            {/* Step 01 */}
            <motion.div
              className="process-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="process-number">01</span>
              <h3 className="process-title">DEFINE</h3>
              <p className="body-text">
                Identify the user, the real problem, the constraints, and what a successful result should make easier.
              </p>
            </motion.div>

            {/* Step 02 */}
            <motion.div
              className="process-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="process-number">02</span>
              <h3 className="process-title">DESIGN &amp; BUILD</h3>
              <p className="body-text">
                Shape the information architecture, interaction, visual system, and implementation together so design decisions survive contact with real code.
              </p>
            </motion.div>

            {/* Step 03 */}
            <motion.div
              className="process-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="process-number">03</span>
              <h3 className="process-title">VERIFY &amp; REFINE</h3>
              <p className="body-text">
                Test behavior, accessibility, responsiveness, runtime constraints, and edge cases. Iterate from evidence rather than assuming a polished screen means a finished product.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Band */}
      <section className="page-container" aria-label="Visual Gallery">
        <div className="about-image-band">
          <motion.div
            className="editorial-frame editorial-frame-square"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <EditorialArt type="workspace" />
          </motion.div>

          <motion.div
            className="editorial-frame editorial-frame-tall band-img-right"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <EditorialArt type="architecture" />
          </motion.div>
        </div>
      </section>

      {/* Experience & Focus Area */}
      <section className="section" aria-label="Background and Focus">
        <div className="page-container">
          <div className="info-block-grid">
            <motion.h2
              className="info-block-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              BACKGROUND
            </motion.h2>

            <motion.div
              className="info-item-list"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="info-item-name">Mechanical Engineering</h3>
                <p className="info-item-role">Diploma, Fabtech Technical Campus</p>
                <p className="info-item-period">Completed in 2021</p>
              </div>

              <div>
                <h3 className="info-item-name">Mechanical Engineering Studies</h3>
                <p className="info-item-role">SVERI's College of Engineering, Pandharpur</p>
                <p className="info-item-period">Engineering Foundation &amp; Systems Thinking</p>
              </div>
            </motion.div>

            <motion.div
              className="info-item-list"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="info-item-name">Independent Product Builder</h3>
                <p className="info-item-role">LadeStack</p>
                <p className="info-item-period">Founder &amp; Creator</p>
              </div>

              <div>
                <h3 className="info-item-name">Full-Stack &amp; Interface Design</h3>
                <p className="info-item-role">Self-Directed Practice</p>
                <p className="info-item-period">Browser Systems &amp; Web Applications</p>
              </div>
            </motion.div>
          </div>

          <div className="info-block-grid" style={{ marginTop: 'clamp(56px, 8vw, 100px)' }}>
            <motion.h2
              className="info-block-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              FOCUS
            </motion.h2>

            <motion.div
              className="info-item-list"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="info-item-name">UI/UX DESIGN</h3>
                <p className="info-item-role">Interface Design &amp; Systems</p>
              </div>

              <div>
                <h3 className="info-item-name">FULL-STACK</h3>
                <p className="info-item-role">Web Development &amp; Architecture</p>
              </div>
            </motion.div>

            <motion.div
              className="info-item-list"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div>
                <h3 className="info-item-name">DEVELOPER TOOLS</h3>
                <p className="info-item-role">Browser-First Systems</p>
              </div>

              <div>
                <h3 className="info-item-name">AI WORKFLOWS</h3>
                <p className="info-item-role">Responsible Integration</p>
              </div>
            </motion.div>
          </div>

          <div style={{ marginTop: 'clamp(48px, 7vw, 84px)' }}>
            <ArrowLink to="/skills" ariaLabel="Explore detailed skills and capabilities">
              EXPLORE TECHNICAL CAPABILITIES
            </ArrowLink>
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
