using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Estudiantes.API.Models
{
    public class Profesor
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty; 

        public ICollection<Materia> Materias { get; set; } = new List<Materia>();
    }
}

