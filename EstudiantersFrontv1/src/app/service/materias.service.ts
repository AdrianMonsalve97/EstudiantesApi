import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../models/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private baseUrl = 'http://localhost:5000/api/materias';

  constructor(private http: HttpClient) {}

  obtenerMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(this.baseUrl);
  }

  obtenerMateriaPorId(id: number): Observable<Materia> {
    return this.http.get<Materia>(`${this.baseUrl}/${id}`);
  }

  crearMateria(curso: Materia): Observable<Materia> {
    return this.http.post<Materia>(this.baseUrl, curso);
  }

  actualizarMateria(id: number, curso: Materia): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, curso);
  }

  eliminarMateria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
