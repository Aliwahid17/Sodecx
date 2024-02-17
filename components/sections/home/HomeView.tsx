import ContactSection from "./ContactSection"
import HeroSection from "./HeroSection"
import HostingSection from "./HostingSection"
import PricingView from "./PricingView"
import WhyUsSection from "./WhyUsSection"

const HomeView = async () => {
    return (
        <main className="overflow-x-hidden">
            <HeroSection />
            <WhyUsSection />
            <ContactSection />
            <PricingView />
            <HostingSection />
        </main>
    )
}

export default HomeView