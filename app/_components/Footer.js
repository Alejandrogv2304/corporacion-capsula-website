import Link from "next/link";
import Github from "@/public/icone-github-verde.png";
import Linkedin from "@/public/icono-linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="mb-4">
          © {new Date().getFullYear()} Desarrollo Web UIS. Todos los derechos reservados.
        </p>
        <Link href="/nosotros" className="mb-4 hover:text-yellow-400 transition-colors">
          Contáctanos
        </Link>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/Alejandrogv2304/corporacion-capsula-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <img src={Github.src} alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-gomez-a2452320a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <img src={Linkedin.src} alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
