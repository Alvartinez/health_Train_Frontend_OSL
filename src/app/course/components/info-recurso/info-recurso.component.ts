import { Component } from '@angular/core';
import { ResourceService } from '@rutas/course/services/recurso.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaTiempo } from '@rutas/course/interfaces/recurso';

@Component({
  selector: 'info-recurso',
  templateUrl: './info-recurso.component.html',
  styleUrls: ['./info-recurso.component.css']
})
export class InfoRecursoComponent {
  
  titleResource: any;

  nombreVideo:any;
  urlVideo:any;

  nombrePodcast:any;
  urlPodcast:any;

  idTime:any;
  idVideo:any;
  idPodcast:any;

  tituloTime:any;

  isVideo:boolean = false;
  isPodcast:boolean = false;
  isTimeline:boolean = false;

  hitos:any;

  lineaTiempoConHitos:LineaTiempo = {
    linea: {
      id_modulo:0,
      nombre:""
    },
    hitos: []
}

  constructor(private location: Location,
              private router: Router,
              private activatedRoute:ActivatedRoute,
              private _resourceService:ResourceService) {}

  ngOnInit() {
    const {id}= this.activatedRoute.snapshot.params;
    const {resource}= this.activatedRoute.snapshot.params;

    this.titleResource = resource;

    if(resource === "Video") {
      this.isVideo = true;

      this.idVideo = id;

      this._resourceService.getVideo(id).subscribe({
        next:(video)=>{
          console.log(video)
          this.nombreVideo = video?.video.nombre;
          this.urlVideo =  video?.video.video;
        }
      });
    }

    if(resource === "Podcast"){
      this.isPodcast = true;

      this.idPodcast = id;

      this._resourceService.getPodcast(id).subscribe({
        next:(podcast) => {
          console.log(podcast)
          this.nombrePodcast = podcast?.podcast.nombre;
          this.urlPodcast = podcast?.podcast.link_podcast;
        }
      });
    }

    if(resource === "Linea del tiempo"){
      this.isTimeline = true;

      this._resourceService.getLine(id).subscribe({
        next:(line) => {
          console.log(line);

          this.lineaTiempoConHitos = line.response;

          this.tituloTime = this.lineaTiempoConHitos?.linea;

          this.hitos = this.lineaTiempoConHitos?.hitos;

        }
      });
    }

  }

  elimina(id:number){
    console.log(id);

    console.log(this.titleResource)

    if(this.titleResource === "Linea del tiempo"){
      this._resourceService.deleteLine(id).subscribe({
        next:(linea)=>{
          console.log(linea);
          this.location.back();
        }
      });
    }

    if(this.titleResource === "Video"){
      this._resourceService.deleteVideo(id).subscribe({
        next:(video)=>{
          console.log(video);

          this.location.back();
        }
      });
    }

    if(this.titleResource === "Podcast"){
      this._resourceService.deletePodcast(id).subscribe({
        next:(podcast)=>{
          console.log(podcast);
          this.location.back();
        }
      });
    }


  }

  eliminarHito(id:number){

    this._resourceService.deleteHito(id).subscribe({
      next:(hito)=>{
        console.log(hito);

        window.location.reload();

      }
    });

  }

  regresar(){
    this.location.back();
  }

}
