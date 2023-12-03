'use client';

import { useEffect } from "react";
import { useChangeLocale } from "@/locales/client";
import { ThemeProvider as NextThemesProvider } from 'next-themes'


type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

const SettingsProvider = ({ children , ...props }: ThemeProviderProps) => {

    const changeLocale = useChangeLocale({ preserveSearchParams: true });

    useEffect(() => {

        if (!localStorage.getItem('locale')) {
            changeLocale(navigator.language.includes('nl') ? 'nl' : 'en')
            localStorage.setItem('locale', 'true')
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default SettingsProvider