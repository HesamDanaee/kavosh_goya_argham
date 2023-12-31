import "@/styles/globals.css";
import type { Metadata } from "next";

// Components
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Kavosh Goya Argham",
  description: "Kavosh Goya Argham company - Accounting",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
