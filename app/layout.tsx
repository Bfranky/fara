import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FARA Hotel & Suites | Affordable Accommodation in Alagbado, Lagos",
  description:
    "Book your stay at FARA Hotel & Suites in Ojokoro, Lagos. Comfortable rooms, 24/7 service, secure parking. Rated 3.9/5 stars. Call 0902 613 3762",
  openGraph: {
    title: "FARA Hotel & Suites | Alagbado, Lagos",
    description:
      "Comfortable rooms, 24/7 service & secure parking. Rated 3.9/5 stars. Book now!",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
        width: 1200,
        height: 630,
        alt: "FARA Hotel & Suites Lagos",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${jost.variable} font-jost bg-white text-gray-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
