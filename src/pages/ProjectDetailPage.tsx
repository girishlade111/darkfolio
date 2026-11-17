import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageShell } from '../components/layout/PageShell';
import { Tag } from '../components/ui/Tag';
import { ArrowLink } from '../components/ui/ArrowLink';
import { ProjectVisual } from '../components/projects/ProjectVisual';
import { projects } from '../data/projects';
import { fadeUp, headingReveal } from '../components/motion/motionVariants';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  useDocumentTitle(project ? `${project.name} — Girish Lade Portfolio` : 'Project Detail — Girish Lade');

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageShell>
      <article className="page-container" aria-label={`Project detail for ${project.name}`}>
        {/* Back navigation */}
        <div style={{ paddingTop: 'clamp(24px, 4vw, 44px)' }}>
          <Link
            to="/projects"
            className="arrow-link"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label="Back to all projects"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ transform: 'rotate(180deg)' }}
            >
              <path
                d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>ALL PROJECTS</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="project-detail-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <Tag>{project.category}</Tag>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', letterSpacing: '0.04em' }}>
              {project.status}
            </span>
          </div>

          <motion.h1
            className="display-title"
            variants={headingReveal}
            initial="hidden"
            animate="visible"
          >
            {project.name}
          </motion.h1>

          <motion.p
            className="body-text"
            style={{ fontSize: '1.25rem', color: 'var(--color-text)', maxWidth: '640px', marginTop: '16px' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {project.tagline}
          </motion.p>

          {/* Meta Grid */}
          <div className="project-detail-meta-grid">
            <div>
              <p className="meta-label">ROLE</p>
              <p className="meta-value">{project.role}</p>
            </div>
            <div>
              <p className="meta-label">STATUS</p>
              <p className="meta-value">{project.status}</p>
            </div>
            <div>
              <p className="meta-label">CATEGORY</p>
              <p className="meta-value">{project.category}</p>
            </div>
            <div>
              <p className="meta-label">EXTERNAL URL</p>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="meta-value"
                style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                {new URL(project.website).hostname}
              </a>
            </div>
          </div>
        </header>

        {/* Visual Showcase */}
        <section aria-label="Project Visual Asset" style={{ marginBottom: 'clamp(48px, 8vw, 96px)' }}>
          <div className="editorial-frame" style={{ aspectRatio: '16 / 10', maxHeight: '540px' }}>
            <ProjectVisual slug={project.slug} name={project.name} />
          </div>
        </section>

        {/* Overview & Architecture */}
        <section style={{ maxWidth: '800px', marginBottom: 'clamp(56px, 8vw, 100px)' }}>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>OVERVIEW</h2>
          <p className="body-text" style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '32px' }}>
            {project.fullOverview}
          </p>

          <h3 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '16px' }}>
            KEY TECHNOLOGIES
          </h3>
          <div className="skill-pills-wrap" style={{ marginBottom: '48px' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-pill">
                {tech}
              </span>
            ))}
          </div>

          <h3 className="section-title" style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
            PRIMARY USE CASES
          </h3>
          <div className="use-case-list">
            {project.useCases.map((uc, i) => (
              <div key={i} className="use-case-item">
                <span className="use-case-number">0{i + 1}</span>
                <p className="body-text" style={{ color: 'var(--color-text)' }}>
                  {uc}
                </p>
              </div>
            ))}
          </div>

          {project.caveats && (
            <div style={{ marginTop: '40px', padding: '16px 20px', borderLeft: '2px solid var(--color-border)', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
              <p className="meta-label">SCOPE &amp; VERIFICATION NOTE</p>
              <p className="body-text" style={{ fontSize: '0.875rem' }}>
                {project.caveats}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginTop: '48px' }}>
            <ArrowLink href={project.website} ariaLabel={`Visit live deployment of ${project.name}`}>
              VISIT APPLICATION
            </ArrowLink>
            {project.repository && (
              <ArrowLink href={project.repository} ariaLabel={`View source code of ${project.name} on GitHub`}>
                VIEW GITHUB REPOSITORY
              </ArrowLink>
            )}
          </div>
        </section>
      </article>
    </PageShell>
  );
};
