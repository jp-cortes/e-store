/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'loremflickr.com',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'cloudflare-ipfs.com',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'http',
            hostname: 'res.cloudinary.com',
          },
        ],
      },
      async redirects() {
        return [
          {
            source: '/my-account',
            missing: [
              {
                type: 'cookie',
                key: 'token',
              },
            ],
            destination: '/login', // Matched parameters can be used in the destination
            permanent: false,
          },
          {
            source: '/login',
            has: [
              {
                type: 'cookie',
                key: 'token',
              },
            ],
            destination: '/my-account', // Matched parameters can be used in the destination
            permanent: false,
          },
        ]
      },
}

module.exports = nextConfig
