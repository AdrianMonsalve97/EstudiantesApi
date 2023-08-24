import { Component } from '@angular/core';
import { CursosService } from '../../service/curso.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-crear-curso',
  templateUrl:'./crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {
  nombre: string = ''; 

  constructor(private cursosService: CursosService, private router: Router, private snackBar: MatSnackBar) {}

  crearCurso(): void {
    if (!this.nombre) {
      return;
    }
  
    this.cursosService.crearCurso({
      nombre: this.nombre,
      id: 0,
    
    }).subscribe(
      () => {
        this.mostrarMensajeExito('Curso creado exitosamente');
        
        this.router.navigate(['/listado-cursos']);
      },
      error => {
        this.mostrarMensajeError('Error al crear curso');
        console.error('Error al crear curso:', error);
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
