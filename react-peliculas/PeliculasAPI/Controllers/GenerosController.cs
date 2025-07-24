using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.TagHelpers;
using Microsoft.AspNetCore.OutputCaching;
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
        private readonly IRepositorio repositorio;
        private readonly ServicioSingleton singleton;
        private readonly IOutputCacheStore outputCacheStore;
        private const string cacheTag = "generos"; //tag para cache

        //provedor de configuracion
        private readonly IConfiguration configuration;

        public GenerosController(IRepositorio repositorio, 
            ServicioSingleton singleton,
            IOutputCacheStore outputCacheStore,
            IConfiguration configuration)
        {
           
            this.repositorio = repositorio;
            this.singleton = singleton;
            this.outputCacheStore = outputCacheStore;
            this.configuration = configuration;
        }
        //fin del constructor

        [HttpGet("ejemplo-proovedor-configuracion")]
        public string GetEjemploProveedorConfiguracion()
        {
            return configuration.GetValue<string>("CadenaDeConexion")!;
        }



        //Crear acción
        [HttpGet("obtenerTodos")]
        [HttpGet("listado")]
        [HttpGet("/listado-generos")]
        [OutputCache(Tags = [cacheTag])] //esto es para el cache
        public List <Genero> Get()
        {
            
            var generos = repositorio.ObtenerTodosLosGeneros();
            
            return generos;
        }

        [HttpGet("{id:int}")] //variable de id (parametro)
        [OutputCache(Tags = [cacheTag] )] //esto es para el cache
        public async Task<ActionResult<Genero>> Get(int id)
        {
            var genero = await repositorio.ObtenerPorId(id);//dependencia inyectada
            
            if (genero is null) {

                //retorna un 404
                return NotFound();
            }

            return genero;
        }


        


        [HttpPost]
        //[FromBody] ES PARA ENVIARLO DESDE EL CUERPO
        public async Task<IActionResult> Post([FromBody]Genero genero)
        {
        
            var yaExisteUnGeneroConDichoNombre= repositorio.Existe(genero.Nombre);

            if (yaExisteUnGeneroConDichoNombre)
            {
                return BadRequest($"Ya existe un género con el nombre {genero.Nombre}");
            }

            //singleton
            repositorio.Crear(genero);
            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            return Ok();

        }


        [HttpPut]
        public void Put()
        {

        }
        
        
        [HttpDelete]
        public void Delete()
        {

        }



    }
}
