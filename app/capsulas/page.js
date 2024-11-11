import CapsulaList from "@/app/_components/CapsulaList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";



export const metadata={
    title:'Capsulas'
    };

    export default async function Page() {
        // CHANGE
       
        return (
          
          <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
              Nuestras cápsulas
            </h1>
            <p className="text-primary-200 text-lg mb-10">
            Descubre una nueva experiencia de descanso en Bucaramanga con nuestras cápsulas de dormir al estilo japonés. Perfectas para viajeros, estudiantes y quienes buscan un refugio cómodo y privado, nuestras cápsulas están diseñadas para ofrecer un ambiente seguro, limpio y climatizado, con iluminación personal y acceso a WiFi. Disfruta de la comodidad y la privacidad de una cápsula moderna y relájate en el corazón de la ciudad. Ya sea para una siesta rápida o una noche completa, nuestras cápsulas son la opción ideal para recargar energías. 
            </p>
            <Suspense fallback={<Spinner/>}>
            <CapsulaList/>
            </Suspense>
          </div>
         
          
        );
      }