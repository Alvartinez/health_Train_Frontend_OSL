import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'content-dropdowns',
  templateUrl: './content-dropdowns.component.html',
  styleUrls: ['./content-dropdowns.component.css']
})
export class ContentDropdownsComponent {

  constructor(private router: Router, private route: ActivatedRoute){}

  @Input() titular: String | undefined;
  
  numero:any;
  rutaC = "contenido";
  rutaS = "/sabias-que";
  rutaQ = "/quiz-formativo";
  token:any = localStorage.getItem("x-token");
  decoded:any = jwt_decode(this.token);
  tokenId = this.decoded.id; 

  contenido(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/modulo')[0];
    console.log(baseUrl+"/modulo/contenidos"+this.rutaC)

    this.router.navigate([baseUrl, "modulo", 'contenidos', this.rutaC], { relativeTo: this.route });

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
    console.log(baseUrl)

    const segments = baseUrl.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero)
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl+"/quiz"+this.rutaQ+this.numero+"/"+this.numero); 

  } 

}
