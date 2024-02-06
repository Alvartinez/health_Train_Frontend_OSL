import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent {

  valueTextoPlano: string='Texto Plano';
  timeLine:string= 'Linea de tiempo';
  valuePodcast:string='Podcast';
  valueVideo:string='Video';

  opciones = {
    isTextoPlano:false,
    isTimeLine:false,
    isPodcast:false,
    isVideo:false
  }

  resetOpciones() { 
    for (let key in this.opciones) {
      // Cambiamos el atributo a false
      this.opciones[key as keyof typeof this.opciones] = false;
    }
    console.log(this.opciones);
  }

  validarSeleccionado(recurso: string) {
    
    if(recurso === this.valueTextoPlano){
      this.resetOpciones();
      this.opciones.isTextoPlano= true;
    }else if(recurso === this.timeLine){
      this.resetOpciones();
      this.opciones.isTimeLine=true;
    }else if(recurso=== this.valuePodcast){
      this.resetOpciones();
      this.opciones.isPodcast=true;
    }else if(recurso=== this.valueVideo){
      this.resetOpciones();
      this.opciones.isVideo=true;
    }
  }
 


 

  constructor(private location: Location) {
    
  }
  onRegresar() {
    this.location.back();
  }
  
  title = 'ayudaAlvaro';

}
