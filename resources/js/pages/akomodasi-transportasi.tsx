import { Head } from '@inertiajs/react';
import {
    BedDouble,
    Bus,
    Car,
    Clock,
    Home,
    MapPin,
    Mountain,
    Phone,
    Star,
    Train,
} from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';

const accommodations = [
    {
        name: 'Homestay Manud Jaya',
        type: 'Homestay',
        description:
            'Penginapan rumahan yang nyaman dengan suasana khas pedesaan. Dikelola langsung oleh warga desa dengan pelayanan ramah.',
        price: 'Rp 250.000 / malam',
        rating: 4.8,
        amenities: ['Wi-Fi', 'Sarapan', 'Air Panas', 'Parkir'],
        icon: Home,
        gradient: 'from-emerald-400 to-cyan-500',
    },
    {
        name: 'Villa Puncak Embun',
        type: 'Villa',
        description:
            'Villa dengan pemandangan pegunungan yang menakjubkan. Cocok untuk keluarga atau rombongan kecil yang menginginkan privasi.',
        price: 'Rp 500.000 / malam',
        rating: 4.9,
        amenities: ['Wi-Fi', 'Dapur', 'Taman', 'Parkir', 'BBQ Area'],
        icon: Mountain,
        gradient: 'from-blue-400 to-indigo-500',
    },
    {
        name: 'Penginapan Cahaya',
        type: 'Losmen',
        description:
            'Penginapan sederhana namun bersih dan nyaman. Lokasi strategis dekat dengan berbagai destinasi wisata desa.',
        price: 'Rp 150.000 / malam',
        rating: 4.5,
        amenities: ['Parkir', 'Kamar Mandi Dalam', 'Air Panas'],
        icon: BedDouble,
        gradient: 'from-amber-400 to-orange-500',
    },
];

const transportOptions = [
    {
        name: 'Dari Kota via Bus',
        icon: Bus,
        duration: '± 3 jam',
        description:
            'Bus umum tersedia dari Terminal Kota menuju Terminal Desa Manud Jaya setiap hari. Berangkat pukul 06.00, 10.00, dan 14.00 WIB.',
        price: 'Rp 35.000 / orang',
        route: 'Terminal Kota → Terminal Desa Manud Jaya',
    },
    {
        name: 'Dari Kota via Kereta + Angkot',
        icon: Train,
        duration: '± 2.5 jam',
        description:
            'Naik kereta api ke Stasiun Terdekat, lalu lanjutkan perjalanan dengan angkutan pedesaan menuju Desa Manud Jaya.',
        price: 'Rp 50.000 / orang (kereta + angkot)',
        route: 'Stasiun Kota → Stasiun Terdekat → Desa Manud Jaya',
    },
    {
        name: 'Kendaraan Pribadi / Rental',
        icon: Car,
        duration: '± 2 jam',
        description:
            'Akses jalan menuju desa sudah beraspal dengan baik. Tersedia area parkir luas di pusat desa. Rental mobil tersedia di kota.',
        price: 'Rental mulai Rp 300.000 / hari',
        route: 'Jalan Raya Kota → Jl. Pegunungan → Desa Manud Jaya',
    },
];

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
                                Informasi lengkap tentang penginapan dan cara
                                menuju Desa Manud Jaya dari kota.
                            </p>
                        </div>
                    </div>
                </section>

                <main>
                    {/* Akomodasi */}
                    <section className="mx-auto max-w-7xl px-6 py-16">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Penginapan
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Berbagai pilihan akomodasi nyaman untuk menemani
                                liburan Anda di Desa Manud Jaya.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            {accommodations.map((acc) => (
                                <div
                                    key={acc.name}
                                    className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
                                >
                                    <div
                                        className={`flex h-40 items-center justify-center bg-gradient-to-br ${acc.gradient}`}
                                    >
                                        <acc.icon className="h-14 w-14 text-white/80" />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-semibold text-card-foreground">
                                                    {acc.name}
                                                </h3>
                                                <span className="text-xs text-muted-foreground">
                                                    {acc.type}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                                                <span className="text-sm font-medium">
                                                    {acc.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                            {acc.description}
                                        </p>
                                        <p className="mt-3 text-sm font-semibold text-primary">
                                            {acc.price}
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {acc.amenities.map((amenity) => (
                                                <span
                                                    key={amenity}
                                                    className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                                                >
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Transportasi */}
                    <section className="border-y border-border bg-muted/50">
                        <div className="mx-auto max-w-7xl px-6 py-16">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    Transportasi
                                </h2>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Cara menuju Desa Manud Jaya dari kota
                                    terdekat.
                                </p>
                            </div>
                            <div className="mt-12 space-y-6">
                                {transportOptions.map((opt) => (
                                    <div
                                        key={opt.name}
                                        className="rounded-xl border border-border bg-card p-6"
                                    >
                                        <div className="flex flex-col gap-6 md:flex-row md:items-start">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                                <opt.icon className="h-7 w-7 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                    <h3 className="text-lg font-semibold">
                                                        {opt.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                        <Clock className="h-4 w-4" />
                                                        {opt.duration}
                                                    </div>
                                                </div>
                                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                    {opt.description}
                                                </p>
                                                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <MapPin className="h-4 w-4 text-primary" />
                                                        <span className="text-muted-foreground">
                                                            {opt.route}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                                                        <Phone className="h-4 w-4" />
                                                        {opt.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Tips */}
                    <section className="mx-auto max-w-7xl px-6 py-16">
                        <div className="rounded-2xl border border-border bg-card p-8">
                            <h3 className="text-xl font-bold">
                                Tips Perjalanan
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    'Sebaiknya pesan penginapan minimal 3 hari sebelum kedatangan, terutama saat musim liburan.',
                                    'Jika menggunakan kendaraan pribadi, pastikan kendaraan dalam kondisi baik karena medan menanjak.',
                                    'Bawa jaket hangat karena suhu di desa bisa turun hingga 12°C di malam hari.',
                                    'Hubungi penginapan untuk penjemputan di terminal atau stasiun terdekat.',
                                ].map((tip) => (
                                    <li
                                        key={tip}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span className="text-sm text-muted-foreground">
                                            {tip}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main>

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
