/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/ravgoyt',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/iamravgo',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/388869946513293322',
        permanent: true,
      },
    ]
  },
}
