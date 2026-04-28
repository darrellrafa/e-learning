import { Nunito } from 'next/font/google';
import "./globals.css";

import type { Metadata } from "next";
import { type } from 'node:os';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Level Up",
  description: "Gamified E-Learning Platform",
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunito.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}