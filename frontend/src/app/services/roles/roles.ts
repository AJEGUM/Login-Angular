import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RolesService {

  // LOS SERVICES SIRVEN PARA HACER PETICIONES HTTP AL BACKEND 

  private apiUrl = `${environment.API_URL}/roles`;

  constructor(private http: HttpClient) {}

  obtenerRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // GET a la URL de la API
  }

  obtenerRolPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  agregarRol(rol: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, rol); // POST con el objeto rol
  }

  actualizarRol(id: number, rol: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, rol); // PUT para actualizar rol
  }

  eliminarRol(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`); // DELETE por ID
  }
}
