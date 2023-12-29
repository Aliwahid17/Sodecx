import { getScopedI18n } from '@/locales/server'
import { Metadata } from 'next/types'
import AboutView from '@/components/sections/about/AboutView'

export async function generateMetadata() {

    const t = await getScopedI18n('head.about')

    return {
        title: t('title'),
        description: t('description'),
    } as Metadata

}

export default async function Home() {
    return <AboutView />
}
