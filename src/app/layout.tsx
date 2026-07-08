import type { Metadata } from "next";
import { libre_franklin, dm_sans } from "./font";
import "./globals.css";

import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: "VRWealth",
  description: "Investment Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libre_franklin.variable} ${dm_sans.variable} h-full overflow-x-hidden antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
