import axios from "./axios";

export const getDocentesRequest = async () => axios.get("/docentes");

export const getDocenteRequest = async (id) => axios.get(`/docentes/${id}`);

export const createDocenteRequest = async (docente) =>
  axios.post("/docentes", docente);

export const deleteDocenteRequest = async (id) =>
  axios.delete(`/docentes/${id}`);

export const updateDocenteRequest = async (id, docente) =>
  axios.put(`/docentes/${id}`, docente);
