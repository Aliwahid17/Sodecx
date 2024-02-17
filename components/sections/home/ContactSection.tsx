import { Button } from "@/components/contact"
import { paths } from "@/config"
import { getCurrentLocale, getScopedI18n } from "@/locales/server"
import Image from "next/image"
import { contactForm } from "@/server/contactForm"

const ContactSection = async () => {

    const currentLocale = getCurrentLocale()
    const t = await getScopedI18n('home.contact')

    return (
        <section className='h-[calc(100vh-82px)] flex   justify-center items-center relative'>
            <div className="container px-5  mx-auto  lg:px-24 xl:px-80">

                <Image src='/assets/icons/home/Rectangle.svg' className="hidden xl:block h-[calc(100vh-100px)] absolute top-0 left-0 animation animate" alt='Rectangle' width={338} height={517} />

                <div className="flex flex-col gap-10  justify-center items-center">
                    <p className="text-2xl font-medium text-center animation-bottom animate">
                        <span>{t('start')}</span>
                        <span className="whitespace-nowrap relative p-1 mx-1.5 inline-flex items-center justify-center  overflow-hidden group rounded-lg">
                            <span className="absolute bg-gradient w-full h-full"></span>
                            <span className="relative bg-light-primary dark:bg-dark-primary px-2 py-1 rounded-md ">
                                {t('keyword')}
                            </span>
                        </span>
                        <span className="">{t('end')}</span>
                    </p>
                    <Button serverActions={contactForm} className="animation-bottom animate"  title={currentLocale === 'en' ? "Contact Us" : 'Contact'} />
                </div>

                <Image src='/assets/icons/home/Rectangle.svg' className="hidden xl:block  h-[calc(100vh-100px)] absolute top-0 right-0 animation animate" style={{"rotate" : "180deg"}} alt='Rectangle' width={338} height={517} />

            </div>
        </section>
    )
}

export default ContactSection