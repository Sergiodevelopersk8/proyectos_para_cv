import type {  AxiosError } from "axios";

export function extraerErrores(obj: AxiosError): string[]{

    const data = obj.response?.data as RespuestaError;

    const err = data.errors;

    let mensajeDeError: string[] = [];

    //recorremos los errores 
    for(const campo in err){
        //guardanos los mensajes de errro y lo transformamos 
        const mensajeConCampo = err[campo].map(mensajeError => `${campo}, ${mensajeError}`);
        //resultado de la funcion
        mensajeDeError =mensajeDeError.concat(mensajeConCampo);
    }

    return mensajeDeError;


}


interface RespuestaError{
    errors:{
        //notacion de corchetes para nombres de propiedades
        [campo: string]: string[];
    }
}