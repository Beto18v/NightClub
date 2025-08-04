/**
 * Componente Button - Botón reutilizable con estilos neón
 *
 * Este componente proporciona un botón personalizable con efectos visuales
 * adaptados al tema nocturno de NightClubFinder.
 *
 * @param children - Contenido del botón (texto, iconos, etc.)
 * @param variant - Variante del estilo ('primary' | 'secondary' | 'outline')
 * @param size - Tamaño del botón ('sm' | 'md' | 'lg')
 * @param onClick - Función que se ejecuta al hacer clic
 * @param className - Clases CSS adicionales para personalización
 * @param disabled - Estado deshabilitado del botón
 */

import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) => {
  // Definimos las clases base según la variante del botón
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";

  // Configuramos los estilos según la variante
  const variantClasses = {
    primary: "btn-neon text-white focus:ring-red-500",
    secondary: "btn-neon-secondary text-white focus:ring-purple-500",
    outline:
      "border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/50",
  };

  // Configuramos los tamaños
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Clases para estado deshabilitado
  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:shadow-none"
    : "cursor-pointer";

  // Combinamos todas las clases
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className,
  ].join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
