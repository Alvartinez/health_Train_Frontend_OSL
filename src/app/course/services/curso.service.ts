import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Course } from '../interfaces/curso';

export class CourseService {

  private http = inject(HttpClient);

  private myAppUrl:string = environment.endpoint; // http://localhost:3006/
  private myApiUrl = "api/cursos/";

  getCourse(id:any): Observable<any>{
      return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}Course/${id}`);
  }

  getAllCursos():Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getEnrolledCourses(id:any): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.myApiUrl}courseEnrolled/${id}`);
  }

  postCourse(curso: Course): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}newCourse`, curso);
  }

  updateCourse(curso: Course): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}updateCourse`, curso);
  }

}
