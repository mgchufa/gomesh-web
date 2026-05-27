import type { Metadata } from "next";
import { Epilogue, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const epilogue = Epilogue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
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
      className={`${epilogue.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
