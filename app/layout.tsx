import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cools Running Auto",
  description: "Professional auto detailing, car washing, and premium vehicle care services. Transform your car with our expert cleaning and maintenance solutions.",};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
