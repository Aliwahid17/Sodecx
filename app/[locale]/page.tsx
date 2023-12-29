import { getScopedI18n } from '@/locales/server'
import HomeView from '@/components/sections/home/HomeView'
import { Metadata } from 'next/types'

export async function generateMetadata() {

  const t = await getScopedI18n('head.home')

  return {
    title: t('title'),
    description: t('description'),
  } as Metadata

}

export default async function Home() {
  return <HomeView />
}
