
import type GeneroCreacion from "../model/GeneroCreacion.model";
import { type SubmitHandler } from "react-hook-form";
import FormularioGenero from "./FormularioGenero";
import clienteAPI from "../../../api/clienteAxios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { extraerErrores } from "../../../utils/extraerErrores";
import type { AxiosError } from "axios";

export default function CrearGenero() {
  
  const navigate = useNavigate();
  
  const [errores,setErrores] = useState<string[]>([]);

  const onSubmit : SubmitHandler<GeneroCreacion> = async (data) => {
    
    try{

      await clienteAPI.post('/generos',data);
      navigate('/generos');
    }
    catch (err){
      const errores = extraerErrores(err as AxiosError);
      setErrores(errores);

    }


  } 

  return (
    <>
    
    <h3>Crear Genero</h3>
   
   <FormularioGenero  errores={errores} onSubmit={onSubmit}/>

    
    </>

  )
}




