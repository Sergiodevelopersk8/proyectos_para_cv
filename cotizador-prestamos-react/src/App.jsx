import { useState, useEffect} from 'react'
import Header  from './components/Header.jsx'
import Button from './components/Button.jsx';
import {formatearDinero, calcularTotalPagar} from './helpers/index.js';
function App() {

  //se define el hook en un destructuring
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(()=>{
  const resultadoTotalPagar =  calcularTotalPagar(cantidad,meses);
  setTotal(resultadoTotalPagar);

  },[cantidad, meses, total]
)
  useEffect(()=>{

    //calcular pago mensual
    setPago(total / meses)

  },[total])

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  //funcion de cambiar el valor de range
  function handleChange(e){
    setCantidad(+e.target.value);
  }

  function handleClickDecremento(){
    const valor = cantidad - STEP;
    if(valor < MIN){
      alert('Cantidad no válida');
      return
    }
    setCantidad(valor);
  }
  function handleClickIncremento(){
 const valor = cantidad + STEP;
    if(valor > MAX){
      alert('Cantidad no válida');
      return
    }
    setCantidad(valor);
  }

  return (
    // esto es html
      <div className="my-20 mx-w-lg mx-auto bg-white shadow p-10"> 
      <Header/>

      <div className="flex justify-between my-6">
     
      <Button 
      // prpos
      operador='-'  
      //funcion
      fn={handleClickDecremento}
      />
      

      <Button operador='+' fn={handleClickIncremento} />
      
      </div>

      <input 
      type='range'
      className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
       onChange={handleChange} //evento y se llama la funcion
       min={MIN}
       max={MAX}
       step={STEP}
       value={cantidad}
       />
        <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
          {formatearDinero(cantidad)}
          </p>

          <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
            Elige un <span className='text-indigo-600'>Plazo</span>
          </h2>

          <select className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl fondt-bold text-gray-500 '
          value={meses}
          onChange={e=>setMeses(+e.target.value)}>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
            </select>

        <div className='my-5 space-y-3 bg-gray-50 p-5'>
           <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
            Resumen de <span className='text-indigo-600'>Pagos</span>
          </h2>
          <p className='text-xl text-gray-500 text-center font-bold'>{meses}Meses</p>
          <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)}Total a pagar</p>
          <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)}Mensuales</p>
        </div>

      </div>
  )
}


export default App
