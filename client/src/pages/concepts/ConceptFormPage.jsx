import { Button, Card, Input, Label, Message } from "../../components/ui";
import { useConcepts } from "../../context/conceptsContext";
import { conceptSchema } from "../../schemas/concept";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function ConceptFormPage() {
  const params = useParams();
  const { createConcept, errors: conceptsErrors, isOk } = useConcepts();
  const [length, setLength] = useState(0);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(conceptSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const dataToSend = {
        note: data.note,
        startDate: new Date(`${data.startDate}`),
        endDate: new Date(`${data.endDate}`),
      };
      const res = await createConcept(params.did, dataToSend);
      navigate(`/concepts/${params.did}`);
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };

  return (
    <Card>
      {conceptsErrors.map((error, i) => (
        <Message message={error} key={i} />
      ))}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="note">Nota</Label>
        <Input
          type="number"
          step="0.01"
          name="note"
          placeholder="Nota"
          {...register("note")}
          autoFocus
        />
        {errors.note && (
          <p className="text-red-500 text-xs italic">{errors.note.message}</p>
        )}

        <Label htmlFor="startDate">Fecha de inicio</Label>
        <Input
          type="date"
          name="startDate"
          placeholder="Fecha de inicio"
          {...register("startDate")}
          autoFocus
        />
        {errors.startDate && (
          <p className="text-red-500 text-xs italic">
            Please enter a startDate.
          </p>
        )}

        <Label htmlFor="endDate">Fecha de fin</Label>
        <Input
          type="date"
          name="endDate"
          placeholder="Fecha de fin"
          {...register("endDate")}
          autoFocus
        />
        {errors.endDate && (
          <p className="text-red-500 text-xs italic">Please enter a endDate.</p>
        )}
        <Button>Save</Button>
      </form>
    </Card>
  );
}
