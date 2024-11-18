export interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  benefits: string[];
  dosha?: 'vata' | 'pitta' | 'kapha' | 'tridoshic';
}