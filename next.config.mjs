/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-webibee.pantheonsite.io",
        // port: "",`
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        // port: "",`
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
