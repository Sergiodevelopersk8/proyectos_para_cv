import { Viaje } from "../models/Viaje.js";
import { Testimonial} from "../models//Testimoniales.js";
import { Console } from "console";

    const paginaInicio = async (request, response)=>{
        
        //consultar la base de datos 3 viajes

        const promiseDB = [];
        
        promiseDB.push(Viaje.findAll({limit: 3}));
        promiseDB.push(Testimonial.findAll());


        try{
            const resultado = await Promise.all(promiseDB)
            response.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales:resultado[1]
            });
            
        
        } catch(error){
            console.log(error);
        }
        
        
        
    }

    const paginaNosotros = (request, response)=>{
        response.render('nosotros',{
            pagina: 'Nosotros'
        });
    }
    const paginaViajes = async (request, response)=>{
        //consultar la base de datos
        const viajes = await Viaje.findAll();
        
        response.render('viajes',{
            pagina: 'Próximos Viajes',
            viajes,
        });
    }
    const paginaTestimoniales = async (request, response)=>{
        try{
            const testimoniales = await Testimonial.findAll();
            response.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });
        }catch(error){
            console.log(error)
        }
    }

    //muestra un viaje por slug
    const paginaDetalleViaje = async (req, res )=> {
        //destruction
        const {slug} = req.params;
        try{
            const  viaje  = await Viaje.findOne({where: {slug}});
            res.render('viaje',{
                pagina:'Informacion Viaje',
                viaje
            })
        }
        catch(error){
                
            }
    }

    export {
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje
    }