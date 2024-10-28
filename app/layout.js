import Logo from "@/app/_components/Logo";
import Navegacion from "@/app/_components/navegacion";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google" ;
import Header from "./_components/Header";
import Footer from "./_components/Footer";


const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin)
export const metadata={
// title:'Corporacion Cápsula'
title:{
  template :"%s Corporacion Capsula",
  default:"Bienvenidos / Corporacion Capsula"
},
description:"Lujoso hotel de cápsulas, localizado en Colombia, UIS, zonas de descanso, Bucaramanga",
};
export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className={` ${josefin.className} antialiased bg-primary-950 
      text-primary-100 min-h-screen flex flex-col relative`}>
        <Header/>
        
        <div className="flex-1 px-8 py-12 grid">
        <main className="max-w-7xl  mx-auto w-full">{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}