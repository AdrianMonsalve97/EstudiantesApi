
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroCurso } from '../models/registrocurso';

@Injectable({
  providedIn: 'root'
})
export class RegistroCursoService {
  private baseUrl = 'http://localhost:5000/api/registros';

  constructor(private http: HttpClient) {}

  getRegistrosCursos(): Observable<RegistroCurso[]> {
    return this.http.get<RegistroCurso[]>(this.baseUrl);
  }

  getRegistroCurso(id: number): Observable<RegistroCurso> {
    return this.http.get<RegistroCurso>(`${this.baseUrl}/${id}`);
  }

  createRegistroCurso(registroCurso: RegistroCurso): Observable<any> {
    return this.http.post(this.baseUrl, registroCurso);
  }

  updateRegistroCurso(id: number, registroCurso: RegistroCurso): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, registroCurso);
  }

  deleteRegistroCurso(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
