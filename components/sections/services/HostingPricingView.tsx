import { PricingSection } from "@/components/priceTable"
import { getScopedI18n } from "@/locales/server"

const HostingPricingView = async () => {

    const t = await getScopedI18n('services.hostingPricingTable')
    const pricingTable = [
        {
            title: t('1.title'),
            description: t('1.description'),
            price: t('1.price'),
            table: [
                t('1.table.1'),
                t('1.table.2'),
            ]
        },
        {
            title: t('2.title'),
            description: t('2.description'),
            price: t('2.price'),
            table: [
                t('2.table.1'),
                t('2.table.2'),
                t('2.table.3'),
                t('2.table.4'),
                t('2.table.5'),
            ]
        },
        {
            title: t('3.title'),
            description: t('3.description'),
            price: t('3.price'),
            table: [
                t('3.table.1'),
                t('3.table.2'),
                t('3.table.3'),
                t('3.table.4'),
                t('3.table.5'),
                t('3.table.6'),
                t('3.table.7'),
            ]
        },
    ]

    return (
        <section className='h-full flex justify-center items-center py-16'>
            <div className="container mx-auto px-5">
                <PricingSection title={t('title')} description={t('description')} table={pricingTable} showMonth={true}/>
            </div>
        </section>
    )
}

export default HostingPricingView