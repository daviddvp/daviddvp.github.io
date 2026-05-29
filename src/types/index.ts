// === Tipos centralizados del portfolio ===

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  availability: 'available' | 'open' | 'unavailable';
  availabilityLabel: string;
  currentStack: string[];
  valueProps: ValueProp[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'learning' | 'working' | 'comfortable' | 'proficient';
  note?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'full-time' | 'contract' | 'freelance' | 'internship';
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  status: 'active' | 'expired' | 'in-progress';
}

export interface StackCategory {
  category: string;
  icon: string;
  items: StackItem[];
}

export interface StackItem {
  name: string;
  description: string;
  tags: string[];
}
