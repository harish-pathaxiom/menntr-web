import type { Metadata, Viewport } from "next";
import "./globals.css";
import SecurityBlocker from "@/components/SecurityBlocker";

export const metadata: Metadata = {
  title: "Menntr - Smarter Campus Management",
  description:
    "One platform to run academics, assessments, and placements at scale",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SecurityBlocker />
        {children}
      </body>
    </html>
  );
}
