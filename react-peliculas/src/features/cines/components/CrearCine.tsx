import type { SubmitHandler } from "react-hook-form";
import type CineCreacion from "../model/CineCreacion.model";
import FormularioCine from "./FormularioCine";

export default function CrearCine() {
  
  const onSubmit : SubmitHandler<CineCreacion> = async (data) =>{
    console.log('creando cine ....');
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(data);
  }
  
  
  
  
  
  
  return (
    <>
    <h3>Crear Cine</h3>
    <FormularioCine onSubmit={onSubmit} />



    
    
    
    </>
  )
}
