import { createContext, useContext, useState, useEffect } from "react";
import {
  createConceptRequest,
  deleteConceptRequest,
  getConceptsRequest,
  updateConceptRequest,
} from "../api/concepts";

const ConceptContext = createContext();

export const useConcepts = () => {
  const context = useContext(ConceptContext);
  if (!context)
    throw new Error("useConcepts must be used within a ConceptProvider");
  return context;
};

export function ConceptProvider({ children }) {
  const [concepts, setConcepts] = useState([]);
  const [conceptsErrors, setConceptsErrors] = useState([]);

  // clear errors after 5 seconds
  useEffect(() => {
    if (conceptsErrors.length > 0) {
      const timer = setTimeout(() => {
        setConceptsErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [conceptsErrors]);

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
      console.log(error);
    }
  };

  const createConcept = async (did, concept) => {
    try {
      const res = await createConceptRequest(did, concept);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
      setDocentesErrors(error.response.data.message);
    }
  };

  const updateConcept = async (cid, did, concept) => {
    try {
      const res = await updateConceptRequest(cid, did, concept);
      console.log(res.data);
    } catch (error) {
      // console.log(error.response.data.message);
      setDocentesErrors(error.response.data.message);
    }
  };

  return (
    <ConceptContext.Provider
      value={{
        concepts,
        getConcepts,
        deleteConcept,
        createConcept,
        updateConcept,
        conceptsErrors,
      }}
    >
      {children}
    </ConceptContext.Provider>
  );
}
