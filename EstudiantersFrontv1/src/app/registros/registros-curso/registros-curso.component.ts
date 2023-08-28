import { Component, OnInit } from "@angular/core";
import { RegistroCursoService } from "../../service/registro-curso.service";
import { RegistroCurso } from "../../models/registrocurso";
import { Materia } from "src/app/models/materia";
import { Curso } from "src/app/models/curso";

@Component({
  selector: "app-registro-curso",
  templateUrl: "./registro-curso.component.html",
  styleUrls: ["./registros-curso.component.css"],
})
export class RegistroCursoComponent implements OnInit {
  registrosCursos: RegistroCurso[] = [];
  cursos: Curso[] = [];
  materiasPorCurso: { [cursoId: number]: Materia[] } = {}; 
  selectedCursoId!: number;
  nuevoRegistro: {
    nombreEstudiante: string;
  } = {
    nombreEstudiante: "",
  };

  constructor(private registroCursoService: RegistroCursoService) {}

  ngOnInit(): void {
    this.fetchRegistrosCursos();
    this.fetchCursos();
  }

  fetchCursos() {
    this.cursos = [];
  }

  fetchRegistrosCursos() {
    this.registroCursoService.getRegistrosCursos().subscribe(
      (registrosCursos) => (this.registrosCursos = registrosCursos),
      (error) => console.error("Error fetching registros cursos:", error)
    );
  }

  loadMateriasPorCurso(cursoId: number) {
    this.materiasPorCurso[cursoId] = [];
  }
  
  getMateriasPorCurso(cursoId: number): Materia[] {
    return this.materiasPorCurso[cursoId] || [];
  }

  getMateriasNombres(materias: Materia[]): string {
    if (!materias) return "";
    return materias.map((materia) => materia.nombre).join(", ");
  }

  createRegistroCurso() {
    const newRegistroCurso: RegistroCurso = {
      id: 0,
      estudiante: {
        id: 0,
        nombre: this.nuevoRegistro.nombreEstudiante,
        registrosCursos: [],
        materiasRegistradas: [],
      },
      materias: [],
      profesor: {
        id: 0,
        nombre: "",
      },
      curso: {
        id: 0,
        nombre: "",
      },
    };
    this.registroCursoService.createRegistroCurso(newRegistroCurso).subscribe(
      (response) => {
        console.log("Registro creado:", response);
        this.fetchRegistrosCursos();
        // Limpia el formulario después de crear el registro
        this.nuevoRegistro = {
          nombreEstudiante: "",
          // Reiniciar otras propiedades según corresponda
          // ...
        };
      },
      (error) => console.error("Error creando registro curso:", error)
    );
  }

  updateRegistroCurso(registroCurso: RegistroCurso) {
    this.registroCursoService
      .updateRegistroCurso(registroCurso.id, registroCurso)
      .subscribe(
        (response) => {
          console.log("Registro actualizado:", response);
          this.fetchRegistrosCursos();
        },
        (error) => console.error("Error actualizando registro curso:", error)
      );
  }

  deleteRegistroCurso(id: number) {
    this.registroCursoService.deleteRegistroCurso(id).subscribe(
      () => {
        console.log("Registro eliminado");
        this.fetchRegistrosCursos();
      },
      (error) => console.error("Error eliminando registro curso:", error)
    );
  }
}
