import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ResumeForge — AI Resume & Cover Letter Generator",
  description:
    "Paste a job description and your experience. Get tailored resume bullets, a cover letter, and key skills in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen font-sans`}>
        <Header />
        {children}
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
