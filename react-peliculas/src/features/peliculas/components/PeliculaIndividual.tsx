import type Pelicula from "../model/pelicula.model";
import styles from './PeliculaIndividual.module.css'

export default function PeliculaIndividual(props : PeliculaIndividualProps) {
  
//   centralizar
const construirLink = ()=> `/pelicula/${props.pelicula.id}`;
    return(
    <div className={styles.div}>
        <a href={construirLink()}>
            <img alt="Poster" src={props.pelicula.poster}  />
        </a>
        <p>
            <a href={construirLink()}> {props.pelicula.titulo}</a>
        </p>
    </div>
  )
}


// interfaz para la pelicula individual recibe de pelicula.model.ts
interface PeliculaIndividualProps{
    pelicula: Pelicula;
}