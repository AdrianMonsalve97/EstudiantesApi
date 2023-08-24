import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MateriaService } from 'src/app/service/materias.service';

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent {
  nombre: string = '';

  constructor(
    private materiaService: MateriaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  crearMateria(): void {
    if (!this.nombre) {
      return;
    }

    this.materiaService.crearMateria({
      nombre: this.nombre,
      id: 0
    }).subscribe(
      () => {
        this.mostrarMensajeExito('Materia creada exitosamente');
        this.router.navigate(['/materias']);
      },
      error => {
        this.mostrarMensajeError('Error al crear materia');
        console.error('Error al crear materia:', error);
      }
    );
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
