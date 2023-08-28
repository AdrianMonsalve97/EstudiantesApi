import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia';
import { Profesor } from '../models/profesor';
import { ProfesorService } from './profesor.service';
import { CursosService } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private baseUrl = 'http://localhost:5000/api/materia';

  constructor(private http: HttpClient,
    private profesorService: ProfesorService,
    private cursosService: CursosService
    ) {}

  obtenerMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${this.baseUrl}/materia`);
  }
  
  obtenerMateriaPorId(id: number): Observable<Materia> {
    return this.http.get<Materia>(`${this.baseUrl}/materia/${id}`);
  }
  
  crearMateria(materia: Materia): Observable<Materia> {
    return this.http.post<Materia>(`${this.baseUrl}/materia`, materia);
  }
  
  actualizarMateria(id: number, materia: Materia): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/materia/${id}`, materia);
  }
  
  eliminarMateria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/materia/${id}`);
  }
  obtenerProfesores(): Observable<Profesor[]> {
    return this.profesorService.obtenerProfesores();
  }
  obtenerCursos(): Observable<Profesor[]> {
    return this.cursosService.obtenerCursos();
  }
}
