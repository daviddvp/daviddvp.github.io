export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: ArticleSection[];
  category: ArticleCategory;
  author: string;
  date: string;
  readTime: number;
  image: string;
  featured?: boolean;
  tags: string[];
  relatedIds?: string[];
}

export type ArticleCategory =
  | 'resenas'
  | 'comparativas'
  | 'guias'
  | 'historia'
  | 'mantenimiento'
  | 'autenticidad';

export interface ArticleSection {
  heading?: string;
  body: string;
}

export interface GShockModel {
  id: string;
  name: string;
  family: ModelFamily;
  yearIntroduced: number;
  image: string;
  tagline: string;
  keyFeatures: string[];
  targetUser: string;
  priceRange: string;
  types: ModelType[];
  isIconic?: boolean;
  description: string;
}

export type ModelFamily =
  | 'DW-5600'
  | 'GW-M5610'
  | 'GA-2100'
  | 'Rangeman'
  | 'Mudmaster'
  | 'Frogman'
  | 'GA-700'
  | 'GM-110'
  | 'GBD-H1000'
  | 'MTG'
  | 'Otros';

export type ModelType =
  | 'solar'
  | 'radio-controlled'
  | 'bluetooth'
  | 'analogico-digital'
  | 'digital'
  | 'mud-resistant'
  | 'diving'
  | 'carbon-core';

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  model?: string;
}
