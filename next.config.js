const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.resolve.alias['@assets'] = path.join(__dirname, 'path/to/your/assets');
        return config;
    },
}

module.exports = nextConfig
