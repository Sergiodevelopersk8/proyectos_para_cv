import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type ActorCreacion from "../models/ActorCreacion.model";
import FormularioActor from "./FormularioActor";
import Cargando from "../../../components/Cargando";
import type { SubmitHandler } from "react-hook-form";




export default function EditarActor() {
  
const {id} = useParams();

const [modelo, setModelo] = useState<ActorCreacion | undefined>(undefined);

  useEffect(()=>{

    const timerId = setTimeout(()=>{

      setModelo({nombre: 'kiernan'+ id, fechaNacimiento: '1999-11-10', foto : 'https://tomandlorenzo.com/wp-content/uploads/2025/02/Kiernan-Shipka-2025-Writers-Guild-Awards-Red-Carpet-Styke-Fashion-Rodarte-Tom-Lorenzo-Site-1.jpg'})

    },1000);
    return()=> clearTimeout(timerId)
    
  },[id])


  const onSubmit : SubmitHandler<ActorCreacion> = async (data) =>{
  
      console.log('Editando Actor...');
      await new Promise(resolve => setTimeout(resolve,2000));
      console.log(data);
    }
  
  return (
    <>
    
    <h3>Editar Actor</h3>
    
  {modelo ? <FormularioActor modelo={modelo} onSubmit={onSubmit} /> : <Cargando/>}
    
    
    
    </>
  )
}
