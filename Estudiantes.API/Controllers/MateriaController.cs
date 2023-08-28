using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Estudiantes.API.Models;
using Estudiantes.API.Data;
using Estudiantes.API.Services;
namespace Estudiantes.API.Controllers
{
    [Route("api/materia")]
    [ApiController]
    public class MateriaController : ControllerBase
    {
        private readonly MateriaService _materiaService;
        private readonly ApplicationDbContext _context;

        public MateriaController(MateriaService materiaService, ApplicationDbContext context)
        {
            _materiaService = materiaService;
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Materia>> GetMaterias()
        {
            var materias = _materiaService.GetAllMaterias();
            return Ok(materias);
        }

        [HttpGet("{id}")]
        public ActionResult<Materia> GetMateria(int id)
        {
            var materia = _materiaService.GetMateriaById(id);
            if (materia == null)
            {
                return NotFound();
            }
            return Ok(materia);
        }
        [HttpPost]
        public ActionResult CreateMateria(Materia materia)
        {
            var profesor = materia.Profesor;

            var profesorAsignado = _context.Profesores.FirstOrDefault(p => p.Id == profesor.Id);

            if (profesorAsignado != null && profesorAsignado.Materias.Count >= 2)
            {
                return BadRequest("El profesor ya tiene asignadas dos materias.");
            }

            var cursoAsignado = _context.Cursos.FirstOrDefault(c => c.Id == materia.Curso.Id);

            if (cursoAsignado == null)
            {
                return BadRequest("El curso especificado no existe.");
            }

            materia.Curso = cursoAsignado;

            _materiaService.CreateMateria(materia);
            return CreatedAtAction(nameof(GetMateria), new { id = materia.Id }, materia);
        }



        [HttpPut("{id}")]
        public ActionResult UpdateMateria(int id, Materia materia)
        {
            if (id != materia.Id)
            {
                return BadRequest();
            }

            _materiaService.UpdateMateria(materia);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMateria(int id)
        {
            var materia = _materiaService.GetMateriaById(id);
            if (materia == null)
            {
                return NotFound();
            }

            _materiaService.DeleteMateria(id);
            return NoContent();
        }

    }
}
