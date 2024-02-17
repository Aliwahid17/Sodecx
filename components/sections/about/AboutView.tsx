import AboutSection from "./AboutSection"
import AllStartedSection from "./AllStartedSection"
import OurMission from "./OurMission"
import Quotes from "./Quotes"
import WhatWeDo from "./WhatWeDo"

const AboutView = async () => {
    return (
        <main className="overflow-x-hidden">
            <AboutSection />
            <WhatWeDo />
            <AllStartedSection />
            <OurMission />
            <Quotes />
        </main>
    )
}

export default AboutView