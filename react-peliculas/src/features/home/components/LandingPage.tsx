import ListadoPeliculas from "../../peliculas/components/ListadoPeliculas";
import { useState, useEffect } from "react";
import type Pelicula from "../../peliculas/model/pelicula.model";
export default function LandingPage() {
  
    const [peliculas, setPeliculas] = useState<AppState>({});


  useEffect (()=>{

    setTimeout(()=>{
const enCines:Pelicula[] = [{
     id: 1,
    titulo:'Resident evil',
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzVrCgeSJLg29o6HYMdTusNfsrO1wtahtXw&s'
  },{
     id: 2,
    titulo:'Spiderman No Way Home',
    poster: 'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/RCIIWCI4NVIBPFLS672R5QXFH4.jpg'
  }];

  const proximosEstrenos: Pelicula[] = [{
  id:3,
  titulo:'mid 90s',
  poster:'https://upload.wikimedia.org/wikipedia/en/2/27/Mid90s_%282018_movie_poster%29.png' 
  }]

  // se actualiza listado de ambos
  setPeliculas({enCines,proximosEstrenos});

    },1000)

  },[])

    return (
    <>
    
        <h3>En cines </h3>
    <ListadoPeliculas peliculas={peliculas.enCines}/>
    
    <h3>Próximos Estrenos</h3>
  <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
    



    </>


)
}


// listado interface

interface AppState{
  // El simbolo de ? significa opcinal 
  enCines?: Pelicula[];
  proximosEstrenos?:Pelicula[];
}
