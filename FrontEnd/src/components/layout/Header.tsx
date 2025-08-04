/**
 * Componente Header - Barra de navegación principal
 *
 * Cabecera principal de NightClubFinder que incluye:
 * - Logo con efecto neón
 * - Navegación principal
 * - Botón de registro/login
 */

import { Button } from "../ui/Button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre de la aplicación */}
          <div className="flex items-center space-x-3">
            {/* Icono de la aplicación con efecto neón */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center animate-pulse-neon">
              <span className="text-white font-bold text-lg">🌙</span>
            </div>

            {/* Nombre de la aplicación */}
            <h1 className="text-2xl font-bold">
              <span className="text-neon">Night</span>
              <span className="text-white">Club</span>
              <span className="text-neon-secondary">Finder</span>
            </h1>
          </div>

          {/* Navegación principal - Solo visible en pantallas medianas y grandes */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              Inicio
            </a>
            <a
              href="#clubes"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              Clubes
            </a>
            <a
              href="#eventos"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              Eventos
            </a>
            <a
              href="#promociones"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              Promociones
            </a>
          </nav>

          {/* Botones de acción */}
          <div className="flex items-center space-x-4">
            {/* Botón de login - Solo visible en pantallas medianas y grandes */}
            <button className="hidden md:block text-white hover:text-red-400 transition-colors duration-300 font-medium">
              Iniciar Sesión
            </button>

            {/* Botón de registro */}
            <Button variant="primary" size="sm">
              Registrarse
            </Button>

            {/* Botón de menú móvil - Solo visible en pantallas pequeñas */}
            <button className="md:hidden text-white hover:text-red-400 transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable (inicialmente oculto) */}
      {/* En una implementación completa, esto se controlaría con estado local */}
      <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10 hidden">
        <div className="px-4 py-4 space-y-3">
          <a
            href="#inicio"
            className="block text-white hover:text-red-400 transition-colors duration-300 font-medium py-2"
          >
            Inicio
          </a>
          <a
            href="#clubes"
            className="block text-white hover:text-red-400 transition-colors duration-300 font-medium py-2"
          >
            Clubes
          </a>
          <a
            href="#eventos"
            className="block text-white hover:text-red-400 transition-colors duration-300 font-medium py-2"
          >
            Eventos
          </a>
          <a
            href="#promociones"
            className="block text-white hover:text-red-400 transition-colors duration-300 font-medium py-2"
          >
            Promociones
          </a>
          <button className="block text-white hover:text-red-400 transition-colors duration-300 font-medium py-2 w-full text-left">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};
