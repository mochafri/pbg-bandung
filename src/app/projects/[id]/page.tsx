import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { notFound } from 'next/navigation';
import { projects } from '@/data';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) {
    notFound();
  }

  // Fallbacks for details not in data
  const location = project.location || 'Bandung, Jawa Barat';
  const year = project.year || '2024';
  const gallery = project.gallery || [
    project.imageUrl,
    '/assets/img/proyek/gallery-1.webp',
    '/assets/img/proyek/gallery-2.webp'
  ];

  return (
    <>
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Text Column */}
            <div className="md:col-span-6 pr-0 md:pr-12">
              <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-[14px] leading-none tracking-[0.05em] font-semibold mb-6">
                <Icon icon="material-symbols:verified" className="text-[16px]" />
                <span>Kategori: {project.category}</span>
              </div>
              <h1 className="text-[40px] md:text-[64px] leading-[1.2] md:leading-[1.1] tracking-tight font-normal text-primary mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-on-surface-variant text-[16px] leading-[1.6] mb-6">
                <div className="flex items-center gap-2">
                  <Icon icon="material-symbols:location-on" className="text-[20px]" />
                  <span>Lokasi: {location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="material-symbols:calendar-today" className="text-[20px]" />
                  <span>Tahun: {year}</span>
                </div>
              </div>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant mb-10">
                {project.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/6282312567209" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-white px-8 py-4 rounded-lg text-[14px] leading-none tracking-[0.05em] font-semibold hover:bg-primary transition-colors w-full sm:w-auto text-center inline-block">
                  Konsultasi Proyek Serupa
                </a>
              </div>
            </div>
            {/* Image Column */}
            <div className="md:col-span-6 mt-12 md:mt-0 relative">
              <div className="absolute inset-0 bg-primary opacity-10 blur-2xl rounded-xl translate-y-8 translate-x-8"></div>
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-ambient bg-white p-2 border border-surface-variant">
                <Image priority width={1200} height={800} className="w-full h-full object-cover rounded-lg" alt={project.title} src={project.imageUrl} />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-surface-bright py-[120px] border-t border-surface-variant/50">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
            <div className="text-center mb-12">
              <h2 className="text-[48px] leading-[1.2] tracking-tight font-normal text-primary mb-4">Galeri Proyek</h2>
              <p className="text-[16px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto">
                Eksplorasi visual dari arsitektur dan detail material yang dirancang dengan seksama.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gallery.map((imgUrl, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden shadow-sm aspect-[4/3] bg-surface-container">
                  <Image width={800} height={600} alt={`Galeri ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={imgUrl as string} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-[14px] leading-none tracking-[0.05em] font-semibold">Tampilan Detail</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
