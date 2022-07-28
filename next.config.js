/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
        and: [/\.(js|ts)x?$/]
      },
      use: ['@svgr/webpack']
    });
    return config;
  },
  
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
