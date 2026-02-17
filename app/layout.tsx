import "./globals.css";
import SecurityBlocker from "@/components/SecurityBlocker";

export const metadata = {
  title: "Menntr - Smarter Campus Management",
  description:
    "One platform to run academics, assessments, and placements at scale",
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
