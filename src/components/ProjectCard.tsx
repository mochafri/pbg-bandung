import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Project } from '@/types';

const ProjectCard: React.FC<Project> = ({ id, title, description, category, imageUrl }) => {
  return (
    <div className="group bg-surface-container rounded-2xl overflow-hidden shadow-custom-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Tag overlap */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-normal text-primary mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {description}
        </p>
        
        <Link href={`/projects/${id}`} className="mt-auto pt-4 flex items-center text-sm font-medium text-primary cursor-pointer border-t border-transparent group-hover:border-outline-variant/30 transition-colors">
          Lihat Detail
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
