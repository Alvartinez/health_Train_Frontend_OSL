import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-texto-plano',
  templateUrl: './texto-plano.component.html',
  styleUrls: ['./texto-plano.component.css']
})
export class TextoPlanoComponent {

  public activeTabIndex: number = 0; // Usamos un índice para controlar el tab activo

  public subtemas = [
    {
      id: 'primero',
      titulo: 'Soy el primer subtema',
      contenido: 'Aquí va el contenido del primer subtema...',
      imagen: 'assets/image/alimentosContaminados.png',
    },
    {
      id: 'segundo',
      titulo: 'Soy el segundo subtema',
      contenido: 'Aquí va el contenido del segundo subtema...',
      imagen: 'assets/image/alimentosContaminados.png',
    },
    // Agrega más subtemas según sea necesario
  ];

  constructor(private location: Location) {}

  public setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  public movePrevious(): void {
    if (this.activeTabIndex > 0) {
      this.activeTabIndex--;
    }
  }

  public moveNext(): void {
    if (this.activeTabIndex < this.subtemas.length - 1) {
      this.activeTabIndex++;
    }
  }

  navegarAtras() {
    this.location.back();
  }

}
