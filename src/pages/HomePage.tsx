/**
 * Página Principal (Home) - NightClubFinder
 *
 * Esta es la página de inicio que los usuarios ven al acceder a la aplicación.
 * Combina todos los componentes principales para crear una experiencia
 * cohesiva y atractiva que representa la esencia de NightClubFinder.
 *
 * Estructura de la página:
 * 1. Header con navegación
 * 2. HeroSection - Sección principal con búsqueda
 * 3. FeaturedClubs - Clubes destacados
 * 4. FeaturesSection - Características y beneficios
 * 5. Footer - Información adicional y enlaces
 *
 */

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { FeaturedClubs } from "../components/sections/FeaturedClubs";
import { FeaturesSection } from "../components/sections/FeaturesSection";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-night-gradient">
      {/* Navegación superior */}
      <Header />

      {/* Contenido principal */}
      <main>
        {/* Sección hero con búsqueda principal */}
        <HeroSection />

        {/* Clubes destacados */}
        <FeaturedClubs />

        {/* Características y beneficios */}
        <FeaturesSection />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
};
