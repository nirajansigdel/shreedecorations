import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { Toaster } from "@/components/ui/toaster";

import { EdgeStoreProvider } from "../lib/edgestore";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ShreeDecoration",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col  h-screen w-full">
          <Navbar />
          <div className="w-full max-w-[1440px] flex-1 mx-auto px-6  ">
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
            <Footer />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
