

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import menu from "@/public/menu-hamburguesa-web.png";

// export default function Navegacion() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="z-10 text-xl  shadow-md">
//       {/* Botón del menú hamburguesa */}
//       <div className="md:hidden flex items-center justify-between p-4">
//         <button onClick={toggleMenu} className="text-accent-400">
//             {/* Icono de hamburguesa */}
//           {isOpen ? (
//             <span className="material-icons">X</span>
//           ) : (
//             <span className="material-icons">Ver</span>
//           )}
//         </button>
//       </div>

//       {/* Menú de navegación */}
//       <ul className={`flex flex-wrap gap-4 md:gap-16 items-center justify-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
//         <li className="w-full md:w-auto text-center">
//           <Link href="/capsulas" className="hover:text-accent-400 transition-colors">
//             Cápsulas
//           </Link>
//         </li>
//         <li className="w-full md:w-auto text-center">
//           <Link href="/nosotros" className="hover:text-accent-400 transition-colors">
//             Nosotros
//           </Link>
//         </li>
//         <li className="w-full md:w-auto text-center">
//           <Link href="/cuenta" className="hover:text-accent-400 transition-colors">
//             Visitantes
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navegacion() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar el estado de apertura del menú
  };

  return (
    <nav className="z-10 text-xl">
      {/* Botón del menú hamburguesa para pantallas menores a 650px */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button onClick={toggleMenu} className="text-accent-400">
          {/* Icono del menú hamburguesa */}
          {isOpen ? (
            <span className="material-icons">X</span> // Cambia por una imagen si lo prefieres
          ) : (
            <span className="material-icons">Zonas</span> // Cambia por una imagen si lo prefieres
          )}
        </button>
      </div>

      {/* Menú de navegación */}
      <ul className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <li>
          <Link href="/capsulas" className="hover:text-accent-400 transition-colors">
            Cápsulas
          </Link>
        </li>
        <li>
          <Link href="/nosotros" className="hover:text-accent-400 transition-colors">
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="/cuenta" className="hover:text-accent-400 transition-colors">
            Visitantes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

