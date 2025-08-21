import type { Metadata } from "next";
import { Host_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import Navbar from "@/components/global/nav";
import Footer from "@/components/global/footer";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hackwave | Join the Movement",
    template: "%s | Hackwave",
  },
  description:
    "Where the boldest builders come to play. Join Hackwave, the ultimate hackathon experience for innovators, creators, and tech enthusiasts.",
  keywords: [
    "Hackwave",
    "Hackathon",
    "Indore",
    "Tech Event",
    "Developers",
    "Innovation",
    "Builders",
    "Coding",
    "Competition",
    "2025",
  ],
  metadataBase: new URL("https://hackwave-site.vercel.app/"),
  openGraph: {
    title: "Hackwave | Join the Movement",
    description:
      "Where the boldest builders come to play. Join Hackwave, the ultimate hackathon experience for innovators, creators, and tech enthusiasts.",
    url: "https://hackwave-site.vercel.app/",
    siteName: "Hackwave",
    // images: [
    //   {
    //     url: "/assets/hackwave title.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Hackwave Hackathon Banner",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackwave | Join the Movement",
    description:
      "Where the boldest builders come to play. Join Hackwave, the ultimate hackathon experience for innovators, creators, and tech enthusiasts.",
    images: ["/assets/hackwave title.png"],
    site: "@hackwavein",
    creator: "@hackwavein",
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon_io/favicon.ico" }],
  },
};

// export const viewport = {
//   themeColor: "#ff6ec7",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=archivo@100,101,200,201,300,301,400,401,500,501,600,601,700,701,800,801,900,901,1,2&f[]=clash-display@200,300,400,500,600,700,1&f[]=melodrama@300,400,500,600,700,1&f[]=boska@200,201,300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
        {/* Favicon and manifest links */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon_io/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon_io/android-chrome-512x512.png"
        />
      </head>
      <body className={`antialiased ${hostGrotesk.className} bg-[#141414]`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
