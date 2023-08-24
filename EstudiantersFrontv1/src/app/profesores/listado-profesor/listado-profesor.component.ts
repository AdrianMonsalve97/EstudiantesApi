import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-listado-profesor',
  templateUrl: './listado-profesor.component.html',
  styleUrls: ['./listado-profesor.component.css']
})
export class ListadoProfesorComponent implements OnInit {
  profesores: Profesor[] = [];
  columnasProfesor: string[] = ['id', 'nombre', 'opciones'];

  dataSource!: MatTableDataSource<Profesor>;

  constructor(private profesorService: ProfesorService, private router: Router) {}

  ngOnInit(): void {
    console.log('ListadoProfesorComponent initialized');
    this.obtenerProfesores();
  }

  obtenerProfesores(): void {
    this.profesorService.obtenerProfesores().subscribe(
      profesores => {
        this.profesores = profesores;
        this.dataSource = new MatTableDataSource(this.profesores);
      },
      error => {
        console.error('Error al cargar los profesores:', error);
      }
    );
  }

  editarProfesor(profesorId: number): void {
    this.router.navigate(['/editar-profesor', profesorId]);
  }

  eliminarProfesor(profesorId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
      this.profesorService.eliminarProfesor(profesorId)
        .subscribe(
          () => {
            this.profesores = this.profesores.filter(profesor => profesor.id !== profesorId);
            this.dataSource = new MatTableDataSource(this.profesores);
          },
          error => {
            console.error('Error al eliminar profesor:', error);
          }
        );
    }
  }
}

