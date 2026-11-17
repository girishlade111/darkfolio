import React from 'react';
import { Project } from '../../types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="editorial-project-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          isStaggeredCol={index % 2 === 1}
        />
      ))}
    </div>
  );
};
