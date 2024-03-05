import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Hito, Line, Podcast, Video } from '../interfaces/recurso';

export class ResourceService {

  private http = inject(HttpClient);

  private myAppUrl:string = environment.endpoint; // http://localhost:3006/
  private videoUrl = "api/video/";
  private podcastUrl = "api/podcast/";
  private lineaUrl = "api/linea/";
  private sabiasUrl = "api/sabias/";

  //Video
  getVideo(id:any): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.videoUrl}${id}`);
  }

  getAllVideos(id:any):Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.videoUrl}videos/${id}`);
  }

  postVideo(video: Video): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.videoUrl}newVideo`, video);
  }

  updateVideo(video: Video): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.videoUrl}updateVideo`, video);
  }

  deleteVideo(id:number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}${this.videoUrl}deleteVideo/${id}`);
  }

  //Podcast
  getPodcast(id:any): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.podcastUrl}${id}`);
  }

  getAllPodcasts(id:any):Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.podcastUrl}podcasts/${id}`);
  }

  postPodcast(podcast: Podcast): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.podcastUrl}newPodcast`, podcast);
  }

  updatePodcast(podcast: Podcast): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.podcastUrl}updatePodcast`, podcast);
  }

  deletePodcast(id:number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}${this.podcastUrl}deletePodcast/${id}`);
  }

  //linea del tiempo
  getLine(id:any): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.lineaUrl}${id}`);
  }

  getAllLines(id:any):Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.lineaUrl}getLines/${id}`);
  }

  postLine(linea: Line): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.lineaUrl}newLine`, linea);
  }

  updateLine(linea: Line): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.lineaUrl}updateLine`, linea);
  }

  deleteLine(id:number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}${this.lineaUrl}deleteLine/${id}`);
  }
  
  //Hito de la Línea del tiempo
  getHito(id:any): Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.lineaUrl}hito/${id}`);
  }

  getAllHitos(id:any):Observable<any>{
    return this.http.get<any>(`${this.myAppUrl}${this.lineaUrl}hitos/${id}`);
  }

  postHito(hito: Hito): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.lineaUrl}newHito`, hito);
  }

  updateHito(hito: Hito): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.lineaUrl}updateHito`, hito);
  }

  deleteHito(id:number): Observable<number> {
    return this.http.delete<number>(`${this.myAppUrl}${this.lineaUrl}deleteHito/${id}`);
  }


}