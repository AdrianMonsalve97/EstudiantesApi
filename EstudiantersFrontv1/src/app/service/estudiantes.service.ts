import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  [x: string]: any;
  private apiUrl = 'http://localhost:5000/api/estudiantes';

  constructor(private http: HttpClient) {}

  crearEstudiante(estudiante: Estudiante): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.post(url, estudiante);
  }

  obtenerEstudiantes(): Observable<Estudiante[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Estudiante[]>(url);
  }
  eliminarEstudiante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
