import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olije - International Energy & Infrastructure",
  description: "International energy, infrastructure and investment company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
