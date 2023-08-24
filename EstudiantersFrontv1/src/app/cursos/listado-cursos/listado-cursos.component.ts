import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursosService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.component.html',
  styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent implements OnInit {
  cursos: Curso[] = [];
  columnasCursos: string[] = ['id', 'nombre', 'opciones'];


  constructor(private cursosService: CursosService, private router: Router) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void {
    this.cursosService.obtenerCursos().subscribe(
      cursos => {
        this.cursos = cursos;
      },
      error => {
        console.error('Error al cargar los cursos:', error);
      }
    );
  }

  editarCurso(cursoId: number): void {
    this.router.navigate(['/editar-curso', cursoId]);
  }

  eliminarCurso(cursoId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este curso?')) {
      this.cursosService.eliminarCurso(cursoId).subscribe(
        () => {
          this.cursos = this.cursos.filter(curso => curso.id !== cursoId);
        },
        error => {
          console.error('Error al eliminar curso:', error);
        }
      );
    }
  }
}
