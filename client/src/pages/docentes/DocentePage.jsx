import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../../components/ui";
import { useDocentes } from "../../context/docentesContext";
import { useForm } from "react-hook-form";

export function DocentePage() {
  const { getDocente, deleteDocente, docentes } = useDocentes();
  const [docente, setDocente] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const onClick = async () => {
    try {
      deleteDocente(params.id);
      navigate("/docentes");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadDocente = async () => {
      if (params.id) {
        const res = await getDocente(params.id);
        setDocente(res);
      }
    };
    loadDocente();
  }, []);

  return (
    <Card className="text-center">
      {/* <Label htmlFor="dni">DNI</Label>
      <Input type="number" name="dni" autoFocus value= readOnly /> */}
      <div>
        <span>DNI: </span>
        <span> {docente.dni}</span>
      </div>

      <div>
        <span>Nombres: </span>
        <span> {docente.name}</span>
      </div>

      <div>
        <span>Apellidos: </span>
        <span> {docente.lastname}</span>
      </div>

      <Button onClick={onClick}>Delete</Button>
    </Card>
  );
}
