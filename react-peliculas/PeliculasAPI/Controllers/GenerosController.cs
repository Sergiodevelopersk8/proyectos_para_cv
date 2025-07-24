using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.OutputCaching;
using PeliculasAPI.DTOs;
using PeliculasAPI.Entidades;

namespace PeliculasAPI.Controllers
{
    //definir rutas
    [Route("api/generos")]
    [ApiController] //regla de validacion
    public class GenerosController : ControllerBase
    {
        //constructor para inyección de dependencias
        //por interface repositorio
        /*
         nota: se debe configurar en Program.cs la inyeccicon de
        dependcia para que no se genere un error         
         */
        private readonly IOutputCacheStore outputCacheStore;
        private readonly ApplicationDbContext context;
        private const string cacheTag = "generos"; //tag para cache

        //provedor de configuracion
        private readonly IConfiguration configuration;

        public GenerosController(IOutputCacheStore outputCacheStore, ApplicationDbContext context)
        {
           
            this.outputCacheStore = outputCacheStore;
            
            
            this.context = context;//abstrae la logica de la conexion db

        }
        //fin del constructor


        //Crear acción
        [HttpGet]
        
        [OutputCache(Tags = [cacheTag])] //esto es para el cache
        public List <GeneroDTO> Get()
        {
            return new List<GeneroDTO>() { new GeneroDTO {Id = 1, Nombre="Comedia" },
                new GeneroDTO{ Id = 2, Nombre = "Accion" } };            
        }

        [HttpGet("{id:int}", Name = "ObtenerGeneroPorId")] //variable de id (parametro)
        [OutputCache(Tags = [cacheTag] )] //esto es para el cache
        public async Task<ActionResult<GeneroDTO>> Get(int id)
        {
            throw new NotImplementedException();
        }


        


        [HttpPost]
        //[FromBody] ES PARA ENVIARLO DESDE EL CUERPO
        public async Task<IActionResult> Post([FromBody]GeneroCreacionDTO generoCracionDTO)
        {

            var genero = new Genero { Nombre = generoCracionDTO.Nombre };


            //insertar registro en la tabla de generos
            
            //modificacion en memoria para insertar en db
            context.Add(genero);

            //se inserta en la tabla
            await context.SaveChangesAsync();

            
            return CreatedAtRoute("ObtenerGeneroPorId", new {id= genero.Id}, genero);


        }


        [HttpPut]
        public void Put()
        {
            throw new NotImplementedException();
        }
        
        
        [HttpDelete]
        public void Delete()
        {
            throw new NotImplementedException();
        }



    }
}
