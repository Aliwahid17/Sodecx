import { PricingSection } from "@/components/priceTable"
import { getScopedI18n, getI18n } from "@/locales/server"


const PricingView = async () => {

    const t = await getScopedI18n('home.pricing')

    const pricingTable = [
        {
            title: t('pricingTable.starter.title'),
            description: t('pricingTable.starter.description'),
            price: t('pricingTable.starter.price'),
            table: [
                t('pricingTable.starter.table.1'),
                t('pricingTable.starter.table.2'),
                t('pricingTable.starter.table.3'),
                t('pricingTable.starter.table.4'),
            ]
        },
        {
            title: t('pricingTable.eCommerce.title'),
            description: t('pricingTable.eCommerce.description'),
            price: t('pricingTable.eCommerce.price'),
            table: [
                t('pricingTable.eCommerce.table.1'),
                t('pricingTable.eCommerce.table.2'),
                t('pricingTable.eCommerce.table.3'),
                t('pricingTable.eCommerce.table.4'),
                t('pricingTable.eCommerce.table.5'),
                t('pricingTable.eCommerce.table.6'),
            ]
        },
        {
            title: t('pricingTable.largeECommerce.title'),
            description: t('pricingTable.largeECommerce.description'),
            price: t('pricingTable.largeECommerce.price'),
            table: [
                t('pricingTable.largeECommerce.table.1'),
                t('pricingTable.largeECommerce.table.2'),
                t('pricingTable.largeECommerce.table.3'),
                t('pricingTable.largeECommerce.table.4'),
                t('pricingTable.largeECommerce.table.5'),
                t('pricingTable.largeECommerce.table.6'),
            ]
        }
    ]

    return (
        <section className='lg:h-[calc(100vh-82px)] flex justify-center items-center'>
            <div className="container mx-auto px-5">
                <PricingSection title={t('title')} description={t('description')} table={pricingTable} />
            </div>
        </section>
    )
}

export default PricingView