import { Curso } from "./curso";
import { Estudiante } from "./estudiante";
import { Materia } from "./materia";
import { Profesor } from "./profesor";



export interface RegistroCurso {
  id: number;
  estudiante: Estudiante;
  materias: Materia[];
  profesor: Profesor; 
  curso: Curso;
}