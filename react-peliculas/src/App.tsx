import { BrowserRouter } from 'react-router'
import Menu from './components/Menu'
import AppRoutes from './AppRoutes'

export default function App() {

  

  
  return (
    <>
    <BrowserRouter>
    
    <Menu/>
    <div className="container mb-4">
    
    <AppRoutes/>
    


    </div>
    </BrowserRouter>

    </>
  )
}

// listado interface

// interface AppState{
//   // El simbolo de ? significa opcinal 
//   enCines?: Pelicula[];
//   proximosEstrenos?:Pelicula[];
// }

