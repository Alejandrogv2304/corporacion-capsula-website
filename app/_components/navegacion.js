import Link from "next/link";

export default function Navegacion() {
    return (
      <nav className="z-10 text-xl">
        <ul className="flex gap-16 items-center">
          <li>
            <Link href="/capsulas" className="hover:text-accent-400 transition-colors">
              Capsulas
            </Link>
          </li>
          <li>
            <Link href="/acerca" className="hover:text-accent-400 transition-colors">
              Acerca de mi
            </Link>
          </li>
          <li>
            <Link
              href="/cuenta"
              className="hover:text-accent-400 transition-colors"
            >
              Visitantes
            </Link>
          </li>
        </ul>
      </nav>
    );
  }