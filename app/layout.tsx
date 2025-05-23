import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FavoriteProvider } from '@/contexts/FavoriteContext';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
// import { MovieProvider } from '@/contexts/MovieContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'findcinema',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* <link rel='icon' href='/favicon/favicon.ico' /> */}
        {/* <link rel='icon' href='/favicon/film.svg' /> */}
        <link rel='icon' href='/favicon/video.png' />
      </head>
      <body
        className={`${inter.variable} font-inter bg-black suppressHydrationWarning`}
      >
        {/* <MovieProvider> */}
        <FavoriteProvider>
          <Header />
          {children}
          <Footer />
        </FavoriteProvider>
        {/* </MovieProvider> */}
      </body>
    </html>
  );
}
