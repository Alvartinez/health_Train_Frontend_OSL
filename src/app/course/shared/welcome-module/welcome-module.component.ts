import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-welcome-module',
  templateUrl: './welcome-module.component.html',
  styleUrls: ['./welcome-module.component.css']
})
export class WelcomeModuleComponent {

  @Input() modulo: Number | undefined;
  @Input() tituloWelcome: String | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location){}
  
  numero:any;
  rutaC = "/contenido";
  rutaS = "/sabias-que";
  rutaQ = "/quiz-formativo";
  token:any = localStorage.getItem("x-token");
  decoded:any = jwt_decode(this.token);
  tokenId = this.decoded.id; 

  contenido(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/contenidos')[0];
    console.log(baseUrl+this.rutaC)

    const segments = baseUrl.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero)
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl+"/contenidos"+this.rutaC+this.numero);

  }

  sabia(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/contenidos')[0];
    console.log(baseUrl+this.rutaC)

    const segments = baseUrl.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero)
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl+"/sabias"+this.rutaS+this.numero);

  }  

  quizz(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/contenidos')[0];

    const segments = baseUrl.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero)
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl+"/quiz"+this.rutaQ+this.numero+"/"+this.numero);

  } 


}
