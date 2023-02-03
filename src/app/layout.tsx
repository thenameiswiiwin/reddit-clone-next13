'use client';

import '@styles/globals.css';

import { Navbar } from '@components/Navbar';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100/10">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className="h-full">
        <RecoilRoot>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>Footer</footer>
        </RecoilRoot>
      </body>
    </html>
  );
}
