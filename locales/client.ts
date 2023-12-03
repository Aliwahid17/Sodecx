import { createI18nClient } from "next-international/client";

export const {
    useI18n,
    useScopedI18n,
    I18nProviderClient,
    useCurrentLocale,
    useChangeLocale,
    I18nClientContext,
    defineLocale
} = createI18nClient({
    en: () => import("./en"),
    nl: () => import("./nl"),
});
