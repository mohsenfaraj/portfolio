export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { fullname, description } from './lib/loadBase';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${fullname}'s Personal Website`,
    short_name: fullname,
    description: description,
    start_url: '/',
    display: 'standalone',
    background_color: '#121212',
    theme_color: '#e46400',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
