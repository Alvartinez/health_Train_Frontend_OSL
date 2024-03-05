import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Podcast, Video } from '@rutas/course/interfaces/recurso';
import { RecursoVidPod } from '@rutas/course/model/recursos.model';
import { ResourceService } from '@rutas/course/services/recurso.service';

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})
export class RecursoComponent {

  recursoVideo:RecursoVidPod = new RecursoVidPod();
  @Input() video: boolean;

  titulo = "";

  moduloUrl:any;

  tituloPodcast = "Podcast";
  tituloVideo = "Video";

  videoNuevo: Video = {
    id_modulo: 0,
    recurso: "",
    nombre: "",
    video: ""
  }

  podcastNuevo: Podcast = {
    id_modulo: 0,
    recurso: "",
    nombre: "",
    podcast: ""
  }

  constructor(private router: Router,
              private activatedRoute:ActivatedRoute,
              private _recursoService:ResourceService
            ) {}

  ngOnInit(){
    const {id}= this.activatedRoute.snapshot.params;

    const currentUrl = this.router.url;
    this.moduloUrl = currentUrl.split('/resources')[0];

    this.videoNuevo.id_modulo = id;
    this.podcastNuevo.id_modulo = id;

    if(this.video){
      this.titulo = this.tituloVideo;
      this.videoNuevo.recurso = this.titulo;
      this.podcastNuevo.recurso = this.titulo;
    } else {
      this.titulo = this.tituloPodcast;
      this.videoNuevo.recurso = this.titulo;
      this.podcastNuevo.recurso = this.titulo;
    }
  }

  

  guardar(forma: NgForm) {
    if(forma.invalid){
      Object.values(forma.controls).forEach(control=> control.markAllAsTouched())
      return;
    }

    if(this.titulo === "Video"){
      this.videoNuevo.nombre = this.recursoVideo.nombre;
      this.videoNuevo.video = this.recursoVideo.url;
  
      console.log(this.videoNuevo)
  
      this._recursoService.postVideo(this.videoNuevo).subscribe({
        next: () => {
          this.router.navigateByUrl(this.moduloUrl+"/infoDoc-modulo");
        }
      });
    }else{
      this.podcastNuevo.nombre = this.recursoVideo.nombre;
      this.podcastNuevo.podcast = this.recursoVideo.url;

      console.log(this.podcastNuevo)

      this._recursoService.postPodcast(this.podcastNuevo).subscribe({
        next: () =>{
          this.router.navigateByUrl(this.moduloUrl+"/infoDoc-modulo");
        }
      });

    }


  }

}
