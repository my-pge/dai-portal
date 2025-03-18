/* eslint-disable @next/next/inline-script-id */
'use client';
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import "./globals.css";
import GlobalContext from "./context/globalContext";
import { useReducer } from "react";
import reducer from "./context/reducer";
import initialState from "./context/initialState";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <html lang="en">
      <head>
        <title>DA&I Art Sync</title>
        <link rel="icon" type="image/x-icon" href="/pge logo square.png"></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `
             const handleDomReady = () => {
      const style = document.createElement('style');
      style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;';
      style.setAttribute('type', 'text/css');
      document.querySelector('head').prepend(style);
    };

    window.addEventListener('DOMContentLoaded', handleDomReady);
    `,
          }}
        ></script>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-cyan/theme.css" />
      </head>
      <body
        className={`antialiased`}
      >
        <GlobalContext.Provider value={{ state, dispatch }}>
          <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
            {children}
          </PrimeReactProvider>
        </GlobalContext.Provider>
      </body>
    </html>
  );
}
