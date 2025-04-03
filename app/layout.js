// app/layout.js

import React from 'react';
import './globals.css';  // This will include any global CSS you have in your project

// Example if you're using Google Fonts
import { Inter } from 'next/font/google'; 
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mabel Career Coach',
  description: 'Your career assistant powered by AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mabel Career Coach" />
      </head>
      <body className={inter.className}>
        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
