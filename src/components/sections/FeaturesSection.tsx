/**
 * Componente FeaturesSection - Sección de características principales
 *
 * Destaca los beneficios y características principales de usar NightClubFinder:
 * - Filtros avanzados de búsqueda
 * - Sistema de reservas
 * - Información en tiempo real
 * - Integración con mapas
 * - Promociones exclusivas
 * - Comunidad de usuarios
 *
 * Esta sección ayuda a los usuarios a entender el valor
 * que proporciona la plataforma.
 */

import { Card } from "../ui/Card";

// Datos de las características principales
const features = [
  {
    id: 1,
    icon: "🔍",
    title: "Búsqueda Inteligente",
    description:
      "Filtra por localidad, categoría, precio y más. Encuentra exactamente lo que buscas.",
    benefits: [
      "Filtros avanzados",
      "Búsqueda por mapa",
      "Resultados personalizados",
    ],
  },
  {
    id: 2,
    icon: "📅",
    title: "Reservas en Tiempo Real",
    description:
      "Reserva tu mesa o entrada directamente desde la app. Sin filas, sin esperas.",
    benefits: [
      "Reservas instantáneas",
      "Confirmación inmediata",
      "Gestión de reservas",
    ],
  },
  {
    id: 3,
    icon: "🎯",
    title: "Eventos y Promociones",
    description:
      "Mantente al día con los mejores eventos y promociones exclusivas.",
    benefits: [
      "Eventos actualizados",
      "Ofertas exclusivas",
      "Alertas personalizadas",
    ],
  },
  {
    id: 4,
    icon: "🗺️",
    title: "Navegación Integrada",
    description:
      "Llega fácilmente con navegación GPS integrada y información de transporte.",
    benefits: [
      "GPS integrado",
      "Rutas optimizadas",
      "Info de transporte público",
    ],
  },
  {
    id: 5,
    icon: "⭐",
    title: "Reseñas Verificadas",
    description:
      "Lee opiniones reales de otros usuarios para tomar la mejor decisión.",
    benefits: [
      "Reseñas verificadas",
      "Calificaciones reales",
      "Fotos de usuarios",
    ],
  },
  {
    id: 6,
    icon: "🔐",
    title: "Acceso Seguro +18",
    description:
      "Plataforma exclusiva para mayores de edad con verificación de identidad.",
    benefits: ["Verificación de edad", "Datos protegidos", "Comunidad segura"],
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      {/* Efectos de fondo */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>

      {/* ELEMENTOS NEÓN DECORATIVOS ÚNICOS PARA CARACTERÍSTICAS */}

      {/* Lado izquierdo - Smartphone y notificaciones */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-15 lg:opacity-25">
        <div className="relative w-16 h-28 lg:w-20 lg:h-36">
          <svg
            viewBox="0 0 80 144"
            className="w-full h-full fill-none stroke-red-400 stroke-2"
          >
            {/* Cuerpo del teléfono */}
            <rect x="20" y="10" width="40" height="70" rx="8" strokeWidth="2" />

            {/* Pantalla */}
            <rect
              x="25"
              y="18"
              width="30"
              height="54"
              rx="3"
              fill="rgba(0, 0, 0, 0.8)"
            />

            {/* Iconos en pantalla */}
            <circle
              cx="30"
              cy="25"
              r="2"
              fill="rgba(220, 20, 60, 0.8)"
              className="animate-pulse"
            />
            <circle
              cx="38"
              cy="25"
              r="2"
              fill="rgba(139, 0, 139, 0.8)"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <circle
              cx="46"
              cy="25"
              r="2"
              fill="rgba(220, 20, 60, 0.6)"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />

            {/* Líneas de texto */}
            <line
              x1="28"
              y1="35"
              x2="48"
              y2="35"
              strokeWidth="1"
              stroke="rgba(255, 255, 255, 0.4)"
            />
            <line
              x1="28"
              y1="40"
              x2="45"
              y2="40"
              strokeWidth="1"
              stroke="rgba(255, 255, 255, 0.3)"
            />
            <line
              x1="28"
              y1="45"
              x2="50"
              y2="45"
              strokeWidth="1"
              stroke="rgba(255, 255, 255, 0.4)"
            />

            {/* Botón home */}
            <circle cx="40" cy="85" r="3" strokeWidth="1" />

            {/* Notificaciones flotantes */}
            <circle
              cx="60"
              cy="15"
              r="6"
              fill="rgba(220, 20, 60, 0.3)"
              strokeWidth="1"
              className="animate-bounce"
            />
            <text
              x="60"
              y="18"
              textAnchor="middle"
              fontSize="8"
              fill="white"
              className="animate-pulse"
            >
              3
            </text>

            <circle
              cx="10"
              cy="40"
              r="5"
              fill="rgba(139, 0, 139, 0.3)"
              strokeWidth="1"
              className="animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <text x="10" y="43" textAnchor="middle" fontSize="6" fill="white">
              !
            </text>

            {/* Ondas wifi */}
            <path
              d="M40 100 Q30 95 35 105"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
            />
            <path
              d="M40 100 Q45 95 50 105"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
              style={{ animationDelay: "0.2s" }}
            />
            <path
              d="M40 100 Q25 90 30 110"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.4"
              style={{ animationDelay: "0.4s" }}
            />
          </svg>
        </div>

        <div className="mt-2 text-xs text-red-400/60 font-bold tracking-wider transform rotate-90 origin-bottom-left">
          TECH ZONE
        </div>
      </div>

      {/* Lado derecho - Red social y conexiones */}
      <div className="absolute right-6 top-1/3 transform -translate-y-1/2 opacity-15 lg:opacity-25">
        <div className="relative w-20 h-32 lg:w-24 lg:h-40">
          <svg
            viewBox="0 0 96 160"
            className="w-full h-full fill-none stroke-purple-400 stroke-1"
          >
            {/* Nodos de usuarios */}
            <circle
              cx="20"
              cy="20"
              r="8"
              strokeWidth="2"
              className="animate-pulse"
            />
            <circle
              cx="50"
              cy="25"
              r="8"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <circle
              cx="75"
              cy="35"
              r="8"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
            <circle
              cx="30"
              cy="60"
              r="8"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
            <circle
              cx="65"
              cy="70"
              r="8"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: "0.8s" }}
            />

            {/* Avatares en los nodos */}
            <circle cx="20" cy="20" r="4" fill="rgba(220, 20, 60, 0.5)" />
            <circle cx="50" cy="25" r="4" fill="rgba(139, 0, 139, 0.5)" />
            <circle cx="75" cy="35" r="4" fill="rgba(220, 20, 60, 0.3)" />
            <circle cx="30" cy="60" r="4" fill="rgba(139, 0, 139, 0.4)" />
            <circle cx="65" cy="70" r="4" fill="rgba(220, 20, 60, 0.6)" />

            {/* Conexiones entre nodos */}
            <line
              x1="20"
              y1="20"
              x2="50"
              y2="25"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
            />
            <line
              x1="50"
              y1="25"
              x2="75"
              y2="35"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
              style={{ animationDelay: "0.3s" }}
            />
            <line
              x1="20"
              y1="20"
              x2="30"
              y2="60"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.4"
              style={{ animationDelay: "0.6s" }}
            />
            <line
              x1="75"
              y1="35"
              x2="65"
              y2="70"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.5"
              style={{ animationDelay: "0.9s" }}
            />
            <line
              x1="30"
              y1="60"
              x2="65"
              y2="70"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
              style={{ animationDelay: "1.2s" }}
            />

            {/* Mensajes flotantes */}
            <rect
              x="15"
              y="90"
              width="25"
              height="12"
              rx="6"
              fill="rgba(220, 20, 60, 0.2)"
              strokeWidth="1"
            />
            <line
              x1="18"
              y1="94"
              x2="35"
              y2="94"
              strokeWidth="0.5"
              stroke="rgba(255, 255, 255, 0.6)"
            />
            <line
              x1="18"
              y1="97"
              x2="32"
              y2="97"
              strokeWidth="0.5"
              stroke="rgba(255, 255, 255, 0.4)"
            />

            <rect
              x="55"
              y="110"
              width="20"
              height="10"
              rx="5"
              fill="rgba(139, 0, 139, 0.2)"
              strokeWidth="1"
            />
            <line
              x1="58"
              y1="113"
              x2="72"
              y2="113"
              strokeWidth="0.5"
              stroke="rgba(255, 255, 255, 0.6)"
            />
            <line
              x1="58"
              y1="116"
              x2="68"
              y2="116"
              strokeWidth="0.5"
              stroke="rgba(255, 255, 255, 0.4)"
            />

            {/* Corazones y likes */}
            <path
              d="M45 100 C45 95, 55 95, 55 100 C55 95, 65 95, 65 100 C65 105, 55 115, 45 100"
              fill="rgba(255, 0, 100, 0.6)"
              className="animate-bounce"
            />
          </svg>
        </div>

        <div className="mt-2 text-xs text-purple-400/60 font-bold tracking-wider transform -rotate-90 origin-bottom-right">
          SOCIAL HUB
        </div>
      </div>

      {/* Centro superior - Cloud/Data */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 opacity-20 lg:opacity-30">
        <div className="relative w-16 h-10 lg:w-20 lg:h-12">
          <svg
            viewBox="0 0 80 48"
            className="w-full h-full fill-none stroke-purple-400 stroke-1"
          >
            {/* Nube principal */}
            <path
              d="M20 30 Q15 20, 25 20 Q30 15, 40 20 Q50 15, 55 20 Q65 20, 60 30 Q65 35, 55 35 L25 35 Q15 35, 20 30"
              strokeWidth="2"
              className="animate-pulse"
            />

            {/* Datos flotando */}
            <circle
              cx="40"
              cy="25"
              r="1"
              fill="rgba(255, 255, 255, 0.8)"
              className="animate-bounce"
            />
            <circle
              cx="45"
              cy="28"
              r="0.8"
              fill="rgba(255, 255, 255, 0.6)"
              className="animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
            <circle
              cx="35"
              cy="30"
              r="1.2"
              fill="rgba(255, 255, 255, 0.9)"
              className="animate-bounce"
              style={{ animationDelay: "0.6s" }}
            />

            {/* Conexión a tierra */}
            <line
              x1="40"
              y1="35"
              x2="40"
              y2="42"
              strokeWidth="1"
              className="animate-pulse"
            />
            <rect x="35" y="42" width="10" height="4" rx="1" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">¿Por qué elegir </span>
            <span className="text-neon">NightClubFinder</span>
            <span className="text-white">?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Hemos diseñado la plataforma perfecta para transformar tu
            experiencia nocturna. Descubre todas las herramientas que tenemos
            para ti.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="text-center group" hover={true}>
              {/* Icono de la característica */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Lista de beneficios */}
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div
                    key={benefitIndex}
                    className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    <span className="text-red-400 mr-3">✓</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Sección de llamada a la acción */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para descubrir la mejor vida nocturna?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya están disfrutando de las mejores
              experiencias nocturnas en Bogotá. Regístrate hoy y recibe
              promociones exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neon">Crear Cuenta Gratis</button>
              <button className="btn-neon-secondary">
                Explorar sin Registro
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
