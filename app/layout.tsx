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
    default: "Mesh — Build Above Your Weight",
    template: "%s · Mesh",
  },
  description:
    "Mesh with your weight class, mentor up & comers, retreat with your kind, build with the best.",
  keywords: [
    "Mesh",
    "founder community",
    "co-founder matching",
    "ARR networking",
    "member-hosted events",
  ],
  openGraph: {
    title: "Mesh — Build Above Your Weight",
    description:
      "Mesh with your weight class, mentor up & comers, retreat with your kind, build with the best.",
    url: "https://gomesh.app",
    siteName: "Mesh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesh — Build Above Your Weight",
    description:
      "Mesh with your weight class, mentor up & comers, retreat with your kind, build with the best.",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
