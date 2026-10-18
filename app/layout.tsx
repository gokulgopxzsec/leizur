import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEIZÛR. | Thoughtful Technology. Considered Living.",
  description:
    "Discover LEIZÛR lighting, smart home automation, garbage disposers and wall décor — considered upgrades for modern living.",
  applicationName: "LEIZÛR",
  openGraph: {
    title: "LEIZÛR. | Thoughtful Technology. Considered Living.",
    description:
      "Lighting, intuitive home automation and thoughtful finishing touches for a home that feels unmistakably yours.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
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
