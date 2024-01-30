import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Competencia, Course } from '../interfaces/curso';

export class CompetenceService {

  private http = inject(HttpClient);

  private myAppUrl:string = environment.endpoint; // http://localhost:3006/
  private myApiUrl = "api/competence/";

  getCompetence(id:any): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}competences/${id}`);
  }

  postCompetence(id: any, competencias:any): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}newCompetence/${id}`, competencias);
  }

  putCompetence(id: any, competencias:any): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}updateCompetence/${id}`, competencias);
  }

}