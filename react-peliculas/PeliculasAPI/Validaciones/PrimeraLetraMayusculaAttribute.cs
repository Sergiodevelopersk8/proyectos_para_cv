using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.Validaciones
{

    public class PrimeraLetraMayusculaAttribute : ValidationAttribute //hereda de ValidationAttribute
    {

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if(value is null || string.IsNullOrWhiteSpace(value.ToString()))
            {
                return ValidationResult.Success;//retorna exitoso

            }
            
            var primeraLetra = value.ToString()![0].ToString();//toma el primer caracter

            //si primeraLetra es diferente primeraLetra Ya mayuscula
            if (primeraLetra != primeraLetra.ToUpper()) {

                return new ValidationResult("La primera letra debe ser mayuscula");
            
            }

            return ValidationResult.Success;
        }

    }
}
