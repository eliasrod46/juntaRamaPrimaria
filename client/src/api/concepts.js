import axios from "./axios";

export const getConceptsRequest = async (did) =>
  axios.get(`/concepts/docente/${did}`);

export const deleteConceptRequest = async (cid, did) =>
  axios.delete(`/concepts/${cid}/docente/${did}`);

export const createConceptRequest = async (did, concept) => {
  return axios.post(`/concepts/docente/${did}`, concept);
};
