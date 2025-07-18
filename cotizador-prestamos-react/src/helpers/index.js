const formatearDinero = (valor)=>{
const formatter = new Intl.NumberFormat('en-Us',{
    style: 'currency',
    currency: 'USD'

});
return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) =>{
    let total;

    //mientras mayor cantidad menor el interes
    if(cantidad < 5000){
     total = cantidad * 1.5;
     }
    if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;
    }
    if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;

    }
    else{
        total = cantidad * 1.2;
    }

    if( plazo === 6){
        total *= 1.1;
    }
    if( plazo === 12){
        
        total *= 1.2;
    }
    if( plazo === 24){
        total *= 1.3;
        
    }
        return total;
}


export {
    formatearDinero,
    calcularTotalPagar
}