import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type PeliculaCreacion from "../model/PeliculaCreacion.model";
import FormularioPelicula from "./FormularioPelicula";
import type { SubmitHandler } from "react-hook-form";
import Cargando from "../../../components/Cargando";
import type Genero from "../../generos/model/Genero.model";
import type Cine from "../../cines/model/Cine.model";
import type ActorPelicula from "../model/ActorPelicula";

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

   const generosSeleccionados : Genero[] = [{id: 2, nombre: 'Drama'}];
    const generosNoSeleccionados : Genero[] = [{id: 1, nombre: 'Accion'}, {id: 3, nombre: 'Comedia'}]; 
  
  const cinesSeleccionados: Cine[] = [{id: 1, nombre: 'Cinepolisbiggy', latitud:0, longitud:0}];
  const cinesNoSeleccionados: Cine[] = [
     
    {id: 2, nombre: 'Cinemexkitty',   latitud:0, longitud:0},
    {id: 3, nombre: 'Cinepolisvladimirs', latitud:0, longitud:0}
  ];

  const actoresSeleccionados : ActorPelicula[] = [{
          id:2, nombre:"Abigail Donelly", personaje:'novia de sergio', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xhU_UMaNueuLmsAnM9IgYPMh45ytHDP5YQ&s'
    }]

  return (
<>

    <h3>Editar Pelicula</h3>
    {modelo ? <FormularioPelicula modelo={modelo} onSubmit={onSubmit} 
    generosNoSeleciconados={generosNoSeleccionados}
    generosSeleciconados={generosSeleccionados}
    cinesSeleccionados={cinesSeleccionados} cinesNoSeleccionados={cinesNoSeleccionados}
    actoresSeleccionados={actoresSeleccionados}
    /> : <Cargando />}

</>

  )
}
