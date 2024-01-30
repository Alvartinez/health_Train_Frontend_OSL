import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Module } from '../interfaces/modulo';

export class ModuleService {

  private http = inject(HttpClient);

  private myAppUrl:string = environment.endpoint; 
  private myApiUrl = "api/module/";

  getModule(id:any): Observable<any>{
      return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  getAllModules(id_curso:any):Observable<any>{
      return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}getModules/${id_curso}`);
  }

  newModule(modulo: Module): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}newModule`, modulo);
  }

}