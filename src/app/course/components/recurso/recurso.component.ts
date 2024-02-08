import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecursoVidPod } from '@rutas/course/model/recursos.model';

@Component({
  selector: 'app-recurso',
  templateUrl: './recurso.component.html',
  styleUrls: ['./recurso.component.css']
})
export class RecursoComponent {

  recursoVideo:RecursoVidPod = new RecursoVidPod();
  @Input() video: boolean;

  titulo = "";

  tituloPodcast = "podcast";
  tituloVideo = "video";

  constructor() {
    
  }

  ngOnInit(){
    if(this.video){
      this.titulo = this.tituloVideo;
    } else {
      this.titulo = this.tituloPodcast;
    }
  }

  

  guardar(forma: NgForm) {
    if(forma.invalid){
      Object.values(forma.controls).forEach(control=> control.markAllAsTouched())
      return;
    }
    
}

}
