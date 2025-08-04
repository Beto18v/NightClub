/**
 * Componente Input - Campo de entrada con tema nocturno
 *
 * Campo de entrada personalizado con estilos que complementan
 * el tema nocturno de NightClubFinder.
 *
 * @param label - Etiqueta del campo
 * @param type - Tipo de input (text, email, password, etc.)
 * @param placeholder - Texto placeholder
 * @param value - Valor controlado del input
 * @param onChange - Función que maneja el cambio de valor
 * @param required - Si el campo es requerido
 * @param className - Clases CSS adicionales
 * @param error - Mensaje de error para mostrar
 */

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  className?: string;
  error?: string;
  name?: string;
}

export const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  error,
  name,
}: InputProps) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {/* Etiqueta del campo */}
      {label && (
        <label className="text-sm font-medium text-gray-300">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Campo de entrada */}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg
          bg-white/5 backdrop-blur-sm
          border border-white/20
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
          hover:border-white/30
          transition-all duration-300
          ${error ? "border-red-500 focus:ring-red-500" : ""}
        `}
      />

      {/* Mensaje de error */}
      {error && <span className="text-red-400 text-sm">{error}</span>}
    </div>
  );
};
