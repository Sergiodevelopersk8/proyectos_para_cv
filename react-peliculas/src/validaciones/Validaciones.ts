export function primeraLetraMayuscula(){

    return {
        name: 'primera-letra-mayuscula',
        message : 'La primera letra debe ser mayuscula',
        test : (valor : string | undefined) =>{
            if(valor && valor.length > 0 ){
                const primeraLetra = valor.substring(0,1);
                return primeraLetra === primeraLetra.toUpperCase()
            }

            return true;
            

        }    
    }

}


export function fechaNoPuedeSerFutura(){
    return{
        name : 'fecha-no-es-futura',
        message : 'Lafecha no puede ser del futuro',
        test : (valor :  string | undefined) =>{
            if(!valor) return true;

            const fecha = new Date(valor);
            const hoy = new Date();
            return fecha <= hoy;
        }  
    }
}