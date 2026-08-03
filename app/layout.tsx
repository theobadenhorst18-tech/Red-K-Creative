import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://redkcreative.co.za"),
  title: "Red K Creative | Design, Illustration & Murals in Nelspruit",
  description:
    "Red K Creative is an independent creative studio in Nelspruit, South Africa, creating bold design, illustration, campaigns, murals and public art.",
  applicationName: "Red K Creative",
  openGraph: {
    title: "Red K Creative | Nelspruit Creative Studio",
    description:
      "Bold design, illustration, campaigns, murals and public art from Nelspruit, South Africa.",
    siteName: "Red K Creative",
    type: "website",
    images: [{ url: "/redk-logo.png", alt: "Red K Creative" }],
  },
  icons: {
    icon: [{ url: "/redk-logo.png", type: "image/png" }],
    shortcut: "/redk-logo.png",
    apple: "/redk-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Red K Creative",
    description:
      "Independent creative studio specialising in design, illustration, campaigns, murals and public art.",
    url: "https://redkcreative.co.za",
    logo: "https://redkcreative.co.za/redk-logo.png",
    image: "https://redkcreative.co.za/redk-logo.png",
    email: "hello@redkcreative.co.za",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nelspruit",
      addressRegion: "Mpumalanga",
      addressCountry: "ZA",
    },
    sameAs: ["https://www.instagram.com/redkcreative/"],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
