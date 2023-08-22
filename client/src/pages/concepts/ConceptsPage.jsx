import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDocentes } from "../../context/docentesContext";
import { ImFileEmpty } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import MUIDataTable from "mui-datatables";

export function ConceptsPage() {
  const { docentes, getDocentes, getDocente } = useDocentes();
  const params = useParams();
  useEffect(() => {
    getDocentes();
    // console.log(docentes);;
  }, []);

  useEffect(() => {
    const loadDocente = async () => {
      if (params.id) {
        const res = getDocente(params.id);
        setDocente(res);
      }
    };
    loadDocente();
  }, []);

  const columns = [
    {
      name: "dni",
      label: "DNI",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Nombre",
    },
    {
      name: "lastname",
      label: "Apellido",
    },
    {
      name: "concepts",
      label: "Conceptos",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div className="flex items-center justify-evenly">
              <Link
                to={`/concepts/${docentes[dataIndex]._id}`}
                className="p-2 text-xl bg-green-700 text-white rounded transition-all delay-100 ease-in-out  hover:bg-white hover:text-green-700"
              >
                <FaEye />
              </Link>
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
      {docentes.length === 0 ? (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No docentes yet, please add a new concept
            </h1>
          </div>
        </div>
      ) : (
        <div className="px-6 py-4">
          <MUIDataTable
            title={"Lista de Conceptos"}
            data={docentes}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </>
  );
}
