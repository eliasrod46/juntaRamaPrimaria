import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { DocenteProvider } from "./context/docentesContext";
import { TaskProvider } from "./context/tasksContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { DashBoardPage } from "./pages/DashBoardPage";
import { DocentesPage } from "./pages/docentes/DocentesPage";
import { DocentePage } from "./pages/docentes/DocentePage";
import { DocenteFormPage } from "./pages/docentes/DocenteFormPage";

function App() {
  return (
    <AuthProvider>
      <DocenteProvider>
        <TaskProvider>
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
                  <Route path="/update-docente/:id" element={<DocenteFormPage />} />
                  {/* <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<h1>Profile</h1>} /> */}
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
        </TaskProvider>
      </DocenteProvider>

    </AuthProvider>
  );
}

export default App;
