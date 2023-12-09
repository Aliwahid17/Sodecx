import { Button } from "@/components/button"
import { paths } from "@/config"
import { getCurrentLocale, getScopedI18n } from "@/locales/server"
import Image from "next/image"

const ContactSection = async () => {

    const currentLocale = getCurrentLocale()
    const t = await getScopedI18n('home.contact')

    return (
        <section className='h-[calc(100vh-82px)] flex   justify-center items-center relative'>
            <div className="container px-5  mx-auto xl:px-24">

                <Image src='/assets/icons/home/Rectangle.svg' className="hidden xl:block h-[calc(100vh-100px)] absolute top-0 left-0" alt='Rectangle' width={338} height={517} />

                <div className="flex flex-col gap-10  justify-center items-center">
                    <p className="text-2xl font-medium text-center ">
                        <span>{t('start')}</span>
                        {/* <span className="border-4 whitespace-nowrap mx-1 border-t-teal-200  border-r-[#BBB6F4]   "> {t('keyword')} </span> */}
                        {/* <div className="relative p-6  bg-dark-primary rounded-xl shadow-md flex items-center space-x-4">
                            <div className="absolute inset-0 rounded-xl shadow-inner" aria-hidden="true"></div>
                            <div className="relative">
                                <div className="text-xl font-medium ">r online presence</div>
                            </div>
                        </div> */}

                        {/* <div className="relative w-fit bg-light-primary dark:bg-dark-primary rounded-xl shadow-md flex items-center space-x-4">
                            <div></div>
                            <div>
                                Hello
                            </div>
                        </div>   */}

                        <span>{t('end')}</span>
                    </p>
                    <Button title={currentLocale === 'en' ? "Contact Us" : 'Contact'} href={paths.contact} />
                </div>

                <Image src='/assets/icons/home/Rectangle.svg' className="hidden xl:block  h-[calc(100vh-100px)] absolute top-0 right-0 rotate-180" alt='Rectangle' width={338} height={517} />

            </div>
        </section>
    )
}

export default ContactSection