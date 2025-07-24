import { useNavigate } from 'react-router'
import Boton from '../../../components/Boton'
import { useEffect } from 'react';
import clienteAPI from '../../../api/clienteAxios';

export default function IndiceGenero() {
  
  const navigate = useNavigate();
  
  //peticion para api
  useEffect(()=>{
    
    // variables de entorno 
  clienteAPI.get(`/generos`).then(res => console.log(res.data));

  },[])


  return (
    <>
    
    <h3>Género</h3>
    <Boton onClick={() =>  navigate('/generos/crear')}>Crear Género</Boton>
    
    
    </>
  )
}
