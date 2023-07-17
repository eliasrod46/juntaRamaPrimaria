import axios from "./axios";

export const getDocentesRequest = async () => axios.get("/docentes");

export const getDocenteRequest = async (id) => axios.get(`/docentes/${id}`);

export const createDocenteRequest = async (docente) => axios.post("/docentes", docente);

export const updateDocenteRequest = async (docente) =>
  axios.put(`/docentes/${docente._id}`, docente);

export const deleteDocenteRequest = async (id) => axios.delete(`/docentes/${id}`);

