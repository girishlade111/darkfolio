export type ProjectCategory =
  | 'PRODUCT ECOSYSTEM'
  | 'DEVELOPER TOOL'
  | 'PDF TOOL'
  | 'DOCUMENTATION'
  | 'UTILITY'
  | 'CAREER TOOL'
  | 'IMAGE TOOL'
  | 'INTERACTIVE WEB'
  | 'EXPERIMENTAL';

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  shortDescription: string;
  fullOverview: string;
  role: string;
  status: string;
  featuredOnHome?: boolean;
  website: string;
  repository?: string;
  technologies: string[];
  useCases: [string, string, string];
  caveats?: string;
  imageBg: string;
  accentColor: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}
