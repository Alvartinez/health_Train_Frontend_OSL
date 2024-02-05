import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-linea-tiempo',
  templateUrl: './linea-tiempo.component.html',
  styleUrls: ['./linea-tiempo.component.css']
})
export class LineaTiempoComponent {

  mostrarContenedor: boolean = true;

  periodos = [
    { titulo: "Período paleolítico", fecha: "2'500.000 A.C" },
    { titulo: "Período Hambriento", fecha: "10.000 A.C" },
    { titulo: "Período Hambriento", fecha: "10.000 A.C" },
    // Añade más períodos aquí según sea necesario
  ];

  constructor(private location: Location) {}

  navegarAtras() {
    this.location.back();
  }

  toggleContenedor() {
    this.mostrarContenedor = !this.mostrarContenedor;
  }

}
