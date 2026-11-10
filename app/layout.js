import FloatingIcons from "@/components/FloatingIcons";
import { Pixelify_Sans, VT323, Nunito } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.role}`,
  description: site.description,
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${pixelify.variable} ${vt323.variable} ${nunito.variable}`}
    >
      <body>
        <FloatingIcons />
        {children}
      </body>
    </html>
  );
}
