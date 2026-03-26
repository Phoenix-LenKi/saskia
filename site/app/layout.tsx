import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import { seoTitle, seoDescription } from "@/lib/content";
import "./globals.css";

// Heading font: Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Body font: DM Sans (Clean-tech alternative for DIN Next)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saskiabarouki.com.br"),
  title: {
    default: seoTitle,
    template: `%s | ${seoTitle}`,
  },
  description: seoDescription,
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "https://saskiabarouki.com.br",
    siteName: "Dra. Saskia Barouki",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${poppins.variable} ${dmSans.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans bg-[#FAF9F7] text-[#1A1A1A] antialiased min-h-screen flex flex-col selection:bg-[#B08D8D] selection:text-white">
        {children}
      </body>
    </html>
  );
}
