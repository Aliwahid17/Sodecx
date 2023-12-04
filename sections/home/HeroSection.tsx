import { Hexagon } from '@/components/decors'
import { getScopedI18n } from '@/locales/server'
import Image from 'next/image'

const HeroSection = async () => {

    const t = await getScopedI18n('home')

    return (
        <section className="h-[calc(100vh-82px)] flex flex-col gap-2 justify-center items-center relative">
            <h1 className="font-extrabold text-8xl">Sodecx</h1>
            <h2 className='font-medium text-3xl text-center px-12'>{t('solgan')}</h2>
            <div className='flex justify-end w-full px-14 my-2'>
                <Hexagon />
            </div>
            <p className='font-medium px-12 text-justify' >{t('description')}</p>
            <Image className='absolute -bottom-12' src={'../assets/decors/blob.svg'} alt='Circle' width={320} height={170} />
        </section>
    )
}

export default HeroSection