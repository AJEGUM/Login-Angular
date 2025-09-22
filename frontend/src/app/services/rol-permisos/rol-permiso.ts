import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RolPermisoService {

  // LOS SERVICES SIRVEN PARA HACER PETICIONES HTTP AL BACKEND 

  private apiUrl = `${environment.API_URL}/rol-permiso`;

  constructor(private http: HttpClient) {}

  obtenerRolPermisos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // GET a la URL de la API
  }

  obtenerRolPermisoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  asignarPermiso(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data); // POST con los datos
  }

  actualizarRolPermiso(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data); // PUT para actualizar
  }

  eliminarRolPermiso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`); // DELETE por ID
  }
}
