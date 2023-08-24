import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private baseUrl = 'http://localhost:5000/api/cursos';

  constructor(private http: HttpClient) {}

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl);
  }

  obtenerCursoPorId(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.baseUrl}/${id}`);
  }

  crearCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.baseUrl, curso);
  }

  actualizarCurso(id: number, curso: Curso): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, curso);
  }

  eliminarCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
