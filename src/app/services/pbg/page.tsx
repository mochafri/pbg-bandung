import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jasa Pengurusan PBG Bandung',
  description: 'Solusi terpadu untuk Persetujuan Bangunan Gedung (PBG) di wilayah Bandung Raya. Kami memastikan proses legalitas bangunan Anda berjalan efisien.',
};

export default function PBGService() {
  return (
    <>
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] pt-12 pb-16 md:pb-[120px] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tertiary-fixed rounded-full">
              <Icon icon="material-symbols:verified-user" className="text-primary text-sm" />
              <span className="text-primary text-[14px] leading-none tracking-[0.05em] font-semibold">Layanan Profesional Bandung</span>
            </div>
            <h1 className="text-[32px] md:text-[64px] leading-[1.2] tracking-tight font-normal text-primary">
              Jasa Pengurusan PBG <span className="bg-gradient-to-r from-primary-container to-secondary text-transparent bg-clip-text">Bandung</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant max-w-xl">
              Solusi terpadu untuk Persetujuan Bangunan Gedung (PBG) di wilayah Bandung Raya. Kami memastikan proses legalitas bangunan Anda berjalan efisien, akurat, dan sesuai dengan regulasi terbaru SIMBG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://wa.me/6282312567209" target="_blank" rel="noopener noreferrer" className="bg-primary-container text-white text-[14px] leading-none tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:bg-primary transition-all duration-300 transform active:scale-95 text-center inline-block">
                Konsultasi Gratis
              </a>
              <a href="#proses" className="border-2 border-primary-container text-primary-container text-[14px] leading-none tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:bg-primary-container hover:text-white transition-all duration-300 transform active:scale-95 text-center inline-block">
                Pelajari Prosesnya
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
            <div className="absolute inset-0 bg-primary-fixed blur-3xl opacity-30 rounded-full"></div>
            <Image priority width={1000} height={600} alt="Arsitektur Modern Bandung" className="w-full h-[600px] object-cover rounded-xl shadow-ambient relative z-10" src="/assets/img/services/pbg-hero.webp" />
            <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-ambient z-20 hidden md:flex items-center gap-4">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center">
                <Icon icon="material-symbols:task-alt" className="text-primary" />
              </div>
              <div>
                <p className="text-[14px] leading-none tracking-[0.05em] font-semibold text-primary">Status PBG</p>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">Disetujui SIMBG</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proses" className="bg-surface-container-lowest py-16 md:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-[32px] md:text-[48px] leading-[1.2] tracking-tight font-normal text-primary mb-6">Alur Pengurusan PBG</h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant">
                Kami menyederhanakan birokrasi yang kompleks menjadi proses 4 langkah yang transparan dan dapat dipantau.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {step: '01', title: 'Konsultasi Awal', desc: 'Analisis dokumen legalitas tanah dan evaluasi kelayakan fungsi bangunan sesuai KRK Kota Bandung.', icon: 'material-symbols:forum'},
                {step: '02', title: 'Gambar Teknis', desc: 'Penyusunan dokumen teknis arsitektur, struktur, dan MEP oleh tenaga ahli bersertifikat (SKA).', icon: 'material-symbols:architecture'},
                {step: '03', title: 'Submit SIMBG', desc: 'Pengunggahan dokumen ke sistem SIMBG dan pendampingan sidang TPA/TPT Dinas terkait.', icon: 'material-symbols:upload-file'},
                {step: '04', title: 'Penerbitan PBG', desc: 'Pembayaran retribusi daerah dan penyerahan dokumen final Persetujuan Bangunan Gedung (PBG).', icon: 'material-symbols:gavel', active: true}
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-ambient hover:shadow-ambient-hover transition-shadow duration-300 border border-surface-variant hover:border-tertiary-fixed relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon icon={item.icon} className="text-[80px] text-primary" />
                  </div>
                  <div className={`w-16 h-16 ${item.active ? 'bg-primary-container text-white' : 'bg-primary-fixed text-primary'} rounded-xl flex items-center justify-center mb-6`}>
                    <span className="text-[24px] md:text-[32px] leading-[1.3] font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-[16px] md:text-[18px] leading-[1.6] font-normal text-primary mb-3">{item.title}</h3>
                  <p className="text-[16px] leading-[1.6] text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-16 md:py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 flex flex-col justify-center">
              <h2 className="text-[32px] md:text-[48px] leading-[1.2] tracking-tight font-normal text-primary mb-6">Mengapa Memilih Kami?</h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant mb-8">
                Keamanan investasi properti Anda bergantung pada legalitas yang kuat. Kami hadir untuk memberikan kepastian hukum dengan proses yang transparan.
              </p>
              <ul className="space-y-4">
                {["100% Sesuai Regulasi Pemkot Bandung", "Tim Ahli Bersertifikat (SKA/SKK)", "Garansi Dokumen Disetujui"].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon icon="material-symbols:check-circle" className="text-secondary mt-1" />
                    <span className="text-[16px] leading-[1.6] text-on-surface">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-0">
              <div className="bg-primary-container p-8 rounded-xl flex flex-col justify-between h-full min-h-[300px]">
                <Icon icon="material-symbols:speed" className="text-4xl text-secondary-fixed mb-4" />
                <div>
                  <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-white mb-3">Efisiensi Waktu</h3>
                  <p className="text-[16px] leading-[1.6] text-primary-fixed-dim">
                    Pengalaman kami berinteraksi dengan birokrasi lokal memastikan proses review dan revisi dokumen berjalan jauh lebih cepat dari standar.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-ambient border border-surface-variant flex flex-col justify-between h-full min-h-[300px]">
                <Icon icon="material-symbols:shield-locked" className="text-4xl text-primary mb-4" />
                <div>
                  <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-primary mb-3">Keamanan Legal</h3>
                  <p className="text-[16px] leading-[1.6] text-on-surface-variant">
                    Menghindari risiko pembongkaran atau denda di masa depan dengan memastikan setiap meter persegi bangunan tercatat resmi.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 bg-tertiary-fixed/30 p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 border border-tertiary-fixed">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square bg-white rounded-full flex items-center justify-center p-6 shadow-sm max-w-[200px] mx-auto">
                    <Icon icon="material-symbols:support-agent" className="text-[80px] text-tertiary" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-primary mb-3">Pendampingan Penuh</h3>
                  <p className="text-[16px] leading-[1.6] text-on-surface-variant">
                    Kami tidak hanya menyiapkan gambar, tapi bertindak sebagai representasi Anda dalam setiap sidang TPA/TPT hingga SK PBG terbit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface-container-low py-16 md:py-[120px]" id='faq'>
          <div className="max-w-3xl mx-auto px-5 md:px-[80px]">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal text-primary mb-4">FAQ PBG Bandung</h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant">Pertanyaan umum seputar pengurusan Persetujuan Bangunan Gedung</p>
            </div>
            <div className="space-y-4">
              {[
                {q: "Berapa lama estimasi waktu pengurusan PBG?", a: "Waktu pengurusan sangat bergantung pada kompleksitas bangunan dan kelengkapan dokumen awal. Rata-rata memakan waktu 1 hingga 3 bulan setelah dokumen diunggah lengkap ke SIMBG."},
                {q: "Apakah bangunan lama (sudah berdiri) bisa mengurus PBG?", a: "Ya, bangunan yang sudah eksis dan belum memiliki IMB/PBG dapat mengajukan permohonan PBG (sering disebut PBG Pemutihan atau SLF untuk bangunan lama), dengan menyertakan dokumen as-built drawing dan kajian teknis keandalan bangunan."},
                {q: "Dokumen apa saja yang disiapkan klien?", a: "Klien umumnya perlu menyiapkan dokumen legalitas lahan (Sertifikat Hak Milik/Guna Bangunan, KTP, NPWP) dan KRK (Keterangan Rencana Kota) jika sudah ada. Tim kami akan menyiapkan seluruh dokumen teknis (Arsitektur, Struktur, MEP)."}
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl shadow-ambient border border-transparent hover:border-tertiary-fixed transition-colors">
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-[16px] md:text-[18px] leading-[1.6] font-normal text-primary">{faq.q}</h3>
                    <Icon icon="material-symbols:expand-more" className="text-primary transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-[16px] leading-[1.6] text-on-surface-variant">
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-16 md:py-[120px]">
          <div className="bg-primary rounded-2xl p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary-container rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal text-white mb-6">Siap Mengurus Legalitas Bangunan Anda?</h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-primary-fixed-dim mb-0">
                Jangan biarkan proyek tertunda karena kendala administrasi. Hubungi ahli kami hari ini untuk konsultasi awal mengenai kebutuhan PBG Anda di Bandung.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <a href="https://wa.me/6282312567209" target="_blank" rel="noopener noreferrer" className="bg-secondary-fixed text-primary font-semibold text-[14px] leading-none tracking-[0.05em] px-10 py-5 rounded-lg hover:bg-white transition-all duration-300 transform active:scale-95 shadow-lg flex items-center gap-3 inline-flex">
                <Icon icon="material-symbols:call" />
                Hubungi Ahli Kami
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
