import type { Metadata } from "next";
import { Amiri, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";
import Topbar from "./components/Topbar";
import Sidebar from "./dua/Sidebar";
import Middlebar from "./components/Middlebar";
import Endbar from "./dua/Endbar";





const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: "400", // Or add multiple weights like: ["400", "700"]
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable} antialiased`}>

        <main className="grid grid-cols-26 absolute top-0">
          <div className="">
            <Navber />
          </div>
          <div className="col-span-25">
            <Topbar />
            <div className="bg-white h-screen grid grid-cols-16 ">
              <div className="col-span-3 border-r-[1px] border-[#E1EBE1] bg-[#F8F9F8]">
                <Sidebar />
              </div>
              <div className="col-span-10 overflow-y-scroll">
                <Middlebar />
                {children}
              </div>
              <div className="col-span-3 border-l-[1px] border-[#E1EBE1] ">
                <Endbar />
              </div>

            </div>

            
          </div>
        </main>
      </body>
    </html>
  );
}
