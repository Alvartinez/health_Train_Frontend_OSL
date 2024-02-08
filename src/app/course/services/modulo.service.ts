import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Module } from '../interfaces/modulo';

@Injectable({ providedIn: 'root' })

export class ModuleService {

  constructor(private http: HttpClient){}

  private myAppUrl:string = environment.endpoint; 
  private myApiUrl = "api/module/";

  getModule(id:any): Observable<any>{
      return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  getAllModules(id_curso:any):Observable<any[]>{
      return this.http.get<any[]>(`${this.myAppUrl}${this.myApiUrl}getModules/${id_curso}`);
  }

  newModule(modulo: Module): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}newModule`, modulo);
  }

  deleteModule(id:number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}${this.myApiUrl}deleteModule/${id}`);
  }

  updateModule(modulo:Module) : Observable<any>{
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}updateModule`, modulo);
  }

}