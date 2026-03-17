import { Link, usePage } from '@inertiajs/react';
import { Cherry, ChevronDown, Droplets, Menu, Mountain, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { dashboard } from '@/routes';

interface NavLink {
    href: string;
    label: string;
}

interface WisataNavbarProps {
    navLinks?: NavLink[];
}

const wisataDestinations = [
    {
        href: '/wisata/puncak-manud',
        label: 'Puncak Manud',
        description: 'Panorama gunung & sunrise',
        icon: Mountain,
    },
    {
        href: '/wisata/kebun-stroberi',
        label: 'Kebun Stroberi',
        description: 'Petik stroberi segar',
        icon: Cherry,
    },
    {
        href: '/wisata/air-terjun-cahaya',
        label: 'Air Terjun Manud Jaya',
        description: 'Air terjun 40 meter',
        icon: Droplets,
    },
];

export default function WisataNavbar({ navLinks }: WisataNavbarProps) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [wisataOpen, setWisataOpen] = useState(false);
    const wisataRef = useRef<HTMLDivElement>(null);

    const defaultLinks: NavLink[] = [
        { href: '/akomodasi-transportasi', label: 'Akomodasi & Transportasi' },
        { href: '/kontak', label: 'Kontak Kami' },
    ];

    const links = navLinks ?? defaultLinks;

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                wisataRef.current &&
                !wisataRef.current.contains(e.target as Node)
            ) {
                setWisataOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold tracking-tight"
                >
                    <Mountain className="h-6 w-6 text-primary" />
                    <span>Desa Manud Jaya</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-8 md:flex">
                    {/* Wisata dropdown */}
                    <div ref={wisataRef} className="relative">
                        <button
                            type="button"
                            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            onClick={() => setWisataOpen(!wisataOpen)}
                        >
                            Wisata
                            <ChevronDown
                                className={`h-4 w-4 transition-transform ${wisataOpen ? 'rotate-180' : ''}`}
                            />
                        </button>
                        {wisataOpen && (
                            <div className="absolute top-full left-1/2 mt-2 w-64 -translate-x-1/2 rounded-xl border border-border bg-background p-2 shadow-lg">
                                {wisataDestinations.map((dest) => (
                                    <Link
                                        key={dest.href}
                                        href={dest.href}
                                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent"
                                        onClick={() => setWisataOpen(false)}
                                    >
                                        <dest.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <div>
                                            <p className="text-sm font-medium">
                                                {dest.label}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {dest.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Other links */}
                    {links.map((link) =>
                        link.href.startsWith('#') ? (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ),
                    )}
                    {auth.user && (
                        <Link
                            href={dashboard()}
                            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Dashboard
                        </Link>
                    )}
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </nav>

            {/* Mobile nav */}
            {mobileMenuOpen && (
                <div className="border-t border-border px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {/* Wisata collapsible */}
                        <div>
                            <button
                                type="button"
                                className="flex w-full items-center justify-between text-sm font-medium text-muted-foreground"
                                onClick={() => setWisataOpen(!wisataOpen)}
                            >
                                Wisata
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform ${wisataOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {wisataOpen && (
                                <div className="mt-2 flex flex-col gap-1 pl-4">
                                    {wisataDestinations.map((dest) => (
                                        <Link
                                            key={dest.href}
                                            href={dest.href}
                                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent"
                                            onClick={() => {
                                                setWisataOpen(false);
                                                setMobileMenuOpen(false);
                                            }}
                                        >
                                            <dest.icon className="h-4 w-4 text-primary" />
                                            {dest.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Other links */}
                        {links.map((link) =>
                            link.href.startsWith('#') ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}
                        {auth.user && (
                            <div className="flex items-center gap-3 border-t border-border pt-4">
                                <Link
                                    href={dashboard()}
                                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                                >
                                    Dashboard
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
