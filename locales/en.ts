// Routes
const navbar = {
    home : 'Home',
    about : 'About Us',
    services : 'Services',
}

// Home Header
const homeHeader = {
    title : 'Sodecx - Home',
    description: 'Sodecx: Empowering Online Success with Custom Web Solutions. We specialize in web development, webshops, and hosting services to help businesses thrive in the digital landscape.'
}

// Home Content
const homeContent = {
    solgan : 'Your online business starts here',
    description: 'With our expertise in website and webshop development, coupled with flexible hosting solutions, we empower businesses to unlock their true digital potential'
}

export default {
    // Navbar
    navbar : navbar,
    // HTML HEAD FOR SEO
    head : {
        home : homeHeader
    },
    // Page content
    home : homeContent
    
} as const