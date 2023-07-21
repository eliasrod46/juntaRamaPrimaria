import { createContext, useContext, useState, useEffect } from "react";
import {
  createDocenteRequest,
  deleteDocenteRequest,
  getDocenteRequest,
  getDocentesRequest,
  updateDocenteRequest,
} from "../api/docentes";

const DocenteContext = createContext();

export const useDocentes = () => {
  const context = useContext(DocenteContext);
  if (!context)
    throw new Error("useDocentes must be used within a TaskProvider");
  return context;
};

export function DocenteProvider({ children }) {
  const [docentes, setDocentes] = useState([]);
  const [docentesErrors, setDocentesErrors] = useState([]);

  // clear errors after 5 seconds
  useEffect(() => {
    if (docentesErrors.length > 0) {
      const timer = setTimeout(() => {
        setDocentesErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [docentesErrors]);

  const getDocentes = async () => {
    const res = await getDocentesRequest();
    setDocentes(res.data);
  };

  const deleteDocente = async (id) => {
    try {
      const res = await deleteDocenteRequest(id);
      if (res.status === 204)
        setDocentes(docentes.filter((docente) => docente._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createDocente = async (docente) => {
    try {
      const res = await createDocenteRequest(docente);
      // console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
      setDocentesErrors(error.response.data.message);
    }
  };

  const getDocente = async (id) => {
    try {
      const res = await getDocenteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDocente = async (id, docente) => {
    try {
      const res = await updateDocenteRequest(id, docente);
      console.log(res.data);
    } catch (error) {
      // console.log(error.response.data.message);
      setDocentesErrors(error.response.data.message);
    }
  };

  return (
    <DocenteContext.Provider
      value={{
        docentes,
        getDocentes,
        deleteDocente,
        createDocente,
        getDocente,
        updateDocente,
        docentesErrors,
      }}
    >
      {children}
    </DocenteContext.Provider>
  );
}
