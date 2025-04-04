// app/layout.js
import './globals.css'; // Don't forget to import your global styles
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Add any global side-effects here, if necessary
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mabel Career Coach</title>
      </head>
      <body>
        <div className="container">
          <header>
            <h1>Mabel Career Coach</h1>
          </header>

          <main>{children}</main>

          <footer>
            <p>© 2025 Mabel Career Coach. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

