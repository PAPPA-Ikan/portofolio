import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/src/components/ui/loading-screen"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Software Engineer",
  description: "Personal portfolio website built with Next.js",
  openGraph: {
    title: "Your Name Portfolio",
    description: "Software Engineer Portfolio",
    url: "https://yourdomain.com",
    siteName: "Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        <LoadingScreen/>
        {children}
      </body>
    </html>
  );
}