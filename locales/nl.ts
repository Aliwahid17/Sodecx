// Home Header
const home = {
    title: 'Sodecx - Thuis',
    description: 'Sodecx: Online succes bevorderen met aangepaste weboplossingen. We zijn gespecialiseerd in webontwikkeling, webshops en hostingdiensten om bedrijven te helpen gedijen in het digitale landschap.'
}

// Home Content
const homeContent = {
    solgan : 'Uw online business begint hier',
    description: 'Met onze expertise in website- en webshopontwikkeling, gekoppeld aan flexibele hostingoplossingen, stellen we bedrijven in staat hun ware digitale potentieel te ontsluiten'
}

export default {
    // HTML HEAD FOR SEO
    head: {
        home: home
    },
    home: homeContent
} as const