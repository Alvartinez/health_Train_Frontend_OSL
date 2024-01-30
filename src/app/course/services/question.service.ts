import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

export class QuestionService {

    private http = inject(HttpClient);
  
    private myAppUrl:string = environment.endpoint; 
    private myApiUrl = "api/question/";
  
    getModule(id:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}${id}`);
    }
  
    getAllModules(id_curso:any):Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}getModules/${id_curso}`);
    }
  
    addQuestion(modulo: any): Observable<any> {
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}newModule`, modulo);
    }
  
  }