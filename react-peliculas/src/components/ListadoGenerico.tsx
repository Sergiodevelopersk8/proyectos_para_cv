import Cargando from './Cargando';
export default function ListadoGenerico<T>(props: ListadoGenericoProps<T>) {
    
    if(!props.listado){
        
        return props.cargandoUI ? props.cargandoUI : <Cargando/>;
    }
    else if(props.listado.length === 0){
        return props.listadoVacioUI ? props.listadoVacioUI : <Cargando/>;
    }

    else{

        // retorno una manera para pasar contenido ya sea actores, peliculas etc
        return props.children;
    }
}


interface ListadoGenericoProps<T>{

    listado : T[] | undefined;
    children : React.ReactNode;
    listadoVacioUI?: React.ReactNode;
    cargandoUI?: React.ReactNode;

}