/**
 * Componente Footer - Pie de página
 *
 * Footer completo con información importante:
 * - Enlaces de navegación organizados por categorías
 * - Información de contacto
 * - Redes sociales
 * - Avisos legales y tratamiento de datos
 * - Newsletter de suscripción
 */

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 mt-20 relative">
      {/* ELEMENTOS NEÓN DECORATIVOS ÚNICOS PARA FOOTER */}

      {/* Lado izquierdo - Enlaces y conexiones de red */}
      <div className="absolute left-4 top-1/4 transform -translate-y-1/2 opacity-10 lg:opacity-20">
        <div className="relative w-12 h-20 lg:w-16 lg:h-24">
          <svg
            viewBox="0 0 64 96"
            className="w-full h-full fill-none stroke-red-400 stroke-1"
          >
            {/* Cadena de enlaces */}
            <ellipse
              cx="20"
              cy="20"
              rx="8"
              ry="6"
              strokeWidth="2"
              className="animate-pulse"
            />
            <ellipse
              cx="35"
              cy="35"
              rx="8"
              ry="6"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <ellipse
              cx="20"
              cy="50"
              rx="8"
              ry="6"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
            <ellipse
              cx="35"
              cy="65"
              rx="8"
              ry="6"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.9s" }}
            />

            {/* Conexiones entre enlaces */}
            <path
              d="M25 25 Q30 30, 30 30"
              strokeWidth="2"
              className="animate-pulse"
              opacity="0.8"
            />
            <path
              d="M30 40 Q25 45, 25 45"
              strokeWidth="2"
              className="animate-pulse"
              opacity="0.8"
              style={{ animationDelay: "0.4s" }}
            />
            <path
              d="M25 55 Q30 60, 30 60"
              strokeWidth="2"
              className="animate-pulse"
              opacity="0.8"
              style={{ animationDelay: "0.7s" }}
            />

            {/* Chispas de conexión */}
            <circle
              cx="28"
              cy="28"
              r="1"
              fill="rgba(220, 20, 60, 0.8)"
              className="animate-ping"
            />
            <circle
              cx="27"
              cy="47"
              r="1"
              fill="rgba(220, 20, 60, 0.6)"
              className="animate-ping"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="32"
              cy="62"
              r="1"
              fill="rgba(220, 20, 60, 0.9)"
              className="animate-ping"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        <div className="mt-2 text-xs text-red-400/60 font-bold tracking-wider transform rotate-90 origin-bottom-left">
          NETWORK
        </div>
      </div>

      {/* Lado derecho - Email y comunicación */}
      <div className="absolute right-4 top-1/3 transform -translate-y-1/2 opacity-10 lg:opacity-20">
        <div className="relative w-12 h-16 lg:w-16 lg:h-20">
          <svg
            viewBox="0 0 64 80"
            className="w-full h-full fill-none stroke-purple-400 stroke-1"
          >
            {/* Sobre de email */}
            <rect x="15" y="25" width="35" height="25" rx="2" strokeWidth="2" />
            <path
              d="M15 30 L32 40 L50 30"
              strokeWidth="2"
              className="animate-pulse"
            />

            {/* Líneas de email volando */}
            <path
              d="M10 15 L25 15"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
            />
            <path
              d="M8 18 L20 18"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.4"
              style={{ animationDelay: "0.3s" }}
            />
            <path
              d="M12 21 L28 21"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.5"
              style={{ animationDelay: "0.6s" }}
            />

            {/* Ondas de envío */}
            <path
              d="M55 35 Q60 30, 58 40"
              strokeWidth="1"
              className="animate-bounce"
              opacity="0.6"
            />
            <path
              d="M57 37 Q62 32, 60 42"
              strokeWidth="1"
              className="animate-bounce"
              opacity="0.4"
              style={{ animationDelay: "0.2s" }}
            />

            {/* @ símbolo */}
            <circle
              cx="32"
              cy="60"
              r="8"
              strokeWidth="2"
              className="animate-pulse"
            />
            <circle cx="32" cy="60" r="4" strokeWidth="1" />
            <path d="M36 60 L40 60" strokeWidth="2" />

            {/* Notificaciones */}
            <circle
              cx="48"
              cy="20"
              r="3"
              fill="rgba(139, 0, 139, 0.6)"
              className="animate-bounce"
            />
            <text x="48" y="23" fontSize="4" fill="white" textAnchor="middle">
              !
            </text>
          </svg>
        </div>

        <div className="mt-2 text-xs text-purple-400/60 font-bold tracking-wider transform -rotate-90 origin-bottom-right">
          CONTACT
        </div>
      </div>

      {/* Centro inferior - Copyright y legal */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-15 lg:opacity-25">
        <div className="relative w-20 h-8 lg:w-24 lg:h-10">
          <svg
            viewBox="0 0 96 40"
            className="w-full h-full fill-none stroke-purple-400 stroke-1"
          >
            {/* Escudo de protección */}
            <path
              d="M48 5 Q35 5, 35 15 Q35 25, 48 35 Q61 25, 61 15 Q61 5, 48 5"
              strokeWidth="2"
              className="animate-pulse"
            />

            {/* Check mark */}
            <path
              d="M42 20 L46 24 L54 16"
              strokeWidth="2"
              stroke="rgba(0, 255, 0, 0.8)"
              className="animate-pulse"
            />

            {/* Candados laterales */}
            <rect x="20" y="15" width="8" height="10" rx="1" strokeWidth="1" />
            <path d="M22 15 Q24 12, 26 15" strokeWidth="1" />
            <circle cx="24" cy="19" r="1" fill="rgba(255, 255, 255, 0.8)" />

            <rect x="68" y="15" width="8" height="10" rx="1" strokeWidth="1" />
            <path d="M70 15 Q72 12, 74 15" strokeWidth="1" />
            <circle cx="72" cy="19" r="1" fill="rgba(255, 255, 255, 0.8)" />

            {/* Datos protegidos */}
            <circle
              cx="15"
              cy="8"
              r="2"
              fill="rgba(220, 20, 60, 0.4)"
              className="animate-pulse"
            />
            <circle
              cx="81"
              cy="8"
              r="2"
              fill="rgba(220, 20, 60, 0.4)"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Información de la empresa */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌙</span>
              </div>
              <h3 className="text-xl font-bold">
                <span className="text-neon">Night</span>
                <span className="text-white">Club</span>
                <span className="text-neon-secondary">Finder</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La plataforma líder para descubrir y reservar experiencias
              nocturnas únicas en Bogotá. Conectamos personas con los mejores
              clubes y eventos.
            </p>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
              >
                📺
              </a>
            </div>
          </div>

          {/* Enlaces de navegación - Explorar */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Explorar</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#clubes"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Todos los Clubes
                </a>
              </li>
              <li>
                <a
                  href="#eventos"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Eventos de Hoy
                </a>
              </li>
              <li>
                <a
                  href="#promociones"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Promociones
                </a>
              </li>
              <li>
                <a
                  href="#localidades"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Por Localidades
                </a>
              </li>
              <li>
                <a
                  href="#categorias"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Categorías
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces de servicios */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#reservas"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Hacer Reservas
                </a>
              </li>
              <li>
                <a
                  href="#registro-club"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Registrar Club
                </a>
              </li>
              <li>
                <a
                  href="#soporte"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Soporte 24/7
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  API para Desarrolladores
                </a>
              </li>
              <li>
                <a
                  href="#afiliados"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  Programa de Afiliados
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Mantente Conectado
            </h4>
            <p className="text-gray-400 mb-4">
              Recibe las mejores promociones y eventos directamente en tu email.
            </p>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="w-full"
              />
              <Button variant="primary" size="sm" className="w-full">
                Suscribirse
              </Button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Al suscribirte aceptas recibir comunicaciones de NightClubFinder.
              Puedes cancelar en cualquier momento.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Enlaces legales */}
            <div className="flex flex-wrap justify-center lg:justify-start space-x-6 text-sm">
              <a
                href="#privacidad"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#terminos"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Términos de Uso
              </a>
              <a
                href="#tratamiento-datos"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Tratamiento de Datos
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
              >
                Política de Cookies
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center lg:text-right">
              <p>&copy; 2025 NightClubFinder. Todos los derechos reservados.</p>
              <p className="mt-1">
                Plataforma exclusiva para mayores de 18 años.
              </p>
            </div>
          </div>
        </div>

        {/* Aviso importante sobre edad */}
        <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
          <p className="text-red-300 text-sm text-center">
            ⚠️ Esta plataforma es exclusiva para personas mayores de 18 años. Al
            usar nuestros servicios confirmas que cumples con este requisito de
            edad.
          </p>
        </div>
      </div>
    </footer>
  );
};
