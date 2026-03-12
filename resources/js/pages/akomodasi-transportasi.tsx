import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Mountain } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

export default function AkomodasiTransportasi({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    return (
        <>
            <Head title="Akomodasi & Transportasi — Desa Manud Jaya">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar canRegister={canRegister} />

                {/* Hero */}
                <section className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20 dark:from-blue-500/10 dark:to-emerald-500/10" />
                    <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
                        <div className="mx-auto max-w-2xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Akomodasi &{' '}
                                <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                                    Transportasi
                                </span>
                            </h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Panduan lengkap penginapan dan perjalanan menuju
                                Desa Manud Jaya.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Article */}
                <article className="mx-auto max-w-3xl px-6 py-16">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* Penginapan */}
                        <h2 className="text-2xl font-bold">Penginapan</h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Desa Manud Jaya menyediakan berbagai pilihan
                            akomodasi yang cocok untuk semua kalangan wisatawan.
                            Mulai dari homestay sederhana hingga villa dengan
                            fasilitas lengkap, semua dikelola langsung oleh
                            warga desa dengan keramahan khas pedesaan.
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            Homestay Warga
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            Bagi yang ingin merasakan kehidupan desa secara
                            langsung, homestay warga adalah pilihan terbaik.
                            Tersedia beberapa rumah warga yang telah disiapkan
                            untuk menerima tamu dengan kamar bersih, air panas,
                            dan sarapan tradisional. Harga mulai dari{' '}
                            <strong>Rp 150.000</strong> hingga{' '}
                            <strong>Rp 250.000 per malam</strong>, sudah
                            termasuk sarapan. Fasilitas umum yang tersedia
                            meliputi Wi-Fi, parkir, dan kamar mandi dalam.
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            Villa & Penginapan Keluarga
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            Untuk keluarga atau rombongan yang menginginkan
                            privasi lebih, tersedia beberapa villa dengan
                            pemandangan pegunungan. Villa dilengkapi dapur,
                            taman, area BBQ, dan ruang keluarga. Harga berkisar
                            antara{' '}
                            <strong>Rp 400.000 — Rp 600.000 per malam</strong>{' '}
                            tergantung ukuran dan fasilitas. Sebaiknya pesan
                            minimal 3 hari sebelum kedatangan, terutama pada
                            musim liburan.
                        </p>

                        {/* Transportasi */}
                        <h2 className="mt-16 text-2xl font-bold">
                            Transportasi Menuju Desa
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Desa Manud Jaya dapat dijangkau dari kota terdekat
                            melalui beberapa moda transportasi. Jarak tempuh
                            dari pusat kota sekitar 60 km dengan waktu
                            perjalanan 2—3 jam tergantung jalur yang dipilih.
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            Bus Umum
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            Bus umum tersedia dari Terminal Kota menuju Terminal
                            Desa Manud Jaya setiap hari dengan jadwal
                            keberangkatan pukul 06.00, 10.00, dan 14.00 WIB.
                            Perjalanan memakan waktu sekitar 3 jam dengan biaya{' '}
                            <strong>Rp 35.000 per orang</strong>. Bus akan
                            melewati jalur pegunungan dengan pemandangan alam
                            yang indah sepanjang perjalanan.
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            Kereta Api + Angkutan Pedesaan
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            Alternatif lain adalah naik kereta api dari Stasiun
                            Kota menuju Stasiun Terdekat, kemudian melanjutkan
                            perjalanan dengan angkutan pedesaan (angkot) menuju
                            Desa Manud Jaya. Total waktu perjalanan sekitar 2,5
                            jam dengan biaya{' '}
                            <strong>
                                Rp 50.000 per orang (kereta + angkot)
                            </strong>
                            . Angkot dari stasiun beroperasi mulai pukul 06.00
                            hingga 18.00 WIB.
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            Kendaraan Pribadi / Rental
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            Akses jalan menuju desa sudah beraspal dengan baik.
                            Dari pusat kota, ambil Jalan Raya Pegunungan ke arah
                            selatan, lalu ikuti papan petunjuk menuju Desa Manud
                            Jaya. Perjalanan memakan waktu sekitar 2 jam.
                            Tersedia area parkir luas di pusat desa. Bagi yang
                            tidak membawa kendaraan, rental mobil tersedia di
                            kota dengan harga mulai{' '}
                            <strong>Rp 300.000 per hari</strong>. Pastikan
                            kendaraan dalam kondisi baik karena sebagian jalan
                            berupa tanjakan.
                        </p>

                        {/* Tips */}
                        <h2 className="mt-16 text-2xl font-bold">
                            Tips Perjalanan
                        </h2>
                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            <li>
                                Sebaiknya pesan penginapan minimal 3 hari
                                sebelum kedatangan, terutama saat musim liburan.
                            </li>
                            <li>
                                Bawa jaket hangat karena suhu di desa bisa turun
                                hingga 12°C di malam hari.
                            </li>
                            <li>
                                Hubungi penginapan untuk layanan penjemputan di
                                terminal atau stasiun terdekat.
                            </li>
                            <li>
                                Jika menggunakan kendaraan pribadi, isi bensin
                                penuh sebelum memasuki kawasan pegunungan karena
                                SPBU terbatas.
                            </li>
                            <li>
                                Waktu terbaik berkunjung adalah bulan April
                                hingga September (musim kemarau) untuk cuaca
                                yang cerah dan jalur pendakian yang aman.
                            </li>
                        </ul>
                    </div>
                </article>

                {/* Back link */}
                <section className="mx-auto max-w-3xl px-6 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Beranda
                    </Link>
                </section>

                {/* Footer */}
                <footer className="border-t border-border">
                    <div className="mx-auto max-w-7xl px-6 py-12">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="flex items-center gap-2 text-lg font-bold">
                                <Mountain className="h-5 w-5 text-primary" />
                                <span>Desa Manud Jaya</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                &copy; 2026 Desa Manud Jaya. Hak cipta
                                dilindungi.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
