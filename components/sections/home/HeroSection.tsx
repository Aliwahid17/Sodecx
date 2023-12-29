import { HeroDecor, Hexagon, SocialMedia } from '@/components/decors'
import { getScopedI18n } from '@/locales/server'

const HeroSection = async () => {

    const t = await getScopedI18n('home')

    return (
        <section className="h-[calc(100vh-82px)] flex flex-col gap-2 justify-center items-center relative ">
            <HeroDecor />
            <h1 className="font-extrabold text-8xl z-20">Sodecx</h1>
            <h2 className='font-medium text-3xl text-center px-12 z-20 '>{t('solgan')}</h2>
            <Hexagon />
            <span className='font-medium flex w-full justify-center items-center text-justify md:text-center mb-10'><p className='mx-12 sm:mx-28 md:mx-40 lg:mx-56 xl:mx-96 '>{t('description')}</p></span>
            <SocialMedia active={true} />
        </section>
    )
}

export default HeroSection