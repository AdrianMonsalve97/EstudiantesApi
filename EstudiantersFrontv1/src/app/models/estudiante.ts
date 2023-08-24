import { Materia } from "./materia";
import { RegistroCurso } from "./registrocurso";

export interface Estudiante {
    id: number;
    nombre: string;
    registrosCursos: RegistroCurso[];
    materiasRegistradas: Materia[];
  }
  