import { Button } from "@/components/contact"
import { paths } from "@/config"
import { getCurrentLocale, getScopedI18n } from "@/locales/server"
import { contactForm } from "@/server/contactForm"

const DetailSection = async () => {

    const currentLocale = getCurrentLocale()
    const t = await getScopedI18n('services.detailSection')

    return (
        <section className="h-[calc(100vh-82px)] flex flex-col justify-center items-center relative ">
            <div className="container px-5 mx-auto xl:px-24">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5">
                    <h2 className="textColor lg:w-2/5">{t('title')}</h2>
                    <div className="flex flex-col justify-center items-center gap-5 lg:w-3/5">
                        <p>{t('description')}</p>
                        <Button serverActions={contactForm} title={currentLocale === 'en' ? "Contact Us" : 'Contact'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection