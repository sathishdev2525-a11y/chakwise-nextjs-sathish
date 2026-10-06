import type { Metadata } from "next";
import { fontVariables } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chakwise - Wisdom-Driven Wealth Advisory",
  description:
    "Combining market intelligence with investor psychology to build enduring wealth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="min-h-screen bg-ink text-text antialiased">
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}
