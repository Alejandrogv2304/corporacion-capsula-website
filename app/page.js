// import Link from "next/link";
// import Image from "next/image";
// import bg from "@/public/bg.png";

// //Sección Inicio-Home
// export default function Home() {
//   return (
//     <main className="mt-24">
//     <Image src={bg} quality={80} placeholder="blur" className="object-cover object-top" fill alt="Mountains and forests with two cabins" />

//     <div className="relative z-10 text-center">
//       <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
//         Bienvenidos al Paraíso del Descanso.
//       </h1>
//       <Link
//         href="/capsulas"
//         className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
//       >
//         Explora nuestras cápsulas.
//       </Link>
//     </div>
//   </main>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

//Sección Inicio-Home
export default function Home() {
  return (
    <>

      <main className="mt-24">
        <Image
          src={bg}
          quality={80}
          placeholder="blur"
          className="object-cover sm:object-center md:object-bottom lg:object-top"
          fill
          alt="Mountains and forests with two cabins"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
            Bienvenidos al Paraíso del Descanso.
          </h1>
          <Link
            href="/capsulas"
            className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explora nuestras cápsulas.
          </Link>
        </div>

      </main>

    </>
  );
}