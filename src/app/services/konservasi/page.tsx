import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Konservasi & Restorasi Cagar Budaya',
  description: 'Menjaga warisan masa lalu untuk masa depan. Kami menyeimbangkan pelestarian nilai historis dengan kebutuhan fungsional modern.',
};

export default function KonservasiService() {
  return (
    <>
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-16 md:py-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-6">
              <div className="inline-block bg-tertiary-fixed text-primary px-4 py-1.5 rounded-full text-[12px] leading-[1.4] font-semibold tracking-wider">
                LAYANAN SPESIALIS
              </div>
              <h1 className="text-[32px] md:text-[64px] leading-[1.2] md:leading-[1.1] tracking-tight font-normal text-primary">
                Konservasi & Restorasi Cagar Budaya.
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant max-w-lg">
                Menjaga warisan masa lalu untuk masa depan. Kami menyeimbangkan pelestarian nilai historis dengan kebutuhan fungsional modern, memastikan bangunan cagar budaya Anda tetap berdiri kokoh dan relevan.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/6282312567209" target="_blank" className="bg-primary text-white text-[14px] leading-none tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:bg-primary-container transition-colors text-center inline-block">
                  Konsultasi Proyek
                </a>
                <Link href="/projects" className="border-2 border-primary text-primary text-[14px] leading-none tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:bg-surface-container transition-colors text-center inline-block">
                  Lihat Metodologi
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 mt-12 md:mt-0 relative h-[500px] rounded-xl overflow-hidden shadow-ambient">
              <Image priority fill className="object-cover" alt="Restoration process" src="/assets/img/services/konservasi-hero.webp" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* Specialized Expertise Bento Grid */}
        <section className="bg-surface-container-low py-16 md:py-[120px]">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
            <div className="mb-16">
              <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal text-primary mb-4">Keahlian Khusus</h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl">
                Pendekatan teknis yang presisi untuk memenuhi standar ketat pelestarian cagar budaya, memastikan integritas struktural tanpa mengorbankan nilai sejarah.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-xl shadow-ambient hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-6 text-primary">
                  <Icon icon="material-symbols:assignment-turned-in" />
                </div>
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-primary mb-3">Rekomendasi TACB</h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">
                  Pendampingan komprehensif dalam penyusunan kajian dan permohonan rekomendasi Tim Ahli Cagar Budaya (TACB), memastikan seluruh intervensi desain memenuhi regulasi pelestarian.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-8 rounded-xl shadow-ambient hover:-translate-y-1 transition-transform duration-300 md:col-span-2">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-6 text-primary">
                  <Icon icon="material-symbols:architecture" />
                </div>
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-primary mb-3">Penguatan Struktural Heritage</h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant max-w-xl">
                  Aplikasi teknik rekayasa modern yang non-intrusif (seperti retrofitting seismik tersembunyi) untuk memperkuat bangunan bersejarah tanpa merusak fasad atau elemen interior yang bernilai tinggi.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-primary-container p-8 rounded-xl shadow-ambient hover:-translate-y-1 transition-transform duration-300 md:col-span-2">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-white">
                  <Icon icon="material-symbols:texture" />
                </div>
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-white mb-3">Autentikasi Material</h3>
                <p className="text-[16px] leading-[1.6] text-primary-fixed-dim max-w-xl">
                  Sourcing dan replikasi material historis (tegel kunci, plesteran kapur khusus, profil kayu jati lawas) yang identik dengan spesifikasi bangunan asli, menjaga keaslian tekstur dan warna.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-white p-8 rounded-xl shadow-ambient hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center mb-6 text-primary">
                  <Icon icon="material-symbols:history-edu" />
                </div>
                <h3 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-primary mb-3">Dokumentasi As-Built</h3>
                <p className="text-[16px] leading-[1.6] text-on-surface-variant">
                  Pemindaian laser 3D dan fotogrametri untuk menghasilkan dokumentasi presisi tinggi sebelum dan sesudah proses restorasi dilakukan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Split Section */}
        <section className="max-w-[1280px] mx-auto px-5 md:px-[80px] py-16 md:py-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[600px] rounded-xl overflow-hidden shadow-ambient">
              <Image fill className="object-cover" alt="Methodology" src="/assets/img/services/konservasi-method.webp" />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal text-primary mb-4">Metodologi Restorasi</h2>
                <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant">
                  Proses konservasi kami sangat terstruktur, meminimalkan intervensi dan memaksimalkan preservasi.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {n: 1, title: 'Investigasi & Analisis Historis', desc: 'Penelitian arsip mendalam dan pengujian material di situs untuk memahami kondisi eksisting.'},
                  {n: 2, title: 'Desain Konservasi (Adaptasi)', desc: 'Merancang solusi yang mengintegrasikan utilitas modern (MEP) tanpa mengganggu estetika bangunan asli.'},
                  {n: 3, title: 'Eksekusi Presisi', desc: 'Pengerjaan oleh tenaga ahli bersertifikat menggunakan teknik tradisional yang dipadukan dengan manajemen proyek modern.'}
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-primary text-[14px] font-semibold leading-none tracking-[0.05em]">{item.n}</div>
                    <div>
                      <h4 className="text-[20px] font-normal leading-[1.3] text-primary mb-2">{item.title}</h4>
                      <p className="text-[16px] leading-[1.6] text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Preserve / Bandung Identity */}
        <section className="bg-primary py-16 md:py-[120px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
          <div className="max-w-[1280px] mx-auto px-5 md:px-[80px] relative z-10 text-center">
            <h2 className="text-[32px] md:text-[48px] leading-[1.2] font-normal text-white mb-6 max-w-3xl mx-auto">
              Mengapa Pelestarian Itu Penting?
            </h2>
            <p className="text-[16px] md:text-[18px] leading-[1.6] text-primary-fixed-dim max-w-2xl mx-auto mb-12">
              Arsitektur bersejarah adalah jiwa kota. Di Bandung, bangunan-bangunan kolonial dan art deco bukan sekadar struktur, melainkan identitas kultural yang memberikan nilai tambah komersial dan estetika yang tak tergantikan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
              {[
                {icon: 'material-symbols:account-balance', title: 'Nilai Ekonomi Premium', desc: 'Properti cagar budaya yang direstorasi dengan baik memiliki daya tarik komersial tinggi untuk hospitality, F&B, dan ruang ritel eksklusif.'},
                {icon: 'material-symbols:park', title: 'Keberlanjutan', desc: 'Mempertahankan bangunan yang ada merupakan tindakan ramah lingkungan yang signifikan, mengurangi emisi karbon dari konstruksi baru.'},
                {icon: 'material-symbols:local-activity', title: 'Identitas Bandung', desc: "Turut serta merawat 'Parijs van Java', menjaga karakter unik kota yang menjadi daya tarik utama pariwisata dan kebanggaan lokal."}
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <Icon icon={item.icon} className="text-secondary-fixed mb-4 text-[32px] block" />
                  <h4 className="text-[20px] md:text-[24px] leading-[1.3] font-normal text-white mb-2">{item.title}</h4>
                  <p className="text-[16px] leading-[1.6] text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-[120px] bg-surface">
          <div className="max-w-[1280px] mx-auto px-5 md:px-[80px]">
            <div className="bg-surface-container-low rounded-2xl p-12 md:p-20 text-center shadow-ambient border border-surface-variant">
              <h2 className="text-[32px] md:text-[64px] leading-[1.2] md:leading-[1.1] font-normal text-primary mb-6">Mulai Proyek Konservasi Anda</h2>
              <p className="text-[16px] md:text-[18px] leading-[1.6] text-on-surface-variant max-w-2xl mx-auto mb-10">
                Diskusikan visi Anda dengan tim ahli pelestarian kami. Kami siap memberikan panduan awal mengenai regulasi TACB dan potensi restorasi bangunan Anda.
              </p>
              <a href="https://wa.me/6282312567209" target="_blank" className="bg-primary text-white text-[14px] leading-none tracking-[0.05em] font-semibold px-10 py-4 rounded-lg hover:bg-primary-container transition-all hover:scale-[0.98] shadow-lg shadow-primary/20 inline-block">
                Hubungi Konsultan Ahli
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
