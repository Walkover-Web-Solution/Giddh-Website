/** @type {import('next').NextConfig} */

// Keep in sync with public/_headers. Covers Scrut VAPT open items:
// Missing CSP, Clickjacking (frame-ancestors / X-Frame-Options),
// Cross-domain script include (script-src allowlist of trusted hosts).
// next.config headers() are required: Netlify _headers alone do not reach
// Next.js HTML responses on giddh.com (Cloudflare + Next runtime).
const contentSecurityPolicy = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://*.google-analytics.com https://www.google.com https://*.g.doubleclick.net https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://verify.msg91.com https://control.msg91.com https://*.msg91.com https://hcaptcha.com https://*.hcaptcha.com https://js.cobrowse.io https://*.cobrowse.io https://main.d2f49esifpcbwh.amplifyapp.com https://widget.trustpilot.com https://*.trustpilot.com https://checkout.razorpay.com https://*.razorpay.com https://accounts.google.com https://unpkg.com https://assets.calendly.com https://*.calendly.com https://embed.typeform.com https://*.typeform.com https://identity.netlify.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://tagmanager.google.com https://*.msg91.com https://hcaptcha.com https://*.hcaptcha.com https://assets.calendly.com https://*.calendly.com https://embed.typeform.com https://*.typeform.com https://*.trustpilot.com",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net https://*.msg91.com",
    "connect-src 'self' https: wss:",
    "frame-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://form.typeform.com https://embed.typeform.com https://*.typeform.com https://www.youtube.com https://*.youtube.com https://www.youtube-nocookie.com https://checkout.razorpay.com https://*.razorpay.com https://accounts.google.com https://verify.msg91.com https://*.msg91.com https://hcaptcha.com https://*.hcaptcha.com https://*.cobrowse.io https://widget.trustpilot.com https://*.trustpilot.com https://calendly.com https://*.calendly.com https://assets.calendly.com",
    "worker-src 'self' blob: https://hcaptcha.com https://*.hcaptcha.com https://*.cobrowse.io",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://accounts.google.com https://*.razorpay.com https://form.typeform.com https://*.typeform.com",
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
