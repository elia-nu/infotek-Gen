/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      unoptimized: true,  // If you are using Next.js Image Optimization
    },
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
          ],
        },
      ];
    },
}

module.exports = nextConfig
