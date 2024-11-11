/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'foijrbllmkhepvvyfjck.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/capsula-imagenes/**',
          },
        ],
      },
};

export default nextConfig;
