import { Injectable, inject } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Person } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient); 
  private myAppUrl: string = environment.endpoint;
  private myApiUrl = "api/auth/";

  login(user: Person): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}login`, user);
  }

  changeRol(rol:any): Observable<any>{
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}changeRole`, rol);
  }

  inscripcion(inscrito:any): Observable<any>{
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}inscripcion`, inscrito);
  }

  inscrito(inscrito:any): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}inscrito/${inscrito.idCurso}/${inscrito.idPersona}`);
  }

  refreshToken(refreshToken: any): Observable<any> {
    return this.http.post<any>(`${this.myAppUrl}${this.myApiUrl}refresh-token`, { refreshToken });
  }

  obtenerRolDelToken(token: string): string | null {
    try {
      const decodedToken: any = jwt_decode(token);
      const rol = decodedToken.rol;

      return rol || null;
      
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return null;
    }
  }

}