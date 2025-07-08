import { useParams } from "react-router"
import type CineCreacion from "../model/CineCreacion.model";
import FormularioCine from "./FormularioCine";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";
import { useEffect, useState } from "react";


export default function EditarCine() {
  
  const {id} = useParams(); 
  const [modelo, setModelo] = useState<CineCreacion | undefined>(undefined);
  
      const onSubmit : SubmitHandler<CineCreacion> = async (data) =>{
        console.log('creando cine ....');
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log(data);
      }


  useEffect(() => {

    setTimeout(() => {

      setModelo({nombre: 'Cinepolis biggy', latitud : 19.039130740525295, longitud : -98.19772124290468});


    },1000)


  }, [id] )


  return (
    <>
    
    <h3>Editar Cine</h3>
    {modelo ? <FormularioCine modelo={modelo} onSubmit={onSubmit} /> : <Cargando/> }
  
    
    
    
    </>
  )
}
