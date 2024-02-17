import { HeroDecor, Hexagon } from "@/components/decors"
import { getScopedI18n } from "@/locales/server"

const ServicesSection = async () => {

    const t = await getScopedI18n('services')

    return (
        <section className="h-screen lg:h-[calc(100vh-82px)] flex flex-col gap-2 mx-3 justify-center items-center relative ">
            <HeroDecor />
            <h1 className="font-extrabold text-8xl text-center z-20 animation animate">{t('title')}</h1>
            <Hexagon />
            <div className="relative p-1.5 mx-1.5 inline-flex items-center w-full sm:w-3/4  justify-center overflow-hidden group rounded-[46px] animation animate">
                <div className="absolute bg-gradient w-full h-full"></div>
                <div className="relative bg-light-primary dark:bg-dark-primary px-3 py-5 w-full h-full gap-5 rounded-[40px] flex items-center ">
                    {t('description')}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection