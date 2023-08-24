import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudiantesService } from '../../service/estudiantes.service';
import { MessageService } from '../../service/massage.service';
import { Router } from '@angular/router';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {
  estudianteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private estudianteService: EstudiantesService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.estudianteForm = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
  }

  crearEstudiante(): void {
    if (this.estudianteForm.invalid) {
      return;
    }

    const nuevoEstudiante: Estudiante = {
      id: 0,
      nombre: this.estudianteForm.get('nombre')?.value,
      registrosCursos: [],
      materiasRegistradas: []
    };

    this.estudianteService.crearEstudiante(nuevoEstudiante).subscribe(
      () => {
        this.messageService.mostrarMensajeExito('Estudiante creado exitosamente');
        this.router.navigate(['/listar']);
      },
      error => {
        this.messageService.mostrarMensajeError('Error al crear estudiante: ' + error.message);
      }
    );
  }
 
  
  
}
