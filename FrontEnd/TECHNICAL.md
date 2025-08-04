# 🛠️ NightClubFinder - Documentación Técnica

**Guía técnica para desarrolladores y contribuidores**

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez del código
- **Vite** - Herramienta de build ultrarrápida
- **Tailwind CSS 4** - Framework de CSS utilitario para diseño responsivo

### Herramientas de Desarrollo

- **ESLint** - Linting y análisis de código
- **PostCSS** - Procesamiento de CSS
- **Git** - Control de versiones

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Beto18v/NightClub.git
   cd NightClubFinder
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   - La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Construye la aplicación para producción
npm run lint       # Ejecuta ESLint para análisis de código
npm run preview    # Previsualiza la build de producción
```

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── ui/             # Componentes básicos (Button, Card, Input)
│   ├── layout/         # Componentes de layout (Header, Footer)
│   └── sections/       # Secciones específicas de páginas
├── pages/              # Páginas principales de la aplicación
└── index.css           # Estilos globales y configuraciones CSS
```

## 🧩 Componentes Principales

### Componentes UI Base

- **Button** - Botones con efectos neón personalizables

  - Variantes: primary, secondary, outline
  - Tamaños: sm, md, lg
  - Estados: hover, active, disabled

- **Card** - Tarjetas con glassmorphism effect

  - Efectos de hover y animaciones
  - Bordes neón opcionales
  - Contenido flexible

- **Input** - Campos de entrada con tema nocturno
  - Validación integrada
  - Estados de error y éxito
  - Placeholder personalizable

### Layout Components

- **Header** - Navegación principal con logo y menú responsivo

  - Logo animado con efectos neón
  - Navegación adaptativa
  - Botones de acción principales

- **Footer** - Pie de página con enlaces e información legal
  - Enlaces organizados por categorías
  - Newsletter de suscripción
  - Información legal y contacto

### Secciones

- **HeroSection** - Sección principal con búsqueda

  - Formulario de búsqueda avanzada
  - Efectos visuales de fondo
  - Call-to-action prominente

- **FeaturedClubs** - Clubes destacados con información detallada

  - Tarjetas de clubes con imágenes
  - Información de ubicación y horarios
  - Sistema de ratings

- **FeaturesSection** - Características y beneficios de la plataforma
  - Grid de características
  - Iconografía representativa
  - Descripciones detalladas

## 🎨 Guía de Estilos

### Paleta de Colores

- **Primary:** Rojo neón (#dc143c)
- **Secondary:** Púrpura (#8b008b)
- **Background:** Negro degradado
- **Text:** Blanco y grises

### Animaciones Personalizadas

- **animate-pulse-neon** - Efecto de pulso neón
- **animate-float** - Flotación suave
- **animate-floating-particles** - Partículas flotantes
- **animate-gradient-flow** - Flujo de gradiente
- **animate-spin-slow** - Rotación lenta

### Clases CSS Principales

- **text-neon** - Texto con efecto neón rojo
- **text-neon-secondary** - Texto con efecto neón púrpura
- **btn-neon** - Botón con efecto neón primario
- **btn-neon-secondary** - Botón con efecto neón secundario
- **card-glass** - Tarjeta con efecto glassmorphism
- **bg-night-gradient** - Fondo con gradiente nocturno

## 🤝 Guías de Contribución

### Estándares de Código

- Todo el código debe estar comentado en español
- Componentes documentados con propósito y uso
- Naming conventions claras y descriptivas
- Estructura modular y mantenible

### Comentarios y Documentación

- **Componentes:** Cada componente incluye documentación JSDoc
- **Funciones:** Explicación clara del propósito y parámetros
- **Secciones:** Descripción detallada de la funcionalidad
- **Estilos:** Comentarios explicativos para clases CSS personalizadas

### Estructura de Componentes

```tsx
/**
 * Componente [Nombre] - [Descripción breve]
 *
 * [Descripción detallada del propósito]
 * - Característica 1
 * - Característica 2
 * - Característica 3
 */

import { /* dependencias */ } from "...";

// Tipos y interfaces si son necesarios
interface Props {
  // definiciones de props
}

// Datos constantes si los hay
const data = [
  // datos del componente
];

export const ComponentName = ({ props }: Props) => {
  return (
    // JSX del componente
  );
};
```

### Convenciones de Naming

- **Componentes:** PascalCase (`Button`, `HeaderSection`)
- **Archivos:** PascalCase para componentes (`Button.tsx`)
- **Variables:** camelCase (`isVisible`, `userCount`)
- **Constantes:** UPPER_SNAKE_CASE (`MAX_CLUBS`, `API_ENDPOINT`)
- **CSS Classes:** kebab-case (`btn-neon`, `card-glass`)

## 🔧 Configuración de Desarrollo

### ESLint

El proyecto usa ESLint con configuración para React y TypeScript:

```json
{
  "extends": [
    "@eslint/js",
    "typescript-eslint",
    "plugin:react-hooks/recommended"
  ]
}
```

### Vite Configuration

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### TypeScript Configuration

El proyecto usa configuración estricta de TypeScript para mejor type safety.

## 📦 Build y Deployment

### Build de Producción

```bash
npm run build
```

Genera:

- **HTML:** ~0.46 kB (0.30 kB gzipped)
- **CSS:** ~51.80 kB (8.59 kB gzipped)
- **JavaScript:** ~238.65 kB (69.20 kB gzipped)

## 🐛 Debugging y Testing

### Herramientas de Debug

- React Developer Tools
- Vite HMR (Hot Module Replacement)
- Console logging con categorías

### Estructura de Testing (Preparada)

```
tests/
├── components/     # Tests de componentes
├── utils/          # Tests de utilidades
└── integration/    # Tests de integración
```

## 📚 Recursos Adicionales

### Documentación de Dependencias

- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Herramientas Recomendadas

- **VS Code** con extensiones para React y TypeScript
- **Chrome DevTools** para debugging
- **Git** con conventional commits
