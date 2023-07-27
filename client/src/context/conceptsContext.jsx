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
  const [isOk, setIsOk] = useState(false);
  const [concepts, setConcepts] = useState([]);
  const [errors, setErrors] = useState([]);

  // clear errors after 5 seconds
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
        setIsOk(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

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
      setIsOk(true);
      const res = await createConceptRequest(did, concept);
      console.log(res);
      return true;
    } catch (error) {
      // console.log(error);
      alert(error.response.data);
      console.log(error.response.data);
    }

    return (
      <ConceptContext.Provider
        value={{
          isOk,
          concepts,
          getConcepts,
          deleteConcept,
          createConcept,
        }}
      >
        {children}
      </ConceptContext.Provider>
    );
  };
}
