// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyanshu Rajak - Full Stack Developer",
  description:
    "Portfolio of Priyanshu Rajak, a Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Priyanshu Rajak",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
  ],
  authors: [
    {
      name: "Priyanshu Rajak",
      url: "https://www.priyanshurajak.tech/",
    },
  ],
  creator: "Priyanshu Rajak",
  icons: {
    icon: "/favicon.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
