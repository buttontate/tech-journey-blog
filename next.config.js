/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'rickandmortyapi.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            }
        ],
    },
}

module.exports = nextConfig
