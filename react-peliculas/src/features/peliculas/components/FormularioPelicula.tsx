import  {useForm, type SubmitHandler } from "react-hook-form";
import type PeliculaCreacion from "../model/PeliculaCreacion.model";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import SeleccionarImagen from "../../../components/SeleccionarImagen";
import Boton from "../../../components/Boton";
import { NavLink } from "react-router";
import SelectorMultiple from "../../../components/SelectorMultiple/SelectorMultiple";
import type Genero from "../../generos/model/Genero.model";
import type SelectorMultipleModel from "../../../components/SelectorMultiple/SelectorMultiple.model";
import {useState } from "react";
import type Cine from "../../cines/model/Cine.model";

import TypeaheadActores from "./TypeaheadActores";
import type ActorPelicula from "../model/ActorPelicula";


export default function FormularioPelicula(props: FormularioPeliculaProps) {

    const {
        register, handleSubmit, setValue, 
        formState: {errors, isValid, isSubmitting}
    } 
    = useForm<PeliculaCreacion>({

        resolver: yupResolver(reglasDeValidacion),
        mode: 'onChange',
        defaultValues: props.modelo ?? {titulo: ''}

    })

    const imagenActualURL: string | undefined = props.modelo?.poster  ? props.modelo.poster as string : undefined;

    const mapear = (arreglo: {id: number, nombre: string} [] ): SelectorMultipleModel[] => {
        return arreglo.map(valor => {
            return {llave: valor.id, descripcion: valor.nombre}
        })
    } 

    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapear(props.generosSeleciconados));
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleciconados));
    
    const [cinesSeleccionados,   setCinesSeleccionados] = useState(mapear(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados));

    const [actoresSeleccionados, setActoresSeleccionados] = useState(props.actoresSeleccionados);

        const onSubmit: SubmitHandler<PeliculaCreacion> = (data) => {
            data.generosIds = generosSeleccionados.map(x => x.llave);
            data.cinesIds = cinesSeleccionados.map(x => x.llave);
            data.actores = actoresSeleccionados;
            props.onSubmit(data);
        }

    return(
        <>

        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="from-group">

            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" autoComplete="off" className="form-control"  {...register('titulo')} />

            {errors.titulo && <p className="errors">{errors.titulo.message}</p>}
            

        </div>

        <div className="from-group">

            <label htmlFor="fechaLanzamiento">Fecha Lanzamiento</label>
            <input type="date" id="fechaLanzamiento" autoComplete="off" className="form-control"  
            {...register('fechaLanzamiento')} />

            {errors.fechaLanzamiento && <p className="errors">{errors.fechaLanzamiento.message}</p>}


        </div>

           <div className="from-group">

            <label htmlFor="trailer">Trailer (youtube)</label>
            <input type="text" id="trailer" autoComplete="off" className="form-control"  {...register('trailer')} />
        </div>

        <SeleccionarImagen label="Poster" imagenURL={imagenActualURL} imagenSeleccionada={poster =>{

            setValue('poster', poster);            
            
            }}  />

            <div className="form-group">
            <label>Géneros:</label>
            <SelectorMultiple  seleccionados={generosSeleccionados} noSeleccionados={generosNoSeleccionados} 
            onChange={(seleccionados, noSeleccionados)=> {
                setGenerosSeleccionados(seleccionados);
                setGenerosNoSeleccionados(noSeleccionados);
            } }  />
            </div>

            <div className="form-group">
            <label>Cines:</label>
            <SelectorMultiple  seleccionados={cinesSeleccionados} noSeleccionados={cinesNoSeleccionados} 
            onChange={(seleccionados, noSeleccionados)=> {
                setCinesSeleccionados(seleccionados);
                setCinesNoSeleccionados(noSeleccionados);
            } }  />
            </div>

            <div className="form-group">

            <TypeaheadActores 
            actores={actoresSeleccionados}
            onAdd={actores => {
                    setActoresSeleccionados(actores);
            }}

            onRemove={actor =>{
                const actores = actoresSeleccionados.filter(x => x !== actor);
                setActoresSeleccionados(actores)
            }}

            onCambiopersonaje={(id,personaje) => {
                const indice = actoresSeleccionados.findIndex(x => x.id === id);
                const actores = [...actoresSeleccionados];
                actores[indice].personaje = personaje;
                setActoresSeleccionados(actores);
            }}
            />

            </div>



            <div className="mt-2">

            <Boton type="submit" disabled={!isValid || isSubmitting}  >
                {isSubmitting ? 'Enviando...' : 'Enviar'}</Boton>

                <NavLink to="/" className="btn btn-secondary ms-2">Cancelar</NavLink>

            </div>





        </form>




        </>
    )

}



interface FormularioPeliculaProps{

    modelo?: PeliculaCreacion;
    onSubmit: SubmitHandler<PeliculaCreacion>;
    generosSeleciconados: Genero[];
    generosNoSeleciconados: Genero[];
    cinesSeleccionados: Cine[];
    cinesNoSeleccionados: Cine[];
    actoresSeleccionados: ActorPelicula[];

}

const reglasDeValidacion = yup.object({
    titulo: yup.string().required('El titulo es obligatorio'),
    fechaLanzamiento: yup.string().required('La fecha lanzamiento es obligatoria')
})




