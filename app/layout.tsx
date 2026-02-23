import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Recall — Stop Repeating Your Own Work",
  description:
    "Track what you don't see. Recall builds a persistent map of your work — detecting patterns, surfacing relevant past solutions, and showing you exactly where your time goes.",
  openGraph: {
    title: "Recall — Stop Repeating Your Own Work",
    description:
      "Track what you don't see. Recall builds a persistent map of your work — detecting patterns, surfacing relevant past solutions.",
    type: "website",
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
