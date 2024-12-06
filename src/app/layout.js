
import "./globals.css";
import Header from "@/components/layout/Header";
import {Jost} from "next/font/google"
import StoreProvider from "@/components/layout/StoreProvider";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";
import Whatsapp from "@/components/layout/Whatsapp";
import InitAos from "@/components/InitAos";


const jost = Jost({
  subsets: ['latin'],
  weight: ["400", "500" , "600", "700" , "800"],
  variable: "--jost-font"
  
})
export const metadata = {
  title: "Xonier Technologies: Innovating Tomorrow",
  description: "Discover cutting-edge solutions at Xonier Technologies. We specialize in software development, consulting, and digital transformation for a brighter future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        <StoreProvider>
          <InitAos/>

        <Header/>
        <Whatsapp/>
        {children}
        </StoreProvider>
        <Footer/>
       
      </body>
    </html>
  );
}
