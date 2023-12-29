import AboutSection from "./AboutSection"
import AllStartedSection from "./AllStartedSection"
import OurMission from "./OurMission"
import WhatWeDo from "./WhatWeDo"

const AboutView = async () => {
    return (
        <main>
            <AboutSection />
            <WhatWeDo />
            <AllStartedSection />
            <OurMission />
        </main>
    )
}

export default AboutView