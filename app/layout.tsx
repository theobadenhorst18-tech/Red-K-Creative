import type { Metadata } from "next";
import "../styles.css";

export const metadata: Metadata = {
  title: "Red K Creative | Design, Illustration & Murals",
  description: "Bold visual solutions through design, illustration, campaigns and murals.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
