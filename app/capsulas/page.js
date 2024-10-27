import CapsulaCard from "@/app/_components/CapsulaCard";
import Counter from "@/app/_components/Counter";

export const metadata={
    title:'Capsulas'
    };

    export default function Page() {
        // CHANGE
        const cabins = [];
      
        return (
          <div>
            <h1 className="text-4xl mb-5 text-accent-400 font-medium">
              Nuestras cápsulas
            </h1>
            <p className="text-primary-200 text-lg mb-10">
            Descubre una nueva experiencia de descanso en Bucaramanga con nuestras cápsulas de dormir al estilo japonés. Perfectas para viajeros, estudiantes y quienes buscan un refugio cómodo y privado, nuestras cápsulas están diseñadas para ofrecer un ambiente seguro, limpio y climatizado, con iluminación personal y acceso a WiFi. Disfruta de la comodidad y la privacidad de una cápsula moderna y relájate en el corazón de la ciudad. Ya sea para una siesta rápida o una noche completa, nuestras cápsulas son la opción ideal para recargar energías. 
            </p>
      
            {cabins.length > 0 && (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
                {cabins.map((cabin) => (
                  <CapsulaCard cabin={cabin} key={cabin.id} />
                ))}
              </div>
            )}
          </div>
        );
      }