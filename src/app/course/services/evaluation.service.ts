import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EvaluationService {

    private http = inject(HttpClient); 
    private myAppUrl: string = environment.endpoint;
    private myApiUrl = "api/evaluacion/";

    getEvaluation(id:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}evaluacion/${id}`);
    }

    saveEvaluation(evaData: any): Observable<any>{
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}saveEvaluation`, evaData);
    }

    resultEvaluation(id:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}${id}`);
    }

}