export type Category = 'Semua' | 'Komersial' | 'Residensial' | 'Religius' | 'Pemerintahan' | 'Cagar Budaya';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  imageUrl: string;
  link: string;
  location?: string;
  year?: string;
  gallery?: string[];
}
