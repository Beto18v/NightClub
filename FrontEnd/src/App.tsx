/**
 * Componente App Principal - NightClubFinder
 *
 * Este es el componente raíz de la aplicación NightClubFinder.
 * Actualmente renderiza la página de inicio, pero está preparado
 * para expandirse con routing y otras páginas en el futuro.
 *
 */

import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
