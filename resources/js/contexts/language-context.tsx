import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import en from '@/lang/en';
import id from '@/lang/id';

type Language = 'id' | 'en';
type Translations = typeof id;

interface LanguageContextType {
    lang: Language;
    t: Translations;
    setLang: (lang: Language) => void;
}

const translations: Record<Language, Translations> = { id, en };

const LanguageContext = createContext<LanguageContextType>({
    lang: 'id',
    t: id,
    setLang: () => {},
});

function getInitialLang(): Language {
    if (typeof window === 'undefined') return 'id';
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'id') return stored;
    return 'id';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Language>(getInitialLang);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('lang', newLang);
    };

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <LanguageContext.Provider
            value={{ lang, t: translations[lang], setLang }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
