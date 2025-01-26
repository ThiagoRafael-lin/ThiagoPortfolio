import React from "react";
import "./globals.css";
import localFont from "next/font/local";

const Comfortaa = localFont({
  src: "../assets/fonts/Comfortaa-Regular.ttf",
  variable: "--font-comfortaa",
  weight: "100 900",
});

export const metadata = {
  title: "ThiagoPorfolio",
  description: "meu portfolio profissonal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${Comfortaa.variable} antialiased bg-slate-200`}>
        {children}
      </body>
    </html>
  );
}
