import { useEffect } from "react";
import { useDocentes } from "../../context/docentesContext";
import { ImFileEmpty } from "react-icons/im";
import { FaEye, FaPen } from "react-icons/Fa";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";

{
  /* <i class="fa-solid fa-eye"></i> */
}

export function DocentesPage() {
  const { docentes, getDocentes } = useDocentes();

  useEffect(() => {
    getDocentes();
    console.log(docentes);
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
      name: "action",
      label: "Acciones",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <div className="flex items-center justify-evenly">
              <Link
                className="p-2 text-xl bg-green-700 text-white rounded transition-all delay-100 ease-in-out  hover:bg-white hover:text-green-700"
                to={`/docente/${docentes[dataIndex]._id}`}
              >
                {" "}
                <FaEye />{" "}
              </Link>
              <Link
                className="p-2 text-xl bg-sky-700 text-white rounded transition-all delay-100 ease-in-out  hover:bg-white hover:text-sky-700"
                to={`/update-docente/${docentes[dataIndex]._id}`}
              >
                {" "}
                <FaPen />{" "}
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
          <Link to="/add-docente">Agregar docente</Link>

          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              No docentes yet, please add a new task
            </h1>
          </div>
        </div>
      ) : (
        <div className="px-6 py-4">
          <Link to="/add-docente">Agregar docente</Link>

          <MUIDataTable
            title={"Lista de Docentes"}
            data={docentes}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </>
  );
}
