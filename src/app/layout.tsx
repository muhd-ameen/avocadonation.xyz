import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Avocado Nation 🥑",
  description:
    "A small corner of the internet for builders. No roadmap. No whitepaper. Just people who like building weird things.",
  keywords: [
    "avocado nation",
    "builders",
    "internet",
    "coordination",
    "community",
    "ameen",
  ],
  authors: [{ name: "Ameen", url: "https://x.com/emeenx" }],
  creator: "Ameen",
  openGraph: {
    title: "Welcome to Avocado Nation 🥑",
    description:
      "A small corner of the internet for builders. No roadmap. No whitepaper. Just people who like building weird things.",
    url: "https://avocadonation.xyz",
    siteName: "Avocado Nation",
    images: [
      {
        url: "/avocado.png",
        width: 500,
        height: 500,
        alt: "Avocado Nation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Avocado Nation 🥑",
    description:
      "A small corner of the internet for builders. No roadmap. No whitepaper. Just people who like building weird things.",
    creator: "@emeenx",
    images: ["/avocado.png"],
  },
  metadataBase: new URL("https://avocadonation.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
