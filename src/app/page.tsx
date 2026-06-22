"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    gsap.from('.animate-hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.animate-hero-img', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      delay: 0.4,
      ease: 'power3.out',
    });

    // Scroll Animations
    const fadeUpElements = gsap.utils.toArray('.animate-fade-up') as HTMLElement[];
    fadeUpElements.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });

    const staggerContainers = gsap.utils.toArray('.animate-stagger-container') as HTMLElement[];
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.animate-stagger-item');
      gsap.from(items, {
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    });

  }, { scope: container });

  return (
    <div ref={container}>
      <section id="beranda" className="max-w-[1280px] mx-auto px-5 md:px-[80px] pt-32 pb-12 md:pt-40 md:pb-24 flex flex-col md:flex-row items-center gap-[24px] md:gap-16">
        <div className="w-full md:w-[55%] flex flex-col items-start gap-6">
          <h1 className="animate-hero-text text-[40px] md:text-[64px] font-normal text-primary leading-[1.2] md:leading-[1.1] tracking-[-0.01em] md:tracking-[-0.02em]">
            Jasa Pengurusan Persetujuan Bangunan Gedung (PBG) & Cagar Budaya Kota Bandung
          </h1>
          <p className="animate-hero-text text-[18px] text-on-surface-variant max-w-xl leading-[1.6]">
            Solusi legalitas bangunan (PBG/IMB) dan renovasi cagar budaya dengan tenaga ahli bersertifikat SKA/SKK. Cepat, tepat, dan sesuai regulasi SIMBG.
          </p>
          <div className="animate-hero-text pt-4">
            <a href="https://wa.me/6282312567209" target="_blank" rel="noopener noreferrer" className="btn-primary-hover bg-primary-container text-on-primary text-[14px] font-semibold tracking-[0.05em] px-8 py-4 rounded-lg flex items-center gap-2 w-max">
              Konsultasi Gratis
              <Icon icon="material-symbols:arrow-forward" className="text-sm" />
            </a>
          </div>
        </div>
        <div className="animate-hero-img w-full md:w-[45%] h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-ambient relative bg-surface-container-low">
          <Image priority width={1000} height={1000} className="w-full h-full object-cover" alt="Architecture hero" src="/assets/img/hero.webp" />
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-ambient border border-white/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-primary-container">
              <Icon icon="material-symbols:verified" className="fill" />
            </div>
            <div>
              <h4 className="text-[14px] font-normal text-primary tracking-[0.05em]">100% Kepatuhan Hukum</h4>
              <p className="text-[12px] text-on-surface-variant leading-[1.4]">Solusi legalitas bangunan (PBG/IMB) cepat dan presisi.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="w-full bg-primary-container text-on-primary py-24 mt-[120px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <Image width={800} height={800} className="rounded-2xl object-cover h-[400px] w-full shadow-ambient opacity-90" alt="Architects meeting" src="/assets/img/about.webp" />
            </div>
            <div className="flex flex-col gap-12">
              <h2 className="animate-fade-up text-[32px] font-normal max-w-lg leading-[1.3]">
                Dengan pengalaman lebih dari satu dekade, kami menghadirkan solusi Persetujuan Bangunan Gedung (PBG) baik bangunan komersial dan bangunan cagar budaya Kota Bandung
              </h2>
              <div className="animate-stagger-container grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-on-primary/20">
                <div className="animate-stagger-item">
                  <div className="text-[48px] font-semibold text-secondary-fixed mb-2 leading-[1.2]">50+</div>
                  <div className="text-[12px] text-white/80 leading-[1.4]">Proyek Selesai di Bandung</div>
                </div>
                <div className="animate-stagger-item">
                  <div className="text-[48px] font-semibold text-secondary-fixed mb-2 leading-[1.2]">10+</div>
                  <div className="text-[12px] text-white/80 leading-[1.4]">Tahun Pengalaman</div>
                </div>
                <div className="animate-stagger-item">
                  <div className="text-[48px] font-semibold text-secondary-fixed mb-2 leading-[1.2]">100%</div>
                  <div className="text-[12px] text-white/80 leading-[1.4]">Kepatuhan Hukum & Cagar Budaya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-[120px]">
        <div className="animate-fade-up flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary-container"></div>
            <span className="text-[14px] font-semibold text-on-surface-variant uppercase tracking-[0.05em]">Keahlian Kami</span>
          </div>
          <h2 className="text-[40px] md:text-[64px] font-normal text-primary max-w-2xl leading-[1.2] md:leading-[1.1]">
            Layanan Utama Kami
          </h2>
          <p className="text-[18px] text-on-surface-variant mt-6 max-w-3xl leading-[1.6]">
            Berfokus pada kebutuhan unik Anda, tim kami memberikan solusi yang memadukan pengetahuan peraturan yang mendalam, keunggulan arsitektur, dan praktik konstruksi etis untuk memastikan integritas struktural yang tahan lama.
          </p>
        </div>
        
        <div className="animate-stagger-container grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {/* Service 1 */}
          <div className="animate-stagger-item bg-white rounded-2xl p-8 shadow-ambient hover:shadow-ambient-hover transition-shadow duration-300 border border-transparent hover:border-tertiary-fixed group flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center mb-8 group-hover:bg-tertiary-fixed transition-colors">
                <Icon icon="material-symbols:assignment" className="text-primary-container text-3xl" />
              </div>
              <h3 className="text-[24px] font-normal text-primary mb-4 leading-[1.3]">PBG Bangunan Komersial</h3>
              <p className="text-[16px] text-on-surface-variant leading-[1.6]">Proses transparan pengurusan PBG melalui sistem SIMBG untuk bangunan komersial, inklusif dokumen teknis dan sertifikasi tenaga ahli.</p>
            </div>
            <Link href="/services/pbg" className="btn-outline-hover mt-6 w-full border-2 border-primary-container text-primary-container text-[14px] font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2">
              Selengkapnya <Icon icon="material-symbols:arrow-forward" className="text-sm" />
            </Link>
          </div>
          
          {/* Service 2 */}
          <div className="animate-stagger-item bg-white rounded-2xl p-8 shadow-ambient hover:shadow-ambient-hover transition-shadow duration-300 border border-transparent hover:border-tertiary-fixed group flex flex-col justify-between h-full">
            <div>
              <div className="w-14 h-14 rounded-xl bg-tertiary-fixed/30 flex items-center justify-center mb-8 group-hover:bg-tertiary-fixed transition-colors">
                <Icon icon="material-symbols:account-balance" className="text-primary-container text-3xl" />
              </div>
              <h3 className="text-[24px] font-normal text-primary mb-4 leading-[1.3]">PBG Cagar Budaya</h3>
              <p className="text-[16px] text-on-surface-variant leading-[1.6]">Rekomendasi teknis TACB dan pengurusan PBG bangunan bersejarah sesuai kaidah pelestarian Disbudpar Bandung.</p>
            </div>
            <Link href="/services/konservasi" className="btn-outline-hover mt-6 w-full border-2 border-primary-container text-primary-container text-[14px] font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2">
              Selengkapnya <Icon icon="material-symbols:arrow-forward" className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <section id="proyek" className="bg-surface-container-low py-[120px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
          <div className="animate-fade-up flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-[40px] md:text-[48px] font-normal text-primary mb-4 leading-[1.2]">
                Proyek Unggulan
              </h2>
              <p className="text-[18px] text-on-surface-variant max-w-xl leading-[1.6]">
                Pilihan kurasi dari intervensi arsitektur, kepatuhan hukum, dan restorasi warisan kami baru-baru ini.
              </p>
            </div>
            <Link href="/projects" className="btn-outline-hover text-primary-container border-2 border-primary-container text-[14px] font-semibold px-6 py-3 rounded-lg tracking-[0.05em] inline-flex items-center justify-center gap-2">
              Lihat Semua Karya
              <Icon icon="material-symbols:arrow-forward" className="text-sm" />
            </Link>
          </div>
          
          <div className="animate-stagger-container grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Project 1 */}
            <div className="animate-stagger-item h-full">
              <div className="group cursor-pointer card-hover bg-white rounded-2xl p-4 border border-transparent h-full flex flex-col">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-ambient h-[300px]">
                  <Image priority width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kawasan Cagar Budaya" src="/assets/img/proyek/11.jpeg" />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">Komersial</span>
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">Cagar Budaya</span>
                </div>
                <h3 className="text-[20px] font-normal text-primary mb-2 line-clamp-1">Perencanaan Arsitektur Cagar Budaya</h3>
                <p className="text-[14px] text-on-surface-variant leading-[1.6]">Jalan Naripan No 2B Bandung. Alternatif 1 perencanaan kawasan.</p>
                <div className="mt-auto pt-4">
                  <Link href="/projects/1" className="text-primary-container text-[14px] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Lihat Detail <Icon icon="material-symbols:arrow-forward" className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="animate-stagger-item h-full">
              <div className="group cursor-pointer card-hover bg-white rounded-2xl p-4 border border-transparent h-full flex flex-col">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-ambient h-[300px]">
                  <Image priority width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Desain Residensial Modern" src="/assets/img/proyek/12.webp" />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">Residensial</span>
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">Konstruksi</span>
                </div>
                <h3 className="text-[20px] font-normal text-primary mb-2 line-clamp-1">Desain Residensial Modern</h3>
                <p className="text-[14px] text-on-surface-variant leading-[1.6]">Konsep hunian tropis modern dengan pencahayaan alami yang optimal (Dummy Text).</p>
                <div className="mt-auto pt-4">
                  <Link href="/projects/2" className="text-primary-container text-[14px] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Lihat Detail <Icon icon="material-symbols:arrow-forward" className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>

             {/* Project 3 */}
             <div className="animate-stagger-item h-full">
               <div className="group cursor-pointer card-hover bg-white rounded-2xl p-4 border border-transparent h-full flex flex-col">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-ambient h-[300px]">
                  <Image width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Rumah Ibadat Vihara" src="/assets/img/proyek/13.jpeg" />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">Religius</span>
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">PBG</span>
                </div>
                <h3 className="text-[20px] font-normal text-primary mb-2 line-clamp-1">Rumah Ibadat Vihara</h3>
                <p className="text-[14px] text-on-surface-variant leading-[1.6]">Perencanaan Rumah Ibadat Vihara berlokasi di Jl. Cibadak, Bandung.</p>
                <div className="mt-auto pt-4">
                  <Link href="/projects/3" className="text-primary-container text-[14px] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Lihat Detail <Icon icon="material-symbols:arrow-forward" className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>

             {/* Project 4 */}
             <div className="animate-stagger-item h-full">
               <div className="group cursor-pointer card-hover bg-white rounded-2xl p-4 border border-transparent h-full flex flex-col">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-ambient h-[300px]">
                  <Image width={600} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Toko dan Restoran Braga" src="/assets/img/proyek/14.jpeg" />
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">Komersial</span>
                  <span className="bg-tertiary-fixed/50 text-primary-container text-[12px] font-medium px-3 py-1 rounded-full">Cagar Budaya</span>
                </div>
                <h3 className="text-[20px] font-normal text-primary mb-2 line-clamp-1">Toko dan Restoran</h3>
                <p className="text-[14px] text-on-surface-variant leading-[1.6]">Perencanaan arsitektur dan kajian cagar budaya berlokasi di Jl. Braga No.55.</p>
                <div className="mt-auto pt-4">
                  <Link href="/projects/4" className="text-primary-container text-[14px] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Lihat Detail <Icon icon="material-symbols:arrow-forward" className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="kontak" className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-[120px]">
        <div className="animate-fade-up bg-white rounded-3xl p-8 md:p-16 shadow-ambient border border-surface-container flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-[48px] font-normal text-primary mb-6 leading-[1.2]">Siap Membangun dengan Percaya Diri?</h2>
            <p className="text-[18px] text-on-surface-variant mb-8 leading-[1.6]">
                Hubungi konsultan kami untuk mendiskusikan kebutuhan PBG atau proyek konstruksi Anda selanjutnya.
            </p>
            <div className="space-y-4">
              <a href="https://maps.google.com/?q=Jl.+Kencanawangi+Utara+II+No.20+Cijaura+Kec.+Buah+Batu+Kota+Bandung" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer">
                <Icon icon="material-symbols:location-on" className="text-primary-container text-2xl group-hover:scale-110 transition-transform" />
                <span className="text-[16px] leading-[1.6]">Jl. Kencanawangi Utara II No.20 Cijaura Kec. Buah Batu Kota Bandung</span>
              </a>
              <a href="mailto:bandungjasapbg@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer">
                <Icon icon="material-symbols:mail" className="text-primary-container group-hover:scale-110 transition-transform" />
                <span className="text-[16px] leading-[1.6]">bandungjasapbg@gmail.com</span>
              </a>
              <a href="https://wa.me/6282312567209" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer">
                <Icon icon="material-symbols:call" className="text-primary-container group-hover:scale-110 transition-transform" />
                <span className="text-[16px] leading-[1.6]">+62 823-1256-7209</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-surface-container">
              <h4 className="text-[14px] font-normal text-on-surface-variant uppercase tracking-[0.05em] mb-4">Ikuti Kami di Media Sosial</h4>
              <div className="flex gap-4 mb-4">
                <a href="https://www.instagram.com/jasapbg_bandung" target="_blank" rel="noopener noreferrer" className="social-hover w-10 h-10 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-primary-container" aria-label="Instagram"><Icon icon="mdi:instagram" className="text-[20px]" /></a>
                <a href="https://www.facebook.com/share/17yzMc3sLt/" target="_blank" rel="noopener noreferrer" className="social-hover w-10 h-10 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-primary-container" aria-label="Facebook"><Icon icon="mdi:facebook" className="text-[20px]" /></a>
              </div>
              <p className="text-[16px] text-on-surface-variant leading-[1.6]">Dapatkan inspirasi arsitektur dan pembaruan proyek terbaru kami setiap hari.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-[32px] font-normal text-primary mb-6 tracking-tight">Kunjungi kantor kami :</h3>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-ambient border border-surface-container">
              <iframe 
                src="https://maps.google.com/maps?q=Jl.%20Kencanawangi%20Utara%20II%20No.20,%20Cijaura,%20Kec.%20Buahbatu,%20Kota%20Bandung&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
