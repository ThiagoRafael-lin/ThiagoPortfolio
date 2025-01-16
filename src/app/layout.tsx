import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const comfortaa = localFont({
  src: "./fonts/Comfortaa-Light.ttf",
  variable: "--font-comfortaa",
  weight: "100 900",
});

const Work_Sans = localFont({
  src: "./fonts/WorkSans-LightItalic.ttf",
  variable: "--font-workSans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thiago-portfólio",
  description: "Portfólio profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${comfortaa.variable} ${Work_Sans.variable} antialiased bg-[#171717] px-[20px] py-[10px]`}
      >
        {children}
      </body>
    </html>
  );
}
