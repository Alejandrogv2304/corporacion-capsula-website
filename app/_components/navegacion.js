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

