import { getScopedI18n } from '@/locales/server'
import { Metadata } from 'next/types'
import ServicesView from '@/components/sections/services/ServicesView'

export async function generateMetadata() {

    const t = await getScopedI18n('head.services')

    return {
        title: t('title'),
        description: t('description'),
    } as Metadata

}

export default async function Home() {
    return <ServicesView />
}
