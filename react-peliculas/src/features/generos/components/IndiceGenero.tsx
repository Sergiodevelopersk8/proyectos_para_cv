import { useNavigate } from 'react-router'
import Boton from '../../../components/Boton'
export default function IndiceGenero() {
  
  const navigate = useNavigate();
  
  return (
    <>
    
    <h3>Género</h3>
    <Boton onClick={() =>  navigate('/generos/crear')}>Crear Género</Boton>
    
    
    </>
  )
}
