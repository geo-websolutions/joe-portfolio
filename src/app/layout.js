import "./globals.css";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";

import Menu from "@/components/Menu";
import SocialCard from "@/components/home/SocialCard";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Joseph Sami",
  description: "Services provided by Joseph Samy an excellent marketing professional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-dark`}>
        <Menu />
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] mt-16">
          {/* Mobile Social Card - Top (shown only on mobile) */}
          <div className="lg:hidden flex items-center justify-center pt-8 pb-12 px-6 sm:px-8">
            <div className="w-full max-w-md">
              <SocialCard />
            </div>
          </div>

          {/* Fixed Social Card - Left Side (Desktop) */}
          <div className="hidden lg:flex fixed left-0 px-6 xl:px-12 2xl:px-20 top-0 h-screen w-1/4 items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <SocialCard />
            </div>
          </div>

          {/* Scrollable Content - Right Side (Desktop) / Below Social Card (Mobile) */}
          <div className="lg:ml-[25%] w-full lg:w-3/4">
            <div className="mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-8 lg:pb-12">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}