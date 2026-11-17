import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { Tag } from '../ui/Tag';
import { ProjectVisual } from './ProjectVisual';
import { projectCardReveal } from '../motion/motionVariants';

interface ProjectCardProps {
  project: Project;
  isStaggeredCol?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isStaggeredCol = false }) => {
  const navigate = useNavigate();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/projects/${project.slug}`);
    }
  };

  return (
    <motion.article
      variants={projectCardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`project-card ${isStaggeredCol ? 'project-col-right' : ''}`}
      onClick={() => navigate(`/projects/${project.slug}`)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`View project details for ${project.name}, category ${project.category}`}
    >
      <div className="project-image-wrap">
        <div className="project-image-inner">
          <ProjectVisual slug={project.slug} name={project.name} />
        </div>
      </div>
      <div className="project-meta">
        <h3 className="project-title">{project.name}</h3>
        <Tag>{project.category}</Tag>
      </div>
    </motion.article>
  );
};
