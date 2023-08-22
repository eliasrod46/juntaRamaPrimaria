import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label, Message } from "../../components/ui";
import { useDocentes } from "../../context/docentesContext";
// import { useAuth } from "../../context/authContext";
import { docenteSchema } from "../../schemas/docente";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function DocenteFormPage() {
  const [docente, setDocente] = useState({});
  const { createDocente, docentesErrors, updateDocente, getDocente, docentes } =
    useDocentes();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(docenteSchema),
  });

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateDocente(params.id, data);
      } else {
        createDocente(data);
      }
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

  useEffect(() => {
    setValue("dni", docente.dni);
    setValue("name", docente.name);
    setValue("lastname", docente.lastname);
  }, [docente]);

  return (
    <Card>
      {docentesErrors.map((error, i) => (
        <Message message={error} key={i} />
      ))}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="dni">DNI</Label>
        <Input
          type="number"
          name="dni"
          placeholder="dni"
          {...register("dni")}
          autoFocus
        />
        {errors.dni && (
          <p className="text-red-500 text-xs italic">Please enter a DNI.</p>
        )}
        <Label htmlFor="name">Nombre</Label>
        <Input
          type="text"
          name="name"
          placeholder="name"
          {...register("name")}
          autoFocus
        />
        {errors.name && (
          <p className="text-red-500 text-xs italic">Please enter a name.</p>
        )}
        <Label htmlFor="lastname">Apellidos</Label>
        <Input
          type="text"
          name="lastname"
          placeholder="lastname"
          {...register("lastname")}
          autoFocus
        />
        {errors.lastname && (
          <p className="text-red-500 text-xs italic">
            Please enter a lastname.
          </p>
        )}
        <Button>Save</Button>
      </form>
    </Card>
  );
}
