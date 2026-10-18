import { Manrope, DM_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  title: "LEIZÛR | Architectural Automation & Intelligent Spaces",
  description:
    "Complete architectural automation. Capacitive glass interfaces, intelligent lighting transitions, ecosmart kitchens, and acoustic fabric wall coverings.",
  openGraph: {
    title: "LEIZÛR | Intelligence Built Into Life",
    description: "Advanced automation systems engineered for modern architecture.",
    siteName: "LEIZÛR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable} scroll-smooth`}>
      <body className="bg-[#090909] text-[#f4f3ef] font-sans antialiased selection:bg-[#e7ff39] selection:text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}