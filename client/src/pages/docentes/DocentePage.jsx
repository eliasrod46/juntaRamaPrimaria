import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../../components/ui";
import { useDocentes } from "../../context/docentesContext";
import { useForm } from "react-hook-form";

export function DocentePage() {
  const { getDocente, deleteDocente} = useDocentes();
  const [docente, setDocente] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      deleteDocente(params.id)
      navigate("/docentes");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadDocente = async () => {
      if (params.id) {
        const recivedDocente = await getDocente(params.id);
        setDocente(recivedDocente)
      }
    };
    loadDocente();
  }, []);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="dni">DNI</Label>
        <Input
          type="number"
          name="dni"
          autoFocus
          value={docente.dni}
          readOnly 
        />

        <Label htmlFor="name">Nombres</Label>
        <Input
          type="text"
          name="name"
          autoFocus
          value={docente.name}
          readOnly 
        />

<Label htmlFor="lastname">Apellidos</Label>
        <Input
          type="text"
          name="lastname"
          autoFocus
          value={docente.lastname}
          readOnly 
        />



        <Button>Delete</Button>
      </form>
    </Card>
  );
}
