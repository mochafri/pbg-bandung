"use client";

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects, categories } from '@/data';
import { Category } from '@/types';

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');

  const filteredProjects = activeCategory === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full mt-24">
      {/* Header Section */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-5xl md:text-6xl font-normal text-primary tracking-tight mb-6">
          Semua Proyek
        </h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Kumpulan karya terbaik kami dalam arsitektur, konstruksi syariah, dan pelestarian cagar budaya.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat
                ? 'bg-primary border-primary text-white shadow-md'
                : 'bg-white border-outline-variant text-on-surface hover:border-primary/30 hover:bg-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-24">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
        
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-12 text-center text-on-surface-variant">
            Belum ada proyek di kategori ini.
          </div>
        )}
      </div>
    </div>
  );
}
