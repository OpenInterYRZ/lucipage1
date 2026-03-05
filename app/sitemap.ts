import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';

const baseUrl = 'https://luci.com';

const pages = ['', '/gradient-demo', '/light-demo', '/sre'];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${baseUrl}/${l}${page}`])
        ),
      },
    }))
  );
}
