import React from "react";
import "./globals.css";
import localFont from "next/font/local";

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
  description: "meu portfolio profissonal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${Comfortaa.variable} ${ComfortaaBold.variable} antialiased bg-slate-50 hide-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
