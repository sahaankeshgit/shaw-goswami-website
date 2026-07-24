import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shaw & Goswami Consulting | Where AI Meets Business Goals",
  description: "We help leadership teams pinpoint operational friction and execute AI roadmaps that solve real problems and deliver measurable growth.",
  metadataBase: new URL("https://shawandgoswami.in"),
  openGraph: {
    title: "Shaw & Goswami Consulting",
    description: "Where AI Meets Business Goals",
    url: "https://shawandgoswami.in",
    siteName: "Shaw & Goswami Consulting",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cinzel.variable}`}>
      <head>
        {/* ======================================================== */}
        {/* GOOGLE ANALYTICS (GA4) PLACEHOLDER                       */}
        {/* ======================================================== */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }} />
        */}

        {/* ======================================================== */}
        {/* MICROSOFT CLARITY PLACEHOLDER                            */}
        {/* ======================================================== */}
        {/*
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "XXXXXXXXXX");
          `
        }} />
        */}
      </head>
      <body>
        <Header />
        <main style={{ paddingTop: "80px", flex: "1 0 auto" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
