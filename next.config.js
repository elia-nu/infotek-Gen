/** @type {import('next').NextConfig} */
const nextConfig = {
    
    output: 'export',
    images: {
      unoptimized: true,  // If you are using Next.js Image Optimization
    },
    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    // Add this if you're using static exports
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'Access-Control-Allow-Origin', value: '*' },
          ],
        },
      ];
    },
}

module.exports = nextConfig
