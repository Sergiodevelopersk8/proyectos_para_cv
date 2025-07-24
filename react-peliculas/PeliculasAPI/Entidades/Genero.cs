using PeliculasAPI.Validaciones;
using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Entidades
{
    public class Genero
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "El campo {0} es requerido")] //regla de validación
        [StringLength(10,ErrorMessage ="El campo {0} debe tener {1} caracteres o más")]
        
        //validaciones perzonalizadas
        [PrimeraLetraMayuscula]
        public required string Nombre {  get; set; }


    }
}
