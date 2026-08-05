import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amit-adhikari.dev'),
  title: {
    default: 'Amit Kumar Adhikari — Full Stack Java Developer',
    template: '%s | Amit Kumar Adhikari',
  },
  description:
    'Full Stack Java Developer specializing in Spring Boot, React, and scalable backend systems. MCA graduate from BPUT. Building modern full-stack applications.',
  keywords: [
    'Amit Kumar Adhikari',
    'Full Stack Java Developer',
    'Spring Boot Developer',
    'React Developer',
    'Next.js Developer',
    'Java Backend',
    'REST API Developer',
    'MCA BPUT',
    'Software Developer India',
  ],
  authors: [{ name: 'Amit Kumar Adhikari' }],
  creator: 'Amit Kumar Adhikari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amit-adhikari.dev',
    title: 'Amit Kumar Adhikari — Full Stack Java Developer',
    description:
      'Full Stack Java Developer specializing in Spring Boot, React, and scalable backend systems.',
    siteName: 'Amit Kumar Adhikari',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Amit Kumar Adhikari — Full Stack Java Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amit Kumar Adhikari — Full Stack Java Developer',
    description:
      'Full Stack Java Developer specializing in Spring Boot, React, and scalable backend systems.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
