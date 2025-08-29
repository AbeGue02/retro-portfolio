import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abraham Guerrero | Developer Portfolio',
  description: 'Mobile Developer & Full-Stack Engineer specializing in React Native, Swift, and Shopify development',
  keywords: ['developer', 'portfolio', 'react native', 'swift', 'shopify', 'full-stack', 'mobile development'],
  authors: [{ name: 'Abraham Guerrero' }],
  openGraph: {
    title: 'Abraham Guerrero | Developer Portfolio',
    description: 'Mobile Developer & Full-Stack Engineer',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}