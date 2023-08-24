import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MateriaService } from 'src/app/service/materias.service';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {
  materias: any[] = []; 

  constructor(
    private snackBar: MatSnackBar,
    private materiaService: MateriaService
  ) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias(): void {
    this.materiaService.obtenerMaterias().subscribe(
      materias => {
        this.materias = materias;
      },
      error => {
        console.error('Error al cargar las materias:', error);
        this.mostrarMensajeError('Error al cargar las materias');
      }
    );
  }

  eliminarMateria(materiaId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta materia?')) {
      this.materiaService.eliminarMateria(materiaId).subscribe(
        () => {
          this.cargarMaterias();
          this.mostrarMensajeExito('Materia eliminada exitosamente');
        },
        error => {
          console.error('Error al eliminar materia:', error);
          this.mostrarMensajeError('Error al eliminar materia');
        }
      );
    }
  }

  private mostrarMensajeExito(mensaje: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: 'exito-snackbar'
    };
    this.snackBar.open(mensaje, 'Cerrar', config);
  }

  private mostrarMensajeError(mensaje: string): void {
    const config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: 'error-snackbar'
    };
    this.snackBar.open(mensaje, 'Cerrar', config);
  }
}
