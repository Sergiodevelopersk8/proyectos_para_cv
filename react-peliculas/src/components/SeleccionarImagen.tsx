import { useState, type ChangeEvent } from "react";
import styles from './SeleccionarImagen.module.css';

export default function SeleccionarImagen(props :  SeleccionarImagenProps) {
  
    const [imagenBase64, setImagenBase64] = useState('');

    const [imagenURL, steImagenURL] = useState(props.imagenURL ? props.imagenURL : '');


  const manejarOnChange = (e : ChangeEvent<HTMLInputElement>) =>{
    if(e.currentTarget.files){
        const archivo = e.currentTarget.files[0];

        aBase64(archivo).then(valor => setImagenBase64(valor)).catch(error=>console.log(error))
        props.imagenSeleccionada(archivo);
        steImagenURL('');
    }
  }
  
    const aBase64 = (archivo : File)=>{
        return new Promise<string>((resolve, reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(archivo);
            reader.onload = () =>resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }



    return (
    <>
    
    <div className="form-group">
        <label>{props.label}</label>
    
    <div>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={manejarOnChange} />
        {imagenBase64 ? <div>
            <div className={styles.div}> 
                <img src={imagenBase64} alt="imagen seleccionada" />
            </div>
        </div> : undefined}
    </div>
    <div>
        
        {imagenURL ? <div>
            <div className={styles.div}> 
                <img src={imagenURL} alt="imagen seleccionada" />
            </div>
        </div> : undefined}
    </div>

    </div>

    
    </>
  )
}


interface SeleccionarImagenProps{

    label : string;
    imagenURL? : string;
    imagenSeleccionada : (file : File) => void;



}