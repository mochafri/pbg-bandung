import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Semua Proyek',
  description: 'Kumpulan karya terbaik kami dalam arsitektur, konstruksi syariah, dan pelestarian cagar budaya di Bandung.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
