import type { SubmitHandler } from "react-hook-form"
import type PeliculaCreacion from "../model/PeliculaCreacion.model"
import FormularioPelicula from "./FormularioPelicula";

export default function CrearPelicula() {
  
  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) =>{
    console.log('creando pelicula ...')
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(data);
  }
  
  return (
    <>


    <h3>Crear Pelicula</h3>
    <FormularioPelicula onSubmit={onSubmit}></FormularioPelicula>
    
    
    </>
  )
}
