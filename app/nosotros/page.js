import Image from "next/image";
import image1 from "@/public/about-1.png";
import image2 from "@/public/about-2.jpg";

export const metadata={
    title:'Nosotros'
    };

    export default function Page() {
        return (
          <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
            <div className="col-span-3">
              <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                Bienvenidos a Corporación Cápsula
              </h1>
      
              <div className="space-y-8">
                <p>
                  Donde la tranquilidad y la paz se combinan para brindarte un momento
                  de descanso. Ubicado en el corazón de la ciudad, cerca de tu trabajo.
                  Pero no se trata solo de capsulas. Es una experiencia traída desde 
                  Asia que mejorará tu calidad de vida y te brindará un momento de 
                  paz y tranquilidad en tu ocupado día.

                </p>
                <p>
                    Nuestras 8 capsulas proveen un espacio acogedor para que 
                    disfrutes tu tiempo de descanso en paz y armonía.
                    Sin ningún tipo de ruido, con aire acondicionado y una 
                    serie de elementos relajantes para que disfrutes al máximo
                    tu tiempo de descanso y te desconectes del caos de la ciudad.
                  
                </p>
                <p>
                    Aquí tendrás un espacio de verdadera tranquilidad, para que
                    te relajes un momento durante el día y así mejores tu calidad
                    de vida con un elemnto tan importante como el descanso.
                </p>
              </div>
            </div>
      
            <div className="col-span-2">
              <Image
                src={image1}
                placeholder="blur"
                quality={80}
                alt="Clientes disfrutando de las capsulas"
              />
            </div>
      
            <div className=" relative aspect-square col-span-2">
              <Image src="/about-2.jpg"
              fill
              className="object-cover"
              alt="Fundadores de Corporacion Capsula" />
            </div>
      
            <div className="col-span-3">
              <h1 className="text-4xl mb-10 text-accent-400 font-medium">
                Fundado por jovenes emprendedores
              </h1>
      
              <div className="space-y-8">
                <p>
                  Since 1962, The Wild Oasis has been a cherished family-run retreat.
                  Started by our grandparents, this haven has been nurtured with love
                  and care, passing down through our family as a testament to our
                  dedication to creating a warm, welcoming environment.
                </p>
                <p>
                  Over the years, we&apos;ve maintained the essence of The Wild Oasis,
                  blending the timeless beauty of the mountains with the personal
                  touch only a family business can offer. Here, you&apos;re not just a
                  guest; you&apos;re part of our extended family. So join us at The
                  Wild Oasis soon, where tradition meets tranquility, and every visit
                  is like coming home.
                </p>
      
                <div>
                  <a
                    href="/cabins"
                    className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                  >
                    Explora nuestras Cápsulas
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }