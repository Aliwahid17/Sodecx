const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@assets'] = path.join(__dirname, 'assets');
        return config;
    },
}

module.exports = nextConfig
