import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private baseUrl = 'http://localhost:5000/api/profesores';

  constructor(private http: HttpClient) {}

  obtenerProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.baseUrl);
  }

  obtenerProfesorPorId(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.baseUrl}/${id}`);
  }

  crearProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.baseUrl, profesor);
  }

  actualizarProfesor(id: number, profesor: Profesor): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, profesor);
  }

  eliminarProfesor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
