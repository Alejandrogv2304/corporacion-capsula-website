import Github from "@/public/icone-github-verde.png";
import Linkedin from "@/public/icono-linkedin.png";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© {new Date().getFullYear()} Desarrollo Web UIS. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Alejandrogv2304/corporacion-capsula-website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              {/* Ruta de la imagen del icono de GitHub */}
              <img src={Github.src} alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-gomez-a2452320a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              {/* Ruta de la imagen del icono de LinkedIn */}
              <img src={Linkedin.src} alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  