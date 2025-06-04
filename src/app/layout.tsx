import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preset Lightroom 500+ Exclusive Premium - Download Instant",
  description:
    "Dapatkan 500+ preset Lightroom premium dengan 1x bayar selamanya. Instant download, kompatible di semua device. Diskon 75% hari ini!",
  keywords: "preset lightroom, lightroom presets, preset premium, editing foto, fotografi",
  authors: [{ name: "Preset Lightroom Premium" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "Preset Lightroom 500+ Exclusive Premium",
    description: "Transform your photos instantly with 500+ professional Lightroom presets",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/hCRLV4H.jpeg",
        width: 1200,
        height: 630,
        alt: "Preset Lightroom 500+ Exclusive Premium",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://i.imgur.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2211990365917167');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
               src="https://www.facebook.com/tr?id=2211990365917167&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
