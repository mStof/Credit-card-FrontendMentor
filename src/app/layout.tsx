import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './global.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: '500'
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Interactive card details form',
  description: 'Frontend Mentor - Interactive credit card details'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen ${spaceGrotesk.className}`}>{children}</body>
    </html>
  );
}
