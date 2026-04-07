import React from "react";
import "./globals.css";
import localFont from "next/font/local";
import { Providers } from "./providers";

const Comfortaa = localFont({
  src: "../assets/fonts/Comfortaa-Regular.ttf",
  variable: "--font-comfortaa",
  weight: "100 900",
});

const ComfortaaBold = localFont({
  src: "../assets/fonts/Comfortaa-Bold.ttf",
  variable: "--font-comfortaaBold",
  weight: "100 900",
});

export const metadata = {
  title: "ThiagoRafael",
  description: "meu portfólio profissional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${Comfortaa.variable} ${ComfortaaBold.variable} antialiased bg-slate-50 dark:bg-slate-900 hide-scrollbar transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
