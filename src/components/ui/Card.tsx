/**
 * Componente Card - Tarjeta con efecto glassmorphism
 *
 * Componente reutilizable que crea tarjetas con efecto de vidrio esmerilado
 * y bordes brillantes, ideal para mostrar información de clubes nocturnos.
 *
 * @param children - Contenido de la tarjeta
 * @param className - Clases CSS adicionales
 * @param onClick - Función opcional para hacer la tarjeta clickeable
 * @param hover - Si debe tener efectos de hover más pronunciados
 */

import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const Card = ({
  children,
  className = "",
  onClick,
  hover = true,
}: CardProps) => {
  // Clases base para el efecto glassmorphism
  const baseClasses = "card-glass p-6 relative overflow-hidden";

  // Clases adicionales si es clickeable
  const interactiveClasses = onClick
    ? "cursor-pointer transform hover:scale-105"
    : "";

  // Clases de hover personalizables
  const hoverClasses = hover ? "hover:shadow-red-500/20" : "";

  // Combinamos todas las clases
  const cardClasses = [
    baseClasses,
    interactiveClasses,
    hoverClasses,
    className,
  ].join(" ");

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClick();
              }
            }
          : undefined
      }
    >
      {/* ELEMENTOS NEÓN DECORATIVOS ÚNICOS PARA TARJETAS */}

      {/* Esquina superior izquierda - Circuito electrónico */}
      <div className="absolute top-0 left-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-none stroke-red-400 stroke-1"
        >
          {/* Circuito */}
          <path d="M5 5 L15 5 L15 15 L25 15 L25 25" className="animate-pulse" />
          <path
            d="M20 10 L30 10 L30 20"
            className="animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />

          {/* Nodos del circuito */}
          <circle
            cx="15"
            cy="5"
            r="1.5"
            fill="rgba(220, 20, 60, 0.6)"
            className="animate-pulse"
          />
          <circle
            cx="15"
            cy="15"
            r="1.5"
            fill="rgba(139, 0, 139, 0.6)"
            className="animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <circle
            cx="25"
            cy="15"
            r="1.5"
            fill="rgba(220, 20, 60, 0.8)"
            className="animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
          <circle
            cx="30"
            cy="10"
            r="1.5"
            fill="rgba(139, 0, 139, 0.5)"
            className="animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
        </svg>
      </div>

      {/* Esquina inferior derecha - Ondas de sonido */}
      <div className="absolute bottom-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-none stroke-purple-400 stroke-1"
        >
          {/* Altavoz */}
          <rect x="25" y="20" width="8" height="12" rx="1" strokeWidth="1" />
          <path d="M25 23 L20 20 L20 32 L25 29" strokeWidth="1" />

          {/* Ondas de sonido */}
          <path
            d="M35 22 Q38 26, 35 30"
            strokeWidth="1"
            className="animate-pulse"
            opacity="0.8"
          />
          <path
            d="M37 20 Q41 26, 37 32"
            strokeWidth="1"
            className="animate-pulse"
            opacity="0.6"
            style={{ animationDelay: "0.3s" }}
          />
          <path
            d="M39 18 Q44 26, 39 34"
            strokeWidth="1"
            className="animate-pulse"
            opacity="0.4"
            style={{ animationDelay: "0.6s" }}
          />

          {/* Notas musicales */}
          <circle
            cx="15"
            cy="15"
            r="2"
            fill="rgba(139, 0, 139, 0.3)"
            className="animate-bounce"
          />
          <path d="M17 15 L17 8 L20 9" strokeWidth="1" />

          <circle
            cx="8"
            cy="25"
            r="1.5"
            fill="rgba(220, 20, 60, 0.4)"
            className="animate-bounce"
            style={{ animationDelay: "0.5s" }}
          />
          <path d="M9.5 25 L9.5 20 L12 21" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Borde brillante animado en hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 animate-gradient-flow"></div>
      </div>

      {children}
    </div>
  );
};
