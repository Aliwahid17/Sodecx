import PricingView from "../home/PricingView"
import DetailSection from "./DetailSection"
import HostingPricingView from "./HostingPricingView"
import HowItWorkSection from "./HowItWorkSection"
import ServicesSection from "./ServicesSection"

const ServicesView = async () => {
    return (
        <main>
            <ServicesSection />
            <HowItWorkSection />
            <DetailSection />
            <PricingView />
            <HostingPricingView />
        </main>
    )
}

export default ServicesView