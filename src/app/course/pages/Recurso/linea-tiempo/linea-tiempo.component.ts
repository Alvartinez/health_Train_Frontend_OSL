import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linea-tiempo',
  templateUrl: './linea-tiempo.component.html',
  styleUrls: ['./linea-tiempo.component.css']
})
export class LineaTiempoComponent {
  constructor(private router: Router) {}

  titulo: string = "HISTORIA Y EVOLUCIÓN";
  hitos: string = "2500000 A.C - Año 1857";

  cierre(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/resource')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl);
  }
}
