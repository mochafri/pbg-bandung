import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-[120px] bg-primary py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-[80px] flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-[28px] md:text-[32px] font-bold text-on-primary flex items-center gap-3 group">
            <div className="bg-white p-1.5 rounded-lg group-hover:scale-105 transition-transform duration-300">
              <img src="/assets/img/logo.webp" alt="Jasa PBG Bandung" className="h-10 w-auto" />
            </div>
            Jasa PBG Bandung
          </Link>
          <p className="text-[16px] text-white/70 max-w-xs leading-[1.6]">
            Solusi arsitektur yang profesional, patuh, dan etis untuk Bandung modern.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-normal text-secondary-fixed tracking-[0.05em] uppercase">Tautan Utama</h4>
            <div className="flex flex-col gap-3">
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/#beranda">Beranda</a>
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/#tentang">Tentang Kami</a>
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/#layanan">Layanan</a>
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/#proyek">Proyek</a>
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/#kontak">Kontak</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-normal text-secondary-fixed tracking-[0.05em] uppercase">Layanan Kami</h4>
            <div className="flex flex-col gap-3">
              <Link className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/services/pbg">Pengurusan PBG</Link>
              <Link className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/services/syariah">Kontraktor Syariah</Link>
              <Link className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/services/konservasi">Cagar Budaya</Link>
              <Link className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/projects">Portofolio Desain</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[14px] font-normal text-secondary-fixed tracking-[0.05em] uppercase">Informasi</h4>
            <div className="flex flex-col gap-3">
              <Link className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="/services/pbg">FAQ (Tanya Jawab)</Link>
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="#">Kebijakan Privasi</a>
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="#">Syarat & Ketentuan</a>
              <a className="text-[16px] text-white/70 hover:text-white transition-colors duration-200" href="https://wa.me/6282312567209" target="_blank" rel="noopener noreferrer">Dukungan Klien</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 md:px-[80px] mt-16 pt-8 border-t border-on-primary/10">
        <p className="text-[12px] text-white/50 leading-[1.4]">
          © 2024 PBG Pro Construction Services. Hak cipta dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
}
