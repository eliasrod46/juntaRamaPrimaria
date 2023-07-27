import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDocentes } from "../../context/docentesContext";
import { useConcepts } from "../../context/conceptsContext";
import { ImFileEmpty } from "react-icons/im";
// import { FaEye, FaTrash, FaPen } from "react-icons/Fa";
import MUIDataTable from "mui-datatables";

export function ConceptPage() {
  const params = useParams();
  const { docentes, getDocente } = useDocentes();
  const { concepts, getConcepts } = useConcepts();
  const [docente, setDocente] = useState({});

  useEffect(() => {
    const loadDocente = async () => {
      if (params.did) {
        const res = await getDocente(params.did);
        setDocente(res);
        getConcepts(params.did);
      }
    };
    loadDocente();
  }, []);

  const columns = [
    {
      name: "note",
      label: "Nota",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "sanitizedNote",
      label: "Nota equivalente",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "startDate",
      label: "Fecha Inicio",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "endDate",
      label: "Fecha Fin",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "diffDates",
      label: "Meses trabajados",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "concept",
      label: "Concepto",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "action",
      label: "Acciones",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div className="flex items-center justify-evenly">
              <h1>holis</h1>
            </div>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
  };

  return (
    <>
      conceptos de: {docente.name} {docentes.lastname}
      <>
        {concepts.length === 0 ? (
          <div className="flex justify-center items-center p-10">
            <div>
              <Link to={`/add-concept/${docente._id}`}>Agregar concepto</Link>
              <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
              <h1 className="font-bold text-xl">
                No concepts yet, please add a new concept
              </h1>
            </div>
          </div>
        ) : (
          <div className="px-6 py-4">
            <Link to={`/add-concept/${docente._id}`}>Agregar concepto</Link>
            <MUIDataTable
              title={"Lista de Conceptos"}
              data={concepts}
              columns={columns}
              options={options}
            />
          </div>
        )}
      </>
    </>
  );
}
