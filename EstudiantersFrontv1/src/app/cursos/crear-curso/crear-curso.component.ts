import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CursosService } from '../../service/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {
  cursoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.cursoForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  crearCurso(): void {
    if (this.cursoForm.invalid) {
      return;
    }

    const nombre = this.cursoForm.get('nombre')?.value;
    const id = this.cursoForm.get('id')?.value;
    
    this.cursosService.crearCurso({
      nombre,
      id
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
