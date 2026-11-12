/** @type {import('next').NextConfig} */

// Keep in sync with public/_headers. Covers VAPT open items:
// Missing CSP, Clickjacking (frame-ancestors), Cross-domain script include.
const contentSecurityPolicy = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.google.com https://*.g.doubleclick.net https://cdn.jsdelivr.net https://verify.msg91.com https://control.msg91.com https://main.d2f49esifpcbwh.amplifyapp.com https://widget.trustpilot.com https://checkout.razorpay.com https://*.razorpay.com https://accounts.google.com https://unpkg.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://tagmanager.google.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net",
    "connect-src 'self' https: wss:",
    "frame-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://form.typeform.com https://*.typeform.com https://www.youtube.com https://*.youtube.com https://www.youtube-nocookie.com https://checkout.razorpay.com https://*.razorpay.com https://accounts.google.com https://verify.msg91.com https://widget.trustpilot.com",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://accounts.google.com https://*.razorpay.com https://form.typeform.com",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
    { key: 'Content-Security-Policy', value: contentSecurityPolicy },
    { key: 'X-Frame-Options', value: 'DENY' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];

const nextConfig = {
    sassOptions: {
        silenceDeprecations: ['import'],
    },
    // Opt into Turbopack explicitly so Next.js 16 stops warning when a webpack
    // config is present. Empty object means "accept defaults".
    turbopack: {},
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ];
    },
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