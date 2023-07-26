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
            destination: '/login', // no token redirec to /login
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
            destination: '/my-account', // with token redirect to /my-account
            permanent: false,
          },
          {
            source: '/sign-up',
            has: [
              {
                type: 'cookie',
                key: 'token',
              },
            ],
            destination: '/my-account', // with token redirect to /my-account
            permanent: false,
          },
          {
            source: '/my-orders',
            missing: [
              {
                type: 'cookie',
                key: 'token',
              },
            ],
            destination: '/login', // no token redirect to /login
            permanent: false,
          },
          {
            source: '/my-account',
            has: [
              {
                type: 'cookie',
                key: 'userRole',
                value: 'admin'
              },
            ],
            destination: '/dashboard', // userRole is admin redirect to dashboard
          },
          {
            source: '/dashboard',
            missing: [
              {
                type: 'cookie',
                key: 'userRole',
                value: 'admin'
              },
            ],
            destination: '/', // userRole is not admin redirect to /home
            permanent: false,
          },
          {
            source: '/dashboard/products',
            missing: [
              {
                type: 'cookie',
                key: 'userRole',
                value: 'admin'
              },
            ],
            destination: '/', // userRole is not admin redirect to /home
            permanent: false,
          },
        ]
      },
}

module.exports = nextConfig
