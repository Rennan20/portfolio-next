import type { Metadata } from 'next';
import React from 'react';
import '@/styles/globals.css';

import { QueryProvider } from '@/providers/query';

import { poppins, montserrat, manrope, barlow } from '../../theme/customFonts';

export const metadata: Metadata = {
  title: {
    default: 'Portfólio',
    template: 'Portfólio | Rennan Silva',
  },
  description: 'Portfólio de Rennan Silva, desenvolvedor frontend',
  keywords: 'Desenvolvedor Frontend, React, Next, Portfólio, Rennan Silva',
  icons: {
    icon: ['/assets/favicon/favicon.ico'],
    apple: ['/assets/favicon/apple-touch-icon.png'],
    shortcut: ['/assets/favicon/apple-touch-icon.png'],
  },
  openGraph: {
    title: 'Portfólio de Rennan Silva',
    description: 'Descubra meu trabalho como desenvolvedor frontend.',
    url: 'https://portfolio-five-xi-38.vercel.app/',
    images: ['/assets/POG.png'],
    siteName: 'Portfólio Rennan Silva',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-br'
      className={`${poppins.variable} ${manrope.variable} ${montserrat.variable} ${barlow.variable}`}
      suppressHydrationWarning
    >
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
