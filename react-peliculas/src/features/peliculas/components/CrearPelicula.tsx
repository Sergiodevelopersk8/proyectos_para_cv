import type { SubmitHandler } from "react-hook-form"
import type PeliculaCreacion from "../model/PeliculaCreacion.model"
import FormularioPelicula from "./FormularioPelicula";
import type Genero from "../../generos/model/Genero.model";
import type Cine from "../../cines/model/Cine.model";

export default function CrearPelicula() {
  
  const onSubmit: SubmitHandler<PeliculaCreacion> = async (data) =>{
    console.log('creando pelicula ...')
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(data);
  }
  
  const generosSeleccionados : Genero[] = [];
  const generosNoSeleccionados : Genero[] = [
    {id: 1, nombre: 'Accion'}, 
    {id: 2, nombre: 'Drama'},
    {id: 3, nombre: 'Comedia'}]; 

  const cinesSeleccionados: Cine[] = [];
  const cinesNoSeleccionados: Cine[] = [
    {id: 1, nombre: 'Cinepolisbiggy', latitud:0, longitud:0}, 
    {id: 2, nombre: 'Cinemexkitty',   latitud:0, longitud:0},
    {id: 3, nombre: 'Cinepolisvladimirs', latitud:0, longitud:0}
  ];

  return (
    <>


    <h3>Crear Pelicula</h3>
    <FormularioPelicula onSubmit={onSubmit} generosNoSeleciconados={generosNoSeleccionados}
    generosSeleciconados={generosSeleccionados}
    cinesSeleccionados={cinesSeleccionados} cinesNoSeleccionados={cinesNoSeleccionados}
    actoresSeleccionados={[]}
    />
    
    
    </>
  )
}
