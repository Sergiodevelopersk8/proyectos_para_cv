import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type PeliculaCreacion from "../model/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";

export default function EditarPelicula() {

const [modelo, setModelo] = useState<PeliculaCreacion | undefined>(undefined);

   const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) =>{
      console.log('creando pelicula ...')
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log(data);
    }

const {id} = useParams();

  useEffect(() =>{
    
    setTimeout(()=>{
  setModelo(
  {
    titulo: 'Spiderman' + id, fechaLanzamiento: '2020-05-11', trailer:'abc',
   poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRkvlFiNN39VwxaJn7Lbqxd2cWCmmLFLk8Q&s'
  }
)
    },5000)


  }, [id]);


  return (
<>

    <h3>Editar Pelicula</h3>
    {modelo ? <FormularioPelicula modelo={modelo} onSubmit={onSubmit} /> : <Cargando />}

</>

  )
}
