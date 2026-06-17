import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

// Display — the high-contrast Didone. Sets the wordmark and headlines.
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Body & UI — an even, readable grotesque that does the everyday work.
const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

// Labels · indices · metadata — the structural mono.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gomesh.app"),
  title: {
    default: "Mesh — Build together.",
    template: "%s · Mesh",
  },
  description:
    "Mesh with digital business owners around the world. Learn, inspire, build, and host retreats together.",
  keywords: [
    "Mesh",
    "founder community",
    "co-founder matching",
    "digital business owners",
    "member-hosted retreats",
  ],
  openGraph: {
    title: "Mesh — Build together.",
    description:
      "Mesh with digital business owners around the world. Learn, inspire, build, and host retreats together.",
    url: "https://gomesh.app",
    siteName: "Mesh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesh — Build together.",
    description:
      "Mesh with digital business owners around the world. Learn, inspire, build, and host retreats together.",
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
      className={`${playfair.variable} ${hanken.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1 flex flex-col min-h-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
