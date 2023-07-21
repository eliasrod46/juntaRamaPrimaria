import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { DocenteProvider } from "./context/docentesContext";
import { ConceptProvider } from "./context/conceptsContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import { DashBoardPage } from "./pages/DashBoardPage";
{
  /* Auth */
}
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
{
  /* Docentes */
}
import { DocentesPage } from "./pages/docentes/DocentesPage";
import { DocentePage } from "./pages/docentes/DocentePage";
import { DocenteFormPage } from "./pages/docentes/DocenteFormPage";
{
  /* Concepts */
}
import { ConceptPage } from "./pages/concepts/ConceptPage";
import { ConceptsPage } from "./pages/concepts/ConceptsPage";
import { ConceptFormPage } from "./pages/concepts/ConceptFormPage";

function App() {
  return (
    <AuthProvider>
      <DocenteProvider>
        <ConceptProvider>
          <BrowserRouter>
            <main className="container content-container mx-auto px-10 md:px-0">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<DashBoardPage />} />
                  {/* Docentes */}
                  <Route path="/docentes" element={<DocentesPage />} />
                  <Route path="/docente/:id" element={<DocentePage />} />
                  <Route path="/add-docente" element={<DocenteFormPage />} />
                  <Route
                    path="/update-docente/:id"
                    element={<DocenteFormPage />}
                  />
                  {/* Concepts */}
                  <Route path="/concepts/" element={<ConceptsPage />} />
                  <Route path="/concepts/:did" element={<ConceptPage />} />
                  <Route
                    path="/add-concept/:did"
                    element={<ConceptFormPage />}
                  />
                  {/*<Route path="/profile" element={<h1>Profile</h1>} /> */}
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </ConceptProvider>
      </DocenteProvider>
    </AuthProvider>
  );
}

export default App;
