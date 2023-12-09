// Routes
const navbar = {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
}

// Home Header
const homeHeader = {
    title: 'Sodecx - Home',
    description: 'Sodecx: Empowering Online Success with Custom Web Solutions. We specialize in web development, webshops, and hosting services to help businesses thrive in the digital landscape.'
}

// Home Content
const homeContent = {
    solgan: 'Your online business starts here',
    description: 'With our expertise in website and webshop development, coupled with flexible hosting solutions, we empower businesses to unlock their true digital potential',
    whyUs: {
        title: "Why Us?",
        description: "At Sodecx, we understand the power of a strong online presence. That's why we specialize in creating exceptional web solutions that not only impress but also drive results.We Provide Customized Web Solutions, Guiding You from Conceptualization to Hosting, Resulting in Flawless Execution and Empowering Your Brand's Online Growth.",
        points: {
            first: 'Reflect your unique brand identity and vision',
            second: 'Bespoke designs that captivate and engage your audience',
            third: 'Empowering businesses with seamless online experiences',
        }
    },
    contact: {
        start: "Are you ready to take your",
        keyword: 'online presence',
        end: 'to new heights? Partner with Sodecx and let us empower your business.'
    }
}

export default {
    // Navbar
    navbar: navbar,
    // HTML HEAD FOR SEO
    head: {
        home: homeHeader
    },
    // Page content
    home: homeContent

} as const