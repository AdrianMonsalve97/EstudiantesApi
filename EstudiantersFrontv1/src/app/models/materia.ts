import { Curso } from "./curso";
import { Profesor } from "./profesor";

export interface Materia {
  id: number;
  nombre: string;
  profesor: Profesor;
  curso: Curso;
  
}
