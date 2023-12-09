// Routes
const navbar = {
    home: 'Thuis',
    about: 'Over ons',
    services: 'Diensten',
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