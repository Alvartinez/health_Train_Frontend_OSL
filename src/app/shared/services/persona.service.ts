import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Person } from '@rutas/user/shared/interfaces/persona';

@Injectable({
    providedIn: 'root'
})
export class PersonService { 
    private http = inject(HttpClient); 
    private myAppUrl: string = environment.endpoint;
    private myApiUrl = "api/personas/";

    getPeople(): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
    }

    getPerson(): Observable<Person>{
        return this.http.get<Person>(`${this.myAppUrl}${this.myApiUrl}User`);
    }

    signIn(user: Person): Observable<any>{
        return this.http.post(`${this.myAppUrl}${this.myApiUrl}newUser`, user);
    }

    getRoles(role:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}role/${role}`);
    }

    getStatus(status:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}status/${status}`);
    }

    getName(name:any): Observable<any>{
        return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}name/${name}`);
    }

    changeStatus(persona:Person):Observable<any>{
        return this.http.put(`${this.myAppUrl}${this.myApiUrl}/changeStatusUser`,persona);
    }

    updatePerson(persona:Person):Observable<any>{
        return this.http.put(`${this.myAppUrl}${this.myApiUrl}/updateUser`,persona);
    }

}