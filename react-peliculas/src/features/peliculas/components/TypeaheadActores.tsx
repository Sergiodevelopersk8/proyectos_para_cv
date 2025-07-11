import { Typeahead } from "react-bootstrap-typeahead";
import type ActorPelicula from "../model/ActorPelicula";
import type { Option } from "react-bootstrap-typeahead/types/types";
import { useState } from "react";


export default function TypeaheadActores(props: TypeaheadActoresProps) {
 
    const actores : ActorPelicula[] = [{
        id:1, nombre:"Kiernan Shipka", personaje:'', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR69viq2YnGjuFO-NlGCuRqDzHS5y8P9g4w2Q&s'
    },
    {
          id:2, nombre:"Abigail Donelly", personaje:'', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xhU_UMaNueuLmsAnM9IgYPMh45ytHDP5YQ&s'
    },
    {
          id:3, nombre:"Renata Guerra", personaje:'', foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBZ1AuJGnVB7joVUhOuWxxdaLdSIzUv-Rb3w&s'
    },
]
 
    const seleccion: ActorPelicula[] = []; 

    const [elementoArrastrado, setElementoArrastrado] = useState<ActorPelicula | undefined>(undefined)

    const manejarDragStart = (actor: ActorPelicula) => {

        setElementoArrastrado(actor);

    }

    const manejarDragOver = (actor: ActorPelicula) => {

        if(!elementoArrastrado || actor.id === elementoArrastrado.id ){

            return;

        }

        const actores = [...props.actores];
        const indiceDesde = actores.findIndex(x => x.id === elementoArrastrado.id);
        const indiceHasta = actores.findIndex(x => x.id === actor.id);

        if(indiceDesde !== -1 && indiceHasta !== -1){

            [actores[indiceDesde], actores[indiceHasta]] = [actores[indiceHasta], actores[indiceDesde]];
            props.onAdd(actores);
        }

    }

    return (
    <>
    
    <label>Actores</label>
    <Typeahead
    
    id="typeahead"
    onChange={(actores: Option[])=>{

        const actorSeleccionado = actores[0] as ActorPelicula;
        if(props.actores.findIndex (x => x.id === actorSeleccionado.id ) === -1 ) {
            props.onAdd([...props.actores, actorSeleccionado])
        }


    }}

    options={actores}
    labelKey={(opcion: Option)=>{
        const actor = opcion as ActorPelicula;
        return actor.nombre;
    }}
        filterBy={['nombre']}
        placeholder="Escribe el nombre del actor..."
        minLength={2}
        flip={true}
        selected={seleccion}
        renderMenuItemChildren={(opcion: Option)=>{
            const actor = opcion as ActorPelicula;
            return (
                <>
                <img alt="imagen actor" src={actor.foto} style={{height : '64px', width:'64px', marginRight:'10px'}} />
                <span>{actor.nombre}</span>
                </>
            )
        }}
    />

    <ul className="list-group">
        {props.actores.map(actor =>(
            
            <li 
            draggable={true}
            onDragStart={() => manejarDragStart(actor)}
            onDragOver={()=> manejarDragOver(actor)}
            
            className="list-group-item d-flex align-items-center"
            
            key={actor.id}>
            
                <div style={{width:'70px'}}>
                    <img style={{height:'60px'}} src={actor.foto}
                        alt="foto"
                    />
                </div>
                <div style={{width:'150px', marginLeft:'1rem'}}>
                    {actor.nombre}

                </div>

                <div className="flex-grow-1 mx-3">
                <input  className="form-control" placeholder="Personaje" type="text" value={actor.personaje} 
                onChange={e =>{
                        props.onCambiopersonaje(actor.id, e.currentTarget.value)
                }} />

                </div>

                <span role="button" className="badge text-bg-secondary" onClick={()=>props.onRemove(actor)}>X</span>

            </li>
        ))}
    </ul>
    
    </>
  )
}


interface TypeaheadActoresProps{
    actores: ActorPelicula[];
    onAdd(actores: ActorPelicula[]) : void; 
    onCambiopersonaje(id: number, personaje:string) : void;
    onRemove(actor: ActorPelicula): void;
}