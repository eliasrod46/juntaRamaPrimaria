import { createContext, useContext, useState, useEffect } from "react";
import {
  createConceptRequest,
  deleteConceptRequest,
  getConceptsRequest,
} from "../api/concepts";
import { date } from "zod";

const ConceptContext = createContext();

export const useConcepts = () => {
  const context = useContext(ConceptContext);
  if (!context)
    throw new Error("useConcepts must be used within a ConceptProvider");
  return context;
};

export function ConceptProvider({ children }) {
  const [concepts, setConcepts] = useState([]);

  const getConcepts = async (did) => {
    const res = await getConceptsRequest(did);
    setConcepts(res.data);
  };

  const deleteConcept = async (cid, did) => {
    try {
      const res = await deleteConceptRequest(cid, did);
      if (res.status === 204)
        setConcepts(concepts.filter((concept) => concept.id !== cid));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const createConcept = async (did, concept) => {
    try {
      const res = await createConceptRequest(did, concept);
      console.log(res);
      return true;
    } catch (error) {
      // console.log(error);
      alert(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <ConceptContext.Provider
      value={{
        concepts,
        getConcepts,
        deleteConcept,
        createConcept,
      }}
    >
      {children}
    </ConceptContext.Provider>
  );
}
