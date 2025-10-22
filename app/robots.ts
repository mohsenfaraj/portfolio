import type { MetadataRoute } from 'next';
import BASEURL from '@/app/lib/loadBase';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASEURL}/sitemap.xml`,
  };
}
