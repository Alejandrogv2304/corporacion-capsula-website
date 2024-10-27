import Link from "next/link";

export default function Navegacion() {
    return (
      <nav className="z-10 text-xl">
        <ul className="flex gap-16 items-center">
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