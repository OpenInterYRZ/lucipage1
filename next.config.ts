import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.glb$/,
      type: 'asset/resource',
    });
    return config;
  },
  turbopack: {
    rules: {
      '*.glb': {
        loaders: ['file-loader'],
        as: '*.js',
      },
    },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
