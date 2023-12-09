import ContactSection from "./ContactSection"
import HeroSection from "./HeroSection"
import WhyUsSection from "./WhyUsSection"

const HomeView = async() => {
    return (
        <main>
            <HeroSection />
            <WhyUsSection />
            {/* <ContactSection /> */}
        </main>
    )
}

export default HomeView