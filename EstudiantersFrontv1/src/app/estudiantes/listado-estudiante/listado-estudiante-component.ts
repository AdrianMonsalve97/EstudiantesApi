import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudiantesService } from '../../service/estudiantes.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado-estudiantes',
  templateUrl: './listado-estudiantes.component.html',
  styleUrls: ['./listado-estudiantes.component.css']
})
export class ListadoEstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  dataSource!: MatTableDataSource<Estudiante>;
  columnas: string[] = ['id', 'nombre', 'opciones'];

  constructor(private estudianteService: EstudiantesService) {}

  ngOnInit(): void {
    this.estudianteService.obtenerEstudiantes().subscribe((estudiantes: Estudiante[]) => {
      this.estudiantes = estudiantes;
      this.dataSource = new MatTableDataSource(this.estudiantes);
    });
  }

  editarEstudiante(id: number): void {
    // Implementa la lógica para editar el estudiante con el ID proporcionado
  }

  eliminarEstudiante(id: number): void {
    this.estudianteService.eliminarEstudiante(id).subscribe(() => {
      this.estudiantes = this.estudiantes.filter(e => e.id !== id);
      this.dataSource.data = this.estudiantes;
    });
  }
}
