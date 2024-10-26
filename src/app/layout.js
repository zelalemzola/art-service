import { Manrope, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Abiya & Co",
  description: "Abiya & Co",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 flex flex-col`}
      >
        <Navbar/>
       <div className="mt-5%">{children}</div> 
      </body>
    </html>
  );
}
