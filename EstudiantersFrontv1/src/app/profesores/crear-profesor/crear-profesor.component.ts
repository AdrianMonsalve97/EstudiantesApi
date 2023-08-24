import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesorService } from '../../service/profesor.service';
import { MessageService } from '../../service/massage.service';
import { Router } from '@angular/router';
import { Profesor } from '../../models/profesor';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {
  profesorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profesorervice: ProfesorService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profesorForm = this.formBuilder.group({
      nombre: ['', Validators.required]
    });
  }
  crearProfesor(): void {
    if (this.profesorForm.invalid) {
      return;
    }
  
    const nuevoProfesor: Profesor = {
      id: 0,
      nombre: this.profesorForm.get('nombre')?.value,
    };
  
    this.profesorervice.crearProfesor(nuevoProfesor).subscribe(
      () => {
        this.messageService.mostrarMensajeExito('Profesor creado exitosamente');
        this.router.navigate(['/listprofe']);
      },
      error => {
        this.messageService.mostrarMensajeError('Error al crear profesor: ' + error.message);
      }
    );
  }
  
  
  
}
