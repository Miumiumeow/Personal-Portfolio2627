import FloatingIcons from "@/components/FloatingIcons";
import BootScreen from "@/components/BootScreen";
import ThemeToggle from "@/components/ThemeToggle";
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

// Runs before the page paints, so there's no flash of the wrong theme.
const initScript = `
try {
  var t = localStorage.getItem("theme");
  if (t !== "light" && t !== "dark") {
    t = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = t;
} catch (e) {}
`;


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${pixelify.variable} ${vt323.variable} ${nunito.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <noscript>
          <style>{`[data-boot]{display:none}`}</style>
        </noscript>
        <BootScreen />
        <ThemeToggle/>
        <FloatingIcons />
        {children}
      </body>
    </html>
  );
}
