/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Alt-URLs des früheren Webauftritts (z. B. /unsere-leistungen/.../*.html)
      // dauerhaft auf die aktuelle Leistungsübersicht umleiten. 308 (permanent).
      {
        source: "/unsere-leistungen/:path*",
        destination: "/leistungen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
