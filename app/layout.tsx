import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gomesh.app"),
  title: {
    default: "Go Mesh — Real-world connections, by interest",
    template: "%s · Go Mesh",
  },
  description:
    "Go Mesh matches you with people and member-hosted events around what you love — from Saturday runs to your next collaborator.",
  keywords: [
    "Go Mesh",
    "meetups",
    "interest-based networking",
    "professional networking",
    "events",
    "community app",
  ],
  openGraph: {
    title: "Go Mesh — Real-world connections, by interest",
    description:
      "Match with members and events that align with your interests and ambitions.",
    url: "https://gomesh.app",
    siteName: "Go Mesh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Mesh — Real-world connections, by interest",
    description:
      "Match with members and events that align with your interests and ambitions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
