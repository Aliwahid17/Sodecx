// Routes
const navbar = {
    home: 'Thuis',
    about: 'Over ons',
    services: 'Diensten',
}

// Bussiness Pricing Table
const starter = {
    title: 'Starter', // Translate to Dutch
    description: 'Beste optie voor kleine bedrijven om hun online aanwezigheid te tonen',
    price: '€499',
    table: {
        1: 'Geen opzet- of verborgen kosten',
        2: 'Korting op onze hosting',
        3: '<4 pagina\'s',
        4: 'Contactformulier naar mail'
    }
}

const eCommerce = {
    title: 'E-Commerce', // Translate to Dutch
    description: 'Relevant voor e-commerce winkels en bedrijfseigenaren',
    price: '€749',
    table: {
        1: 'Starterpakket',
        2: 'Dynamische productpagina\'s',
        3: 'Eenvoudig productbeheer',
        4: 'Betalingsgateway',
        5: 'Admin dashboard',
        6: '<7 pagina\'s'
    }
}

const largeECommerce = {
    title: 'Grote E-Commerce', // Translate to Dutch
    description: 'Best voor grote op maat gemaakte websites/systemen',
    price: '€1499',
    table: {
        1: 'E-Commerce pakket',
        2: 'Aangepaste zakelijke oplossingen',
        3: 'Verbeterde merkidentiteit',
        4: 'Flexibiliteit in functies',
        5: 'Google Analytics-integratie',
        6: '<12 pagina\'s'
    }
}

// Home Header
const home = {
    title: 'Sodecx - Thuis',
    description: 'Sodecx: Online succes bevorderen met aangepaste weboplossingen. We zijn gespecialiseerd in webontwikkeling, webshops en hostingdiensten om bedrijven te helpen gedijen in het digitale landschap.'
}

// Home Content
const homeContent = {
    solgan: 'Uw online business begint hier',
    description: 'Met onze expertise in website- en webshopontwikkeling, gekoppeld aan flexibele hostingoplossingen, stellen we bedrijven in staat hun ware digitale potentieel te ontsluiten',
    whyUs: {
        title: "Waarom wij?",
        description: 'Bij Sodecx begrijpen we de kracht van een sterke online aanwezigheid. Daarom zijn wij gespecialiseerd in het creëren van uitzonderlijke weboplossingen die niet alleen indruk maken maar ook resultaten opleveren. Wij bieden op maat gemaakte weboplossingen, die u begeleiden van conceptualisatie tot hosting, wat resulteert in een vlekkeloze uitvoering en de online groei van uw merk stimuleert.',
        points: {
            first: 'Weerspiegel uw unieke merkidentiteit en visie',
            second: 'Op maat gemaakte ontwerpen die uw publiek boeien en engageren',
            third: 'Bedrijven voorzien van naadloze online ervaringen',
        }
    },
    contact: {
        start: "Bent u klaar om uw",
        keyword: 'online aanwezigheid',
        end: 'naar nieuwe hoogten? Werk samen met Sodecx en laat ons uw bedrijf versterken.'
    },
    pricing: {
        title: "Ontworpen voor bedrijven zoals het uwe",
        description: "Bij Sodecx streven we ernaar de kracht van technologie, innovatie en kapitaal te benutten om langetermijnwaarde te ontsluiten en economische groei te stimuleren",
        pricingTable: {
            starter: starter,
            eCommerce: eCommerce,
            largeECommerce: largeECommerce
        }
    },
    hosting: {
        title: 'Hosting',
        description: 'Wij bieden betrouwbare en veilige hostingoplossingen op maat voor uw behoeften. Vertrouw ons om uw website hosting te verzorgen, zodat u verzekerd bent van optimale prestaties, uptime en gemoedsrust. Concentreer u op uw bedrijf terwijl wij zorgen voor uw hostingbehoeften.',
    }
}

export default {
    // Navbar
    navbar: navbar,
    // HTML HEAD FOR SEO
    head: {
        home: home
    },
    // Page content
    home: homeContent
} as const