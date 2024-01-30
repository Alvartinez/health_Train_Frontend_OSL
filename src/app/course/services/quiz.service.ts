import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class QuizService {

    private http = inject(HttpClient); 
    private myAppUrl: string = environment.endpoint;
    private myApiUrl = "api/quiz/";

    getQuiz(id:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}quiz/${id}`);
    }

    saveQuiz(quizData: any): Observable<any>{
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}saveQuiz`, quizData);
    }

    resultQuiz(): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
    }

}