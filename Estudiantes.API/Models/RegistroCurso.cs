using System.ComponentModel.DataAnnotations;

namespace Estudiantes.API.Models
{
    public class RegistroCurso
    {
        public int Id { get; set; }
        
        public Estudiante Estudiante { get; set; }
        
        public ICollection<Materia> Materias { get; set; }
        
        public Profesor Profesor { get; set; } 
        public Curso Curso { get; set; }
    }
}