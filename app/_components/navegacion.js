
// // "use client";// // import { useState } from "react";
// import Link from "next/link";
// import {auth} from "../_lib/auth";

// export default async function Navegacion() {
//   // const [isOpen, setIsOpen] = useState(false); // Estado para controlar la apertura del menú

//   // const toggleMenu = () => {
//   //   setIsOpen(!isOpen); // Cambiar el estado de apertura del menú
//   // };

//   const session = await auth ();
//   console.log(session);
//   return (
//     <nav className="z-10 text-xl">
//       {/* Botón del menú hamburguesa para pantallas menores a 650px */}
//       <div className="md:hidden flex items-center justify-between p-4">
//         <button onClick={toggleMenu} className="text-accent-400">
//           {/* Icono del menú hamburguesa */}
//           {isOpen ? (
//             <span className="material-icons">X</span> // Cambia por una imagen si lo prefieres
//           ) : (
//             <span className="material-icons">Zonas</span> // Cambia por una imagen si lo prefieres
//           )}
//         </button>
//       </div>

//       {/* Menú de navegación */}
//       <ul className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
//         <li>
//           <Link href="/capsulas" className="hover:text-accent-400 transition-colors">
//             Cápsulas
//           </Link>
//         </li>
//         <li>
//           <Link href="/nosotros" className="hover:text-accent-400 transition-colors">
//             Nosotros
//           </Link>
//         </li>
//         <li>
//           <Link href="/cuenta" className="hover:text-accent-400 transition-colors">
//             Visitantes
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/capsulas"
            className="hover:text-accent-400 transition-colors"
          >
            Cápsulas
          </Link>
        </li>
        <li>
          <Link
            href="/nosotros"
            className="hover:text-accent-400 transition-colors"
          >
            Nosotros
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/cuenta"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Zona de invitados</span>
            </Link>
          ) : (
            <Link
              href="/cuenta"
              className="hover:text-accent-400 transition-colors"
            >
              Zona de invitados
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

