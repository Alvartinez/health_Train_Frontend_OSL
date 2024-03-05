import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent {

  constructor(private router: Router) {}

  curso(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/terminos-y-condiciones')[0];

    this.router.navigateByUrl(baseUrl);
  }

}
