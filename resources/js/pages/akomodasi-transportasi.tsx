import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Mountain } from 'lucide-react';

import WisataNavbar from '@/components/wisata-navbar';
import { useLanguage } from '@/contexts/language-context';

export default function AkomodasiTransportasi() {
    const { t } = useLanguage();

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
                <WisataNavbar />

                {/* Hero */}
                <section className="relative">
                    <img
                        src="/images/akomodasi_hero.png"
                        alt={t.akomodasi.title}
                        className="block w-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-2xl px-6 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                {t.akomodasi.title}
                            </h1>
                            <p className="mt-4 text-lg text-white/80">
                                {t.akomodasi.heroDesc}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Article */}
                <article className="mx-auto max-w-3xl px-6 py-16">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {/* Transportasi */}
                        <h2 className="mt-16 text-2xl font-bold">
                            {t.akomodasi.transportTitle}
                        </h2>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            {t.akomodasi.transportP1}
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            {t.akomodasi.transportDistance}
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            {t.akomodasi.travelTimeTitle}
                        </h3>
                        <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                            {t.akomodasi.travelTimes.map((time) => (
                                <li key={time}>{time}</li>
                            ))}
                        </ul>

                        <h3 className="mt-10 text-xl font-semibold">
                            {t.akomodasi.localTransportTitle}
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            <ol className="list-decimal pl-5">
                                <li>
                                    <h4>{t.akomodasi.ojekTitle}</h4>
                                    <ul className="mt-2 list-disc pl-5">
                                        <li>{t.akomodasi.ojekPIC}</li>
                                        <li>{t.akomodasi.ojekPhone}</li>
                                        <li>
                                            {t.akomodasi.ojekPriceLabel}
                                            <ul className="mt-2 list-disc pl-5">
                                                {t.akomodasi.ojekPrices.map((price) => (
                                                    <li key={price}>{price}</li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>{t.akomodasi.ojekVehicle}</li>
                                        <li>{t.akomodasi.ojekCapacity}</li>
                                        <li>{t.akomodasi.ojekNote}</li>
                                        <li>
                                            <ul className="mt-2 list-disc pl-5">
                                                {t.akomodasi.ojekEstLabel}
                                                {t.akomodasi.ojekEstimates.map((est) => (
                                                    <li key={est}>{est}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>{t.akomodasi.travelCarTitle}</h4>
                                    <ul className="mt-2 list-disc pl-5">
                                        <li>{t.akomodasi.travelCarPIC}</li>
                                        <li>{t.akomodasi.travelCarPhone}</li>
                                        <li>{t.akomodasi.travelCarPrice}</li>
                                        <li>{t.akomodasi.travelCarVehicle}</li>
                                        <li>{t.akomodasi.travelCarCapacity}</li>
                                        <li>
                                            {t.akomodasi.travelCarFacilitiesLabel}
                                            <ul className="mt-2 list-disc pl-5">
                                                {t.akomodasi.travelCarFacilities.map((f) => (
                                                    <li key={f}>{f}</li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>{t.akomodasi.travelCarEst}</li>
                                    </ul>
                                </li>

                                <li>
                                    {' '}
                                    {t.akomodasi.rentalTitle}
                                    <ul className="mt-2 list-disc pl-5">
                                        <li>{t.akomodasi.rentalPIC}</li>
                                        <li>{t.akomodasi.rentalPhone}</li>
                                        <li>{t.akomodasi.rentalPrice}</li>
                                        <li>{t.akomodasi.rentalHelm}</li>
                                        <li>{t.akomodasi.rentalVehicle}</li>
                                        <li>{t.akomodasi.rentalCapacity}</li>
                                        <li>{t.akomodasi.rentalFuel}</li>
                                        <li>{t.akomodasi.rentalEst}</li>
                                    </ul>
                                </li>
                            </ol>
                        </p>

                        <h3 className="mt-10 text-xl font-semibold">
                            {t.akomodasi.privateVehicleTitle}
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            {t.akomodasi.privateVehicleDesc}{' '}
                            <strong>{t.akomodasi.privateVehiclePrice}</strong>
                            {t.akomodasi.privateVehicleNote}
                        </p>
                        {/* Penginapan */}
                        <h2 className="text-2xl font-bold">
                            {t.akomodasi.accommodationTitle}{' '}
                        </h2>
                        <ol className="mt-3 list-decimal space-y-8 pl-5 text-muted-foreground">
                            <li>
                                <h4 className="font-semibold text-foreground">
                                    {t.akomodasi.homestayTitle}
                                </h4>
                                <ul className="mt-2 list-disc pl-5">
                                    <li>{t.akomodasi.homestayPIC}</li>
                                    <li>{t.akomodasi.homestayPhone}</li>
                                    <li>{t.akomodasi.homestayPrice}</li>
                                    <li>
                                        {t.akomodasi.homestayFacilitiesLabel}
                                        <ul className="mt-2 list-disc pl-5">
                                            {t.akomodasi.homestayFacilities.map((f) => (
                                                <li key={f}>{f}</li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>{t.akomodasi.homestayCapacity}</li>
                                </ul>
                            </li>
                            <li>
                                <h4 className="font-semibold text-foreground">
                                    {t.akomodasi.bukitTitle}
                                </h4>
                                <ul className="mt-2 list-disc pl-5">
                                    <li>{t.akomodasi.bukitPIC}</li>
                                    <li>{t.akomodasi.bukitPhone}</li>
                                    <li>{t.akomodasi.bukitPrice}</li>
                                    <li>
                                        {t.akomodasi.bukitFacilitiesLabel}
                                        <ul className="mt-2 list-disc pl-5">
                                            {t.akomodasi.bukitFacilities.map((f) => (
                                                <li key={f}>{f}</li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li>{t.akomodasi.bukitCapacity}</li>
                                </ul>
                            </li>
                        </ol>

                        <h3 className="mt-10 text-xl font-semibold">
                            {t.akomodasi.basecampTitle}
                        </h3>
                        <p className="mt-3 leading-relaxed text-muted-foreground">
                            {t.akomodasi.basecampDesc}
                        </p>
                        <ul className="mt-3 list-disc pl-5 text-muted-foreground">
                            <li>{t.akomodasi.basecampName}</li>
                            <li>{t.akomodasi.basecampPIC}</li>
                            <li>{t.akomodasi.basecampPhone}</li>
                            <li>{t.akomodasi.basecampPrice}</li>
                            <li>
                                {t.akomodasi.basecampFacilitiesLabel}
                                <ul className="mt-2 list-disc pl-5">
                                    {t.akomodasi.basecampFacilities.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                {t.akomodasi.basecampExtrasLabel}
                                <ul className="mt-2 list-disc pl-5">
                                    {t.akomodasi.basecampExtras.map((e) => (
                                        <li key={e}>{e}</li>
                                    ))}
                                </ul>
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
                        {t.akomodasi.backToHome}
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
                                {t.akomodasi.copyright}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
