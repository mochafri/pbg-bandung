"use client";

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isProjects = pathname === '/projects';
  
  return (
    <nav className="fixed w-full top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/assets/img/logo.webp" alt="PBG Pro" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary leading-tight tracking-tight">Jasa PBG Bandung</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#beranda" className="text-on-surface-variant hover:text-primary text-sm font-semibold transition-colors">Beranda</Link>
            <Link href="/#tentang" className="text-on-surface-variant hover:text-primary text-sm font-semibold transition-colors">Tentang Kami</Link>
            <Link href="/#layanan" className="text-on-surface-variant hover:text-primary text-sm font-semibold transition-colors">Layanan</Link>
            <Link href="/#proyek" className="text-on-surface-variant hover:text-primary text-sm font-semibold transition-colors">Proyek</Link>
            <Link href="/#kontak" className="text-on-surface-variant hover:text-primary text-sm font-semibold transition-colors">Kontak</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="https://wa.me/6282312567209" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-on-surface hover:text-primary p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
