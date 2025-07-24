using PeliculasAPI.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.DTOs
{
    public class GeneroCreacionDTO
    {
        //BUENAS PRACTICAS
        //crear contenedores po si se cambia algo y la api no afceta al cliente

        [Required(ErrorMessage = "El campo {0} es requerido")] //regla de validación
        [StringLength(10, ErrorMessage = "El campo {0} debe tener {1} caracteres o más")]

        //validaciones perzonalizadas
        [PrimeraLetraMayuscula]
        public required string Nombre { get; set; }



    }
}
