
import type GeneroCreacion from "../model/GeneroCreacion.model";
import { type SubmitHandler } from "react-hook-form";
import FormularioGenero from "./FormularioGenero";


export default function CrearGenero() {
  
  
  
  const onSubmit : SubmitHandler<GeneroCreacion> = async (data) => {
    
    console.log('creando el genero ...')
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log(data)



  } 

  return (
    <>
    
    <h3>Crear Genero</h3>
   
   <FormularioGenero onSubmit={onSubmit}/>

    
    </>

  )
}




