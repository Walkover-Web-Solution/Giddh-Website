const ContentSecurityPolicy = `
    frame-ancestors 'self';
  `;

const securityHeaders = [
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    },
];


/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.fallback = {

            // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped.
            ...config.resolve.fallback,

            fs: false, // the solution
        };

        return config;
    },

    // Run the base config through any configured plugins
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/:path*',
                headers: securityHeaders,
            },
        ];
    },
};

// module.exports = nextConfig
module.exports = nextConfig