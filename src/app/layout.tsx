import type { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';

import { QueryProvider } from '@/providers/query';

import { poppins, montserrat, manrope, barlow } from '../theme/customFonts';

export const metadata: Metadata = {
  title: {
    default: 'Portfólio',
    template: 'Portfólio | Renna Silva',
  },
  description: 'Portfólio de Rennan Silva',
  icons: {
    icon: ['/assets/favicon/favicon.ico'],
    apple: ['/assets/favicon/apple-touch-icon.png'],
    shortcut: ['/assets/favicon/apple-touch-icon.png'],
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
