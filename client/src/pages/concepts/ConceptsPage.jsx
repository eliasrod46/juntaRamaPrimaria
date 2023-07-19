import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDocentes } from "../../context/docentesContext";
import { useConcepts } from "../../context/conceptsContext";
import { ImFileEmpty } from "react-icons/im";
import { FaEye, FaTrash, FaPen } from "react-icons/Fa";
import MUIDataTable from "mui-datatables";

export function DocentesPage() {
  const params = useParams();
  const { getDocente } = useDocentes();
  const { concepts, getConcepts } = useConcepts();
  const [docente, setDocente] = useState({});

  useEffect(() => {
    getConcepts(params.did);
    setDocente(getDocente(params.did));
    // console.log(docentes);;
  }, []);

  const columns = [
    {
      name: "note",
      label: "Note",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "sanitizedNote",
      label: "sanitizedNote",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "startDate",
      label: "StartDate",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "startDate",
      label: "StartDate",
      options: {
        filter: true,
        sort: true,
      },
    },
    // {
    //   name: "action",
    //   label: "Acciones",
    //   options: {
    //     filter: true,
    //     customBodyRenderLite: (dataIndex) => {
    //       return (
    //         <div className="flex items-center justify-evenly">
    //           <Link
    //             className="p-2 text-xl bg-green-700 text-white rounded transition-all delay-100 ease-in-out  hover:bg-white hover:text-green-700"
    //             to={`/docente/${docentes[dataIndex]._id}`}
    //           >
    //             {" "}
    //             <FaEye />{" "}
    //           </Link>
    //           <Link
    //             className="p-2 text-xl bg-sky-700 text-white rounded transition-all delay-100 ease-in-out  hover:bg-white hover:text-sky-700"
    //             to={`/update-docente/${docentes[dataIndex]._id}`}
    //           >
    //             {" "}
    //             <FaPen />{" "}
    //           </Link>
    //         </div>
    //       );
    //     },
    //   },
    // },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <>
      {concepts.length === 0 ? (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No concepts yet, please add a new concept
            </h1>
          </div>
        </div>
      ) : (
        <div className="px-6 py-4">
          <MUIDataTable
            title={"Lista de Conceptos"}
            data={concepts}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </>
  );
}
