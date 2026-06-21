import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontraktor Bangunan Syariah',
  description: 'Membangun hunian impian Anda dengan prinsip keadilan, transparansi penuh, dan tanpa biaya tersembunyi. Kualitas material premium dengan akad yang jelas.',
};

export default function SyariahService() {
  return (
    <>
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] pt-12 pb-[120px]">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-8">
              <span className="bg-tertiary-fixed text-primary px-4 py-2 rounded-full font-semibold text-[14px] tracking-[0.05em] leading-none inline-block">Layanan Unggulan</span>
              <h1 className="text-[40px] md:text-[64px] font-normal text-primary leading-[1.2] tracking-tight">
                Kontraktor Bangunan Syariah
              </h1>
              <p className="text-[18px] leading-[1.6] text-on-surface-variant max-w-lg">
                Membangun hunian impian Anda dengan prinsip keadilan, transparansi penuh, dan tanpa biaya tersembunyi. Kualitas material premium dengan akad yang jelas.
              </p>  
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/6282312567209" target="_blank" className="bg-primary text-white text-[14px] leading-none tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98] text-center inline-block">
                  Konsultasi Gratis
                </a>
                <Link href="/projects" className="border-2 border-primary text-primary text-[14px] leading-none tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:bg-surface-variant transition-all active:scale-[0.98] text-center inline-block">
                  Lihat Portofolio
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 mt-12 md:mt-0">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-ambient">
                <Image priority fill className="object-cover" alt="Kontraktor Syariah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9rmbAAJRqrM2gdi91lpe9Q8gpk_-uIK439rrL-L8kdzqyVj9ZA2JLEdNVXBjSvmvQeN6nCbNeiIgWJC-UCiV-e9MHfce3dFIe39Hf4J2Wib1ZiX0qMBw6I_tGGvxIn7efnZbBN2Xq28pDUoZZH3dj-FU9G8dKPZpQ5SHIrmNEhPVXxMdLBVrkRPLZBvOLLUonA3MmfHmSqPFp-63-M9zp0-vN3LdeRbI3SUEUkuov0Ef6h-Hv1ee5DUbWCCy82kqOrffz3-qNlT9d" />
              </div>
            </div>
          </div>
        </section>

        {/* Syariah Principles Section */}
        <section className="bg-primary text-white py-[120px]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
            <div className="max-w-2xl mb-16">
              <h2 className="text-[48px] leading-[1.2] font-normal mb-6">Prinsip Syariah Kami</h2>
              <p className="text-[18px] leading-[1.6] text-white/80">
                Kami mengutamakan keberkahan dalam setiap pembangunan dengan menerapkan nilai-nilai syariat Islam secara kaffah.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {icon: 'material-symbols:handshake', title: 'Akad Jelas & Transparan', desc: 'Kesepakatan awal yang tertulis detail mengenai spesifikasi material, waktu pengerjaan, dan total biaya tanpa ada tambahan sepihak di kemudian hari.'},
                {icon: 'material-symbols:block', title: 'Tanpa Riba & Denda', desc: 'Sistem pembayaran yang adil berdasarkan progres pekerjaan. Tidak ada sistem bunga keterlambatan atau denda yang memberatkan klien.'},
                {icon: 'material-symbols:diversity-3', title: 'Pekerja Sejahtera', desc: 'Upah pekerja dibayarkan tepat waktu sesuai kesepakatan sebelum keringat mereka mengering, menjamin kualitas kerja yang optimal dan penuh berkah.'}
              ].map((p, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Icon icon={p.icon} className="text-[40px] text-secondary-fixed mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }} />
                  <h3 className="text-[32px] leading-[1.3] font-normal mb-4">{p.title}</h3>
                  <p className="text-[16px] leading-[1.6] text-white/80">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Scope Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-[120px]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[48px] leading-[1.2] font-normal text-primary mb-6">Ruang Lingkup Layanan</h2>
            <p className="text-[18px] leading-[1.6] text-on-surface-variant">
              Solusi terpadu untuk kebutuhan konstruksi Anda, dikelola oleh tim profesional berpengalaman.
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            {[
              {icon: 'material-symbols:foundation', title: 'Bangun Baru', desc: 'Pembangunan dari nol dengan perencanaan struktur yang matang dan desain yang disesuaikan dengan kebutuhan serta anggaran Anda.'},
              {icon: 'material-symbols:architecture', title: 'Renovasi', desc: 'Peremajaan bangunan lama, penambahan ruang, atau perbaikan struktural dengan efisiensi biaya maksimal.'},
              {icon: 'material-symbols:chair', title: 'Desain Interior', desc: 'Penataan ruang dalam yang fungsional dan estetis, memadukan kenyamanan modern dengan tata letak yang islami.'}
            ].map((svc, i) => (
              <div key={i} className="md:col-span-4 bg-white rounded-2xl p-8 shadow-ambient hover:shadow-ambient-hover transition-shadow border border-surface-variant">
                <Icon icon={svc.icon} className="text-[32px] text-primary mb-6 block" />
                <h3 className="text-[32px] leading-[1.3] font-normal text-primary mb-4">{svc.title}</h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant mb-6">
                  {svc.desc}
                </p>
                <Link className="text-primary text-[14px] leading-none tracking-[0.05em] font-semibold flex items-center gap-2 hover:text-secondary transition-colors" href="/projects">
                  Pelajari Lebih Lanjut <Icon icon="material-symbols:arrow-forward" className="text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] pb-[120px]">
          <div className="bg-tertiary-fixed rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.2] text-primary mb-6">
                Siap Membangun Hunian Penuh Berkah?
              </h2>
              <p className="text-[18px] leading-[1.6] text-primary-container mb-10">
                Jadwalkan konsultasi gratis dengan arsitek dan perencana biaya kami hari ini. Mari wujudkan rumah impian Anda dengan prinsip syariah.
              </p>
              <a href="https://wa.me/6282312567209" target="_blank" className="bg-primary text-white text-[18px] px-10 py-5 rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98] font-semibold shadow-lg shadow-primary/20 inline-block">
                Konsultasi Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
