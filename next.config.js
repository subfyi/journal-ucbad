/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    env: {
        ENDPOINT: 'https://api.ucbad.com',
        DOMAIN: 'https://ucbad.com'
    },
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;

