import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Mail, Mountain, Phone } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';
import { useLanguage } from '@/contexts/language-context';

export default function Kontak() {
    const { t } = useLanguage();

    return (
        <>
            <Head title="Kontak Kami — Desa Manud Jaya">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-background text-foreground">
                <WisataNavbar />

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/kontak_hero.png"
                        alt={t.kontak.title}
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                {t.kontak.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {t.kontak.heroDesc}
                            </p>
                        </div>
                    </div>
                </section>

                <main>
                    <section className="mx-auto max-w-7xl px-6 py-16">
                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold">
                                    {t.kontak.contactInfoTitle}
                                </h2>
                                <p className="mt-4 text-muted-foreground">
                                    {t.kontak.contactInfoDesc}
                                </p>

                                <div className="mt-8 space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                {t.kontak.email}
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                humasManudJaya@gmail.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">
                                                {t.kontak.phone}
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                +62 812 – 1122 3344 (Bapak
                                                Efendi)
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                +62 812 – 1011 1213 (Bapak
                                                Efendi)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div>
                                <h2 className="text-2xl font-bold">
                                    {t.kontak.locationTitle}
                                </h2>
                                <p className="mt-4 text-muted-foreground">
                                    {t.kontak.locationDesc}
                                </p>
                                <img
                                    src="/images/kontak_peta.png"
                                    alt="Peta Lokasi Desa Manud Jaya"
                                    className="mt-8 aspect-[4/3] w-full rounded-xl object-cover"
                                />

                                {/* Directions */}
                                <div className="mt-6 rounded-xl border border-border bg-card p-6">
                                    <h3 className="font-semibold">
                                        {t.kontak.directionsTitle}
                                    </h3>
                                    <ul className="mt-3 space-y-2">
                                        {t.kontak.directions.map((step, i) => (
                                            <li
                                                key={step}
                                                className="flex items-start gap-3 text-sm text-muted-foreground"
                                            >
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                                                    {i + 1}
                                                </span>
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Back link */}
                <section className="mx-auto max-w-7xl px-6 pb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        {t.kontak.backToHome}
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
                                {t.kontak.copyright}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
