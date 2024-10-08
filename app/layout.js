import Logo from "@/app/_components/Logo";
import Navegacion from "@/app/_components/navegacion";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google" ;

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
description:"Lujoso hotel de capsulas, localizado en Colombia, UIS, zonas de descanso, Bucaramanga",
};
export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className={` ${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}>
        <header>
          <Logo/>
          <Navegacion/>
        </header>
        
        <main>{children}</main>
        <footer>Copyright by Corporación Cápsula</footer>
      </body>
    </html>
  );
}