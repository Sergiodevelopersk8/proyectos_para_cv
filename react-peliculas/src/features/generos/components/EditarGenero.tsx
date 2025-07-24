import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type GeneroCreacion from "../model/GeneroCreacion.model";
import FormularioGenero from "./FormularioGenero";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";

export default function EditarGenero() {
  
  const {id} = useParams(); 
  const [modelo, setModelo] = useState <GeneroCreacion | undefined>(undefined);

  useEffect(()=>{
    const timerId = setTimeout(()=>{

      setModelo({nombre: 'Drama' + id})
    
    },1000);

    return ()=> clearTimeout(timerId)
  
  },[id])
  
  const onSubmit: SubmitHandler<GeneroCreacion> = async (data) => {
    console.log('editando genero ....')
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data)

  }



  return (
    <>
    
    <h3>Editar Genero</h3>
    
   { modelo ? <FormularioGenero errores={[]} modelo={modelo} onSubmit={onSubmit}/> : <Cargando/> }

    
    
    
    </>
  )
}
