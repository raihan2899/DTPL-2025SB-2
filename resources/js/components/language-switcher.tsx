import { Globe } from 'lucide-react';

import { useLanguage } from '@/contexts/language-context';

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();

    const toggle = () => setLang(lang === 'id' ? 'en' : 'id');

    return (
        <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label={
                lang === 'id'
                    ? 'Switch to English'
                    : 'Ganti ke Bahasa Indonesia'
            }
        >
            <Globe className="h-4 w-4" />
            {lang === 'id' ? 'EN' : 'ID'}
        </button>
    );
}
