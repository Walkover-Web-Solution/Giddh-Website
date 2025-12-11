/** @type {import('next').NextConfig} */
const nextConfig = {
    // Opt into Turbopack explicitly so Next.js 16 stops warning when a webpack
    // config is present. Empty object means "accept defaults".
    turbopack: {},
    webpack(config) {
        config.resolve.fallback = {

            // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped.
            ...config.resolve.fallback,

            fs: false, // the solution
        };

        return config;
    },
};

// module.exports = nextConfig
module.exports = nextConfig