import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";


// Componente principal da aplicação
function App() {

  return (
    <>
      {/* Configuração das rotas usando React Router */}
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Rota principal (Home) */}
          <Route index element={<Home />} />
          {/* Rota para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
