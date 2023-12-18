// Routes
const navbar = {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
}

// Bussiness Pricing Table
const starter = {
    title: 'Starter',
    description: 'Best option for small businesses to show their online presence',
    price: '€499',
    table: {
        1: 'No setup, or hidden fees',
        2: 'Discount on our Hosting',
        3: '<4 pages',
        4: 'Contactform to mail'
    }
}

const eCommerce = {
    title: 'E-Commerce',
    description: 'Relevant for ecommerce stores and business owners',
    price: '€749',
    table: {
        1: 'Starter pack',
        2: 'Dynamic Product Pages',
        3: 'Easy Product Management',
        4: 'Payment Gateway',
        5: 'Admin dashboard',
        6: '<7 pages'
    }
}

const largeECommerce = {
    title: 'Large E-Commerce',
    description: 'Best for large custom made website/systems',
    price: '€1499',
    table: {
        1: 'E-Commerce pack',
        2: 'Custom Enterprise solutions',
        3: 'Enhanced Brand Identity',
        4: 'Flexibility in Features',
        5: 'Google Analytics Integration',
        6: '<12 pages'
    }
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
    },
    pricing: {
        title: "Designed for business like yours",
        description: "At Sodecx, we are committed to harnessing the power of technology, innovation, and capital to unlock long-term value and drive economic growth",
        pricingTable: {
            starter: starter,
            eCommerce: eCommerce,
            largeECommerce: largeECommerce
        }
    },
    hosting : {
        title : 'Hosting',
        description: 'We offer reliable and secure hosting solutions tailored to your needs. Trust us to handle your website hosting, ensuring optimal performance, uptime, and peace of mind. Focus on your business while we take care of your hosting requirements.',
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