import { Inter } from "next/font/google";
import "./globals.css";
import './locomotive-scroll.css'

import Menu from "@/components/Menu";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PawsNation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/Images/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
