import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Amit Kumar Adhikari — Full Stack Java Developer',
    short_name: 'Amit Adhikari',
    description:
      'Full Stack Java Developer specializing in Spring Boot, React, and scalable backend systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090909',
    theme_color: '#ff7a00',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
