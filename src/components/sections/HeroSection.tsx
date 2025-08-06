/**
 * Componente HeroSection - Sección principal de la página de inicio
 *
 * Esta sección es lo primero que ve el usuario al ingresar a NightClubFinder.
 * Incluye:
 * - Título principal con efectos neón
 * - Información destacada que llama la atención inmediatamente
 * - Elementos decorativos neón en los laterales
 * - Buscador principal con filtros básicos
 */

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Efectos de fondo decorativos mejorados */}
      <div className="absolute inset-0 bg-night-gradient"></div>

      {/* Partículas flotantes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-2xl animate-floating-particles"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-purple-500/8 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/4 w-20 h-20 bg-red-400/6 rounded-full blur-lg animate-floating-particles"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-600/7 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* ELEMENTOS NEÓN DECORATIVOS LATERALES */}

      {/* Lado izquierdo - Silueta de mujer bailando */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-20 lg:opacity-30">
        <div className="relative w-24 h-48 lg:w-32 lg:h-64">
          {/* Silueta principal */}
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 100 200"
              className="w-full h-full fill-none stroke-red-400 stroke-2"
            >
              {/* Cabeza */}
              <circle cx="50" cy="20" r="12" className="animate-pulse" />
              {/* Cuerpo */}
              <path
                d="M50 32 L48 60 L50 90 L52 60 Z"
                className="animate-pulse"
                strokeWidth="3"
              />
              {/* Brazo izquierdo extendido */}
              <path
                d="M48 45 L35 40 L30 42"
                className="animate-pulse"
                strokeWidth="2"
              />
              {/* Brazo derecho en cadera */}
              <path
                d="M52 50 L60 55 L58 58"
                className="animate-pulse"
                strokeWidth="2"
              />
              {/* Caderas */}
              <ellipse
                cx="50"
                cy="90"
                rx="15"
                ry="8"
                className="animate-pulse"
                strokeWidth="2"
              />
              {/* Pierna izquierda */}
              <path
                d="M42 98 L40 130 L38 160 L35 180"
                className="animate-pulse"
                strokeWidth="2"
              />
              {/* Pierna derecha */}
              <path
                d="M58 98 L62 130 L60 160 L58 180"
                className="animate-pulse"
                strokeWidth="2"
              />
            </svg>
          </div>
          {/* Efectos de brillo */}
          <div className="absolute top-4 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-12 right-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        </div>

        {/* Texto decorativo */}
        <div className="mt-4 text-xs text-red-400/60 font-bold tracking-wider transform rotate-90 origin-bottom-left">
          VIDA NOCTURNA
        </div>
      </div>

      {/* Lado derecho - Copa y elementos de club */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-20 lg:opacity-30">
        <div className="relative w-20 h-40 lg:w-24 lg:h-48">
          {/* Copa de cóctel */}
          <svg
            viewBox="0 0 80 160"
            className="w-full h-full fill-none stroke-purple-400 stroke-2"
          >
            {/* Copa */}
            <path
              d="M20 40 L60 40 L50 70 L30 70 Z"
              className="animate-pulse"
              strokeWidth="3"
            />
            <line
              x1="40"
              y1="70"
              x2="40"
              y2="120"
              className="animate-pulse"
              strokeWidth="3"
            />
            <line
              x1="25"
              y1="120"
              x2="55"
              y2="120"
              className="animate-pulse"
              strokeWidth="3"
            />
            {/* Líquido */}
            <path
              d="M22 42 L58 42 L48 68 L32 68 Z"
              fill="rgba(220, 20, 60, 0.3)"
              className="animate-pulse"
            />
            {/* Burbujas */}
            <circle
              cx="35"
              cy="50"
              r="2"
              fill="rgba(255, 255, 255, 0.6)"
              className="animate-bounce"
            />
            <circle
              cx="45"
              cy="55"
              r="1.5"
              fill="rgba(255, 255, 255, 0.4)"
              className="animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="40"
              cy="48"
              r="1"
              fill="rgba(255, 255, 255, 0.8)"
              className="animate-bounce"
              style={{ animationDelay: "1s" }}
            />
          </svg>

          {/* Notas musicales flotantes */}
          <div className="absolute -top-8 left-2">
            <span className="text-purple-400 text-lg animate-bounce">♪</span>
          </div>
          <div className="absolute -top-4 right-2">
            <span
              className="text-red-400 text-sm animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              ♫
            </span>
          </div>
          <div className="absolute top-2 -right-4">
            <span
              className="text-purple-400 text-xs animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              ♪
            </span>
          </div>
        </div>

        {/* Texto decorativo */}
        <div className="mt-4 text-xs text-purple-400/60 font-bold tracking-wider transform -rotate-90 origin-bottom-right">
          PREMIUM CLUB
        </div>
      </div>

      {/* Líneas decorativas conectoras */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* INFORMACIÓN DESTACADA AL INICIO - Llamativa y directa */}
        <div className="text-center mb-12">
          {/* Badge de atención */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-red-500/50 rounded-full mb-6">
            <span className="animate-pulse text-red-400 mr-2">🔥</span>
            <span className="text-white font-bold text-sm lg:text-base">
              ¡50+ CLUBES ELITE ESPERÁNDOTE ESTA NOCHE!
            </span>
            <span className="animate-pulse text-purple-400 ml-2">🎉</span>
          </div>

          {/* Estadísticas impactantes */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold text-neon animate-pulse">
                15K+
              </div>
              <div className="text-gray-400 text-xs lg:text-sm">
                Usuarios VIP
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold text-neon-secondary animate-pulse">
                24/7
              </div>
              <div className="text-gray-400 text-xs lg:text-sm">Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-4xl font-bold text-neon animate-pulse">
                95%
              </div>
              <div className="text-gray-400 text-xs lg:text-sm">
                Satisfacción
              </div>
            </div>
          </div>
        </div>

        {/* Título principal con efectos mejorados */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-neon block transform hover:scale-105 transition-transform duration-300">
                DESCUBRE
              </span>
              <span className="text-white block">la mejor</span>
              <span className="text-neon-secondary block transform hover:scale-105 transition-transform duration-300">
                VIDA NOCTURNA
              </span>
            </div>
          </h1>

          {/* Subtítulo llamativo */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Conecta con los{" "}
            <span className="text-red-400 font-semibold">
              clubes más exclusivos
            </span>{" "}
            de Bogotá.
            <br className="hidden lg:block" />
            Vive{" "}
            <span className="text-purple-400 font-semibold">
              experiencias únicas
            </span>{" "}
            cada noche.
          </p>
        </div>

        {/* Buscador principal destacado */}
        <div className="relative mb-10">
          <div className="card-glass p-6 lg:p-8 max-w-4xl mx-auto relative overflow-hidden border-2 border-red-500/30">
            {/* Patrón hexagonal decorativo */}
            <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 opacity-10">
              <div
                className="w-full h-full bg-gradient-to-br from-red-500 to-purple-500"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>

            <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6 text-center">
              🎯 Encuentra tu club perfecto AHORA
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              {/* Campo de búsqueda principal */}
              <div className="md:col-span-2">
                <Input
                  placeholder="🔍 Nombre del club o evento..."
                  className="h-12 text-base"
                />
              </div>

              {/* Selector de localidad */}
              <select className="h-12 px-4 rounded-lg bg-black/40 backdrop-blur-sm border border-red-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent hover:border-red-400/50 transition-all duration-300">
                <option value="" className="bg-black">
                  📍 Localidad
                </option>
                <option value="zona-rosa" className="bg-black">
                  🌹 Zona Rosa
                </option>
                <option value="chapinero" className="bg-black">
                  🏙️ Chapinero
                </option>
                <option value="centro" className="bg-black">
                  🏛️ Centro
                </option>
                <option value="norte" className="bg-black">
                  ⬆️ Norte
                </option>
                <option value="sur" className="bg-black">
                  ⬇️ Sur
                </option>
              </select>

              {/* Selector de categoría */}
              <select className="h-12 px-4 rounded-lg bg-black/40 backdrop-blur-sm border border-purple-500/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent hover:border-purple-400/50 transition-all duration-300">
                <option value="" className="bg-black">
                  🎭 Categoría
                </option>
                <option value="discoteca" className="bg-black">
                  💃 Discoteca
                </option>
                <option value="bar" className="bg-black">
                  🍸 Bar
                </option>
                <option value="lounge" className="bg-black">
                  🛋️ Lounge
                </option>
                <option value="rooftop" className="bg-black">
                  🏢 Rooftop
                </option>
                <option value="karaoke" className="bg-black">
                  🎤 Karaoke
                </option>
              </select>
            </div>

            {/* Botón de búsqueda prominente */}
            <div className="flex justify-center">
              <Button
                variant="primary"
                size="lg"
                className="relative overflow-hidden group px-8 py-4 text-lg font-bold"
              >
                <span className="relative z-10">🚀 BUSCAR CLUBES ELITE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>

          {/* CTAs principales con animaciones llamativas */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center mt-4 mb-12">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Button
                variant="primary"
                size="lg"
                className="w-full lg:w-auto shadow-2xl animate-pulse"
              >
                🎪 Explorar Clubes Elite
              </Button>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Button
                variant="secondary"
                size="lg"
                className="w-full lg:w-auto shadow-2xl"
              >
                🔥 Eventos de Esta Noche
              </Button>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Button
                variant="outline"
                size="lg"
                className="w-full lg:w-auto shadow-2xl"
              >
                💎 Promociones VIP
              </Button>
            </div>
          </div>

          {/* Línea divisoria con efectos */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent w-full max-w-md"></div>
            <div className="mx-4 text-red-400 animate-spin-slow">💫</div>
            <div className="h-px bg-gradient-to-l from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
          </div>

          {/* Mensaje de seguridad y exclusividad */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed">
              🔞{" "}
              <span className="text-red-400 font-semibold">
                Plataforma exclusiva +18
              </span>{" "}
              • 🛡️{" "}
              <span className="text-purple-400 font-semibold">
                Verificación segura
              </span>{" "}
              • ⭐{" "}
              <span className="text-yellow-400 font-semibold">
                Experiencias premium garantizadas
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
