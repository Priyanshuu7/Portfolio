// app/layout.tsx
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

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
      className={`${openSans.variable} scroll-smooth dark`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-sans">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
