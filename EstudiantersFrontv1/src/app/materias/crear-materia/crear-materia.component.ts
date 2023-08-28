import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriaService } from '../../service/materias.service';
import { Profesor } from '../../models/profesor';
import { Curso } from '../../models/curso'; // 

@Component({
  selector: 'app-crear-materia',
  templateUrl: './crear-materia.component.html',
  styleUrls: ['./crear-materia.component.css']
})
export class CrearMateriaComponent implements OnInit {
  materiaForm: FormGroup;
  profesores: Profesor[] = [];
  cursos: Curso[] = [];

  constructor(
    private fb: FormBuilder,
    private materiaService: MateriaService
  ) {
    this.materiaForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      profesor: [null, Validators.required],
      curso: [null, Validators.required], // Use 'curso' instead of 'cursos'
    });
  }

  ngOnInit(): void {
    this.materiaService.obtenerProfesores().subscribe(
      profesores => {
        this.profesores = profesores;
      },
      error => {
        console.error('Error al obtener profesores:', error);
      }
    );

    this.materiaService.obtenerCursos().subscribe(
      cursos => {
        this.cursos = cursos;
      },
      error => {
        console.error('Error al obtener cursos:', error);
      }
    );
  }

  crearMateria(): void {
    if (this.materiaForm.invalid) {
      return;
    }

    const materia = this.materiaForm.value;

    this.materiaService.crearMateria(materia).subscribe(
      () => {
        console.log('Materia creada exitosamente');
      },
      error => {
        console.error('Error al crear materia:', error);
      }
    );
  }
}

