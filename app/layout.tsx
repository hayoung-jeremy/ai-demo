import "./globals.css";
import { Play } from "next/font/google";

const inter = Play({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "AI Demo",
  description: "Generated by ALTAVA",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
