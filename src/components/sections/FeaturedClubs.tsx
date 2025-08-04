/**
 * Componente FeaturedClubs - Sección de clubes destacados
 *
 * Muestra una selección curada de los clubes más populares y mejor valorados.
 * Cada tarjeta de club incluye:
 * - Imagen representativa
 * - Nombre y ubicación
 * - Categoría y calificación
 * - Información sobre eventos actuales
 * - Botón para ver más detalles
 *
 * Diseño nocturno con organización visual única y asimétrica.
 */

import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

// Datos de ejemplo para los clubes destacados
const featuredClubs = [
  {
    id: 1,
    name: "Club Vertigo",
    location: "Zona Rosa",
    category: "Discoteca",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1571266028243-d220c90c0304?w=300&h=300&fit=crop&crop=center",
    currentEvent: "Noche Electrónica",
    description: "La experiencia nocturna más exclusiva de Bogotá",
    features: ["DJ Internacional", "Terraza VIP", "Coctelería Premium"],
  },
  {
    id: 2,
    name: "Neon Lounge",
    location: "Chapinero",
    category: "Lounge",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1549451371-64aa98a6f816?w=300&h=300&fit=crop&crop=center",
    currentEvent: "Jazz Night",
    description: "Ambiente sofisticado con las mejores vistas de la ciudad",
    features: ["Vista Panorámica", "Live Music", "Menú Gourmet"],
  },
  {
    id: 3,
    name: "Underground",
    location: "Centro",
    category: "Bar",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop&crop=center",
    currentEvent: "Rock en Vivo",
    description: "El epicentro de la música alternativa bogotana",
    features: ["Bandas en Vivo", "Ambiente Único", "Cerveza Artesanal"],
  },
  {
    id: 4,
    name: "Sky Rooftop",
    location: "Norte",
    category: "Rooftop",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1574391584476-5c84f8592905?w=300&h=300&fit=crop&crop=center",
    currentEvent: "Sunset Party",
    description: "Celebra bajo las estrellas en el mejor rooftop",
    features: ["Vista 360°", "Pool Party", "Coctelería Molecular"],
  },
];

export const FeaturedClubs = () => {
  return (
    <section className="py-20 relative">
      {/* Efectos de fondo con patrón hexagonal */}
      <div className="absolute inset-0 bg-night-gradient-alt"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(220, 20, 60, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(139, 0, 139, 0.05) 0%, transparent 50%)
        `,
        }}
      ></div>

      {/* ELEMENTOS NEÓN DECORATIVOS ÚNICOS PARA CLUBES */}

      {/* Lado izquierdo - DJ y platos giratorios */}
      <div className="absolute left-4 top-1/4 transform -translate-y-1/2 opacity-15 lg:opacity-25">
        <div className="relative w-20 h-32 lg:w-24 lg:h-40">
          <svg
            viewBox="0 0 120 160"
            className="w-full h-full fill-none stroke-purple-400 stroke-2"
          >
            {/* Plato superior */}
            <circle
              cx="40"
              cy="40"
              r="25"
              className="animate-spin-slow"
              strokeWidth="2"
            />
            <circle
              cx="40"
              cy="40"
              r="15"
              fill="rgba(139, 0, 139, 0.3)"
              className="animate-pulse"
            />
            <circle cx="40" cy="40" r="3" fill="rgba(255, 255, 255, 0.8)" />

            {/* Plato inferior */}
            <circle
              cx="80"
              cy="80"
              r="25"
              className="animate-spin-slow"
              strokeWidth="2"
              style={{ animationDirection: "reverse", animationDelay: "1s" }}
            />
            <circle
              cx="80"
              cy="80"
              r="15"
              fill="rgba(220, 20, 60, 0.3)"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <circle cx="80" cy="80" r="3" fill="rgba(255, 255, 255, 0.8)" />

            {/* Mixer en el centro */}
            <rect x="50" y="55" width="20" height="15" rx="2" strokeWidth="1" />
            <circle
              cx="55"
              cy="62"
              r="2"
              fill="rgba(255, 0, 0, 0.8)"
              className="animate-pulse"
            />
            <circle
              cx="65"
              cy="62"
              r="2"
              fill="rgba(0, 255, 0, 0.8)"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />

            {/* Ondas de sonido */}
            <path
              d="M20 100 Q30 95 40 100 T60 100"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
            />
            <path
              d="M25 110 Q35 105 45 110 T65 110"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.4"
              style={{ animationDelay: "0.5s" }}
            />
          </svg>

          {/* Efectos de luces */}
          <div className="absolute top-8 left-8 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-16 right-4 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        </div>

        <div className="mt-2 text-xs text-purple-400/60 font-bold tracking-wider transform rotate-90 origin-bottom-left">
          DJ ZONE
        </div>
      </div>

      {/* Lado derecho - Luces y laser show */}
      <div className="absolute right-4 top-1/3 transform -translate-y-1/2 opacity-15 lg:opacity-25">
        <div className="relative w-16 h-40 lg:w-20 lg:h-48">
          <svg
            viewBox="0 0 80 192"
            className="w-full h-full fill-none stroke-red-400 stroke-1"
          >
            {/* Estructura del foco */}
            <rect x="30" y="20" width="20" height="15" rx="2" strokeWidth="2" />
            <line x1="40" y1="35" x2="40" y2="45" strokeWidth="2" />

            {/* Rayos de luz divergentes */}
            <path
              d="M40 45 L20 80"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.8"
            />
            <path
              d="M40 45 L35 85"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
              style={{ animationDelay: "0.2s" }}
            />
            <path
              d="M40 45 L40 90"
              strokeWidth="2"
              className="animate-pulse"
              opacity="0.9"
              style={{ animationDelay: "0.1s" }}
            />
            <path
              d="M40 45 L45 85"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.6"
              style={{ animationDelay: "0.3s" }}
            />
            <path
              d="M40 45 L60 80"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.8"
              style={{ animationDelay: "0.4s" }}
            />

            {/* Segundo foco */}
            <rect
              x="25"
              y="100"
              width="20"
              height="15"
              rx="2"
              strokeWidth="2"
            />
            <line x1="35" y1="115" x2="35" y2="125" strokeWidth="2" />

            {/* Rayos del segundo foco */}
            <path
              d="M35 125 L15 160"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.7"
              style={{ animationDelay: "0.6s" }}
            />
            <path
              d="M35 125 L30 165"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.5"
              style={{ animationDelay: "0.8s" }}
            />
            <path
              d="M35 125 L35 170"
              strokeWidth="2"
              className="animate-pulse"
              opacity="0.8"
              style={{ animationDelay: "0.7s" }}
            />
            <path
              d="M35 125 L40 165"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.5"
              style={{ animationDelay: "0.9s" }}
            />
            <path
              d="M35 125 L55 160"
              strokeWidth="1"
              className="animate-pulse"
              opacity="0.7"
              style={{ animationDelay: "1s" }}
            />

            {/* Partículas de brillo */}
            <circle
              cx="25"
              cy="70"
              r="1"
              fill="rgba(255, 255, 255, 0.8)"
              className="animate-bounce"
            />
            <circle
              cx="55"
              cy="75"
              r="0.5"
              fill="rgba(255, 255, 255, 0.6)"
              className="animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="45"
              cy="65"
              r="0.8"
              fill="rgba(255, 255, 255, 0.9)"
              className="animate-bounce"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>

        <div className="mt-2 text-xs text-red-400/60 font-bold tracking-wider transform -rotate-90 origin-bottom-right">
          LASER SHOW
        </div>
      </div>

      {/* Centro superior - Bola de discoteca */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-20 lg:opacity-30">
        <div className="relative w-12 h-12 lg:w-16 lg:h-16">
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full fill-none stroke-purple-400 stroke-1"
          >
            {/* Bola principal */}
            <circle
              cx="32"
              cy="32"
              r="20"
              strokeWidth="2"
              className="animate-spin-slow"
            />

            {/* Cuadrados de espejo */}
            <rect
              x="25"
              y="20"
              width="4"
              height="4"
              fill="rgba(255, 255, 255, 0.8)"
              className="animate-pulse"
            />
            <rect
              x="35"
              y="25"
              width="4"
              height="4"
              fill="rgba(255, 255, 255, 0.6)"
              className="animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <rect
              x="30"
              y="35"
              width="4"
              height="4"
              fill="rgba(255, 255, 255, 0.9)"
              className="animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
            <rect
              x="20"
              y="30"
              width="4"
              height="4"
              fill="rgba(255, 255, 255, 0.7)"
              className="animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
            <rect
              x="40"
              y="40"
              width="4"
              height="4"
              fill="rgba(255, 255, 255, 0.5)"
              className="animate-pulse"
              style={{ animationDelay: "0.8s" }}
            />

            {/* Cadena de soporte */}
            <line x1="32" y1="12" x2="32" y2="5" strokeWidth="1" />
            <circle cx="32" cy="5" r="2" strokeWidth="1" />

            {/* Reflejos de luz */}
            <path
              d="M32 32 L50 20"
              strokeWidth="0.5"
              opacity="0.6"
              className="animate-pulse"
            />
            <path
              d="M32 32 L15 45"
              strokeWidth="0.5"
              opacity="0.4"
              className="animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
          </svg>

          {/* Destellos */}
          <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con diseño asimétrico */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            {/* Título principal */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Decoración superior */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-red-500/50"></div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-neon block transform skew-x-6">
                    CLUBES
                  </span>
                  <span className="text-white block ml-8 transform -skew-x-3">
                    destacados
                  </span>
                </h2>

                <p className="text-xl text-gray-300 max-w-2xl transform skew-x-1">
                  Los lugares más{" "}
                  <span className="text-red-400 font-semibold">exclusivos</span>{" "}
                  y
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    populares
                  </span>{" "}
                  de Bogotá
                </p>

                {/* Decoración inferior */}
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/50"></div>
              </div>
            </div>

            {/* CTA en el encabezado */}
            <div className="lg:col-span-1 flex justify-start lg:justify-end">
              <Button
                variant="outline"
                size="lg"
                className="transform hover:scale-105"
              >
                🎯 Ver Todos
              </Button>
            </div>
          </div>
        </div>

        {/* Grid de clubes con layout alternado */}
        <div className="space-y-12">
          {/* Primera fila - 3 clubes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredClubs.slice(0, 3).map((club, index) => (
              <div
                key={club.id}
                className={`transform ${
                  index % 2 === 0 ? "lg:translate-y-8" : ""
                }`}
              >
                <ClubCard club={club} featured={index === 1} />
              </div>
            ))}
          </div>

          {/* Segunda fila - 1 club centrado */}
          <div className="flex justify-center">
            <div className="w-full max-w-md transform lg:scale-110">
              <ClubCard club={featuredClubs[3]} featured={true} />
            </div>
          </div>
        </div>

        {/* Sección de estadísticas hexagonales */}
        <div className="mt-20 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Clubes Elite", icon: "🏢" },
              { value: "15K+", label: "Usuarios VIP", icon: "👥" },
              { value: "24/7", label: "Disponibilidad", icon: "🕐" },
              { value: "95%", label: "Satisfacción", icon: "⭐" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                  {/* Hexágono */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 transition-all duration-300 group-hover:from-red-500/40 group-hover:to-purple-500/40"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  ></div>
                  <span className="relative text-2xl">{stat.icon}</span>
                </div>
                <div className="text-2xl font-bold text-neon mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente ClubCard mejorado
const ClubCard = ({
  club,
  featured = false,
}: {
  club: (typeof featuredClubs)[0];
  featured?: boolean;
}) => {
  return (
    <Card
      className={`group relative overflow-hidden ${
        featured ? "ring-2 ring-red-500/50" : ""
      }`}
      onClick={() => {
        console.log(`Navegando al club: ${club.name}`);
      }}
    >
      {/* Badge de destacado */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-gradient-to-r from-red-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
            ⭐ DESTACADO
          </div>
        </div>
      )}

      {/* Imagen del club con animación */}
      <div className="relative text-center mb-6">
        <div className="group-hover:scale-110 transition-transform duration-500 animate-float">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-500/30 group-hover:border-red-500/60 transition-colors duration-300 shadow-lg shadow-red-500/20">
            <img
              src={club.image}
              alt={`${club.name} club interior`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback en caso de que la imagen no cargue
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML =
                    '<div class="w-full h-full bg-gradient-to-br from-red-500/20 to-purple-500/20 flex items-center justify-center text-4xl">🎪</div>';
                }
              }}
            />
          </div>
        </div>

        {/* Círculos decorativos */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-4 h-4 bg-red-500/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Información principal */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
          {club.name}
        </h3>
        <p className="text-gray-400 text-sm mb-3">
          📍 {club.location} • 🎭 {club.category}
        </p>

        {/* Calificación con estrellas */}
        <div className="flex items-center justify-center space-x-1 mb-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(club.rating)
                    ? "text-yellow-400"
                    : "text-gray-600"
                }`}
              >
                ⭐
              </span>
            ))}
          </div>
          <span className="text-white font-semibold ml-2">{club.rating}</span>
        </div>
      </div>

      {/* Evento actual con diseño especial */}
      <div className="relative mb-6">
        <div className="bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 rounded-lg p-4 border border-red-500/30 relative overflow-hidden">
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>

          <div className="relative z-10 text-center">
            <p className="text-red-300 text-sm font-semibold mb-1">
              🎉 EVENTO HOY
            </p>
            <p className="text-white font-bold">{club.currentEvent}</p>
          </div>
        </div>
      </div>

      {/* Descripción */}
      <p className="text-gray-300 text-sm text-center mb-6 line-clamp-2">
        {club.description}
      </p>

      {/* Características con iconos */}
      <div className="space-y-2 mb-6">
        {club.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
          >
            <span className="text-red-400 mr-3 text-lg">•</span>
            <span className="flex-1">{feature}</span>
          </div>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="space-y-3">
        <Button variant="primary" size="sm" className="w-full">
          🎫 Ver Detalles
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full text-purple-400 border-purple-500/30 hover:bg-purple-500/20"
        >
          📅 Reservar Mesa
        </Button>
      </div>

      {/* Efecto de hover en el borde */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(220, 20, 60, 0.3) 50%, transparent 70%)",
            animation: "spin 3s linear infinite",
          }}
        ></div>
      </div>
    </Card>
  );
};
