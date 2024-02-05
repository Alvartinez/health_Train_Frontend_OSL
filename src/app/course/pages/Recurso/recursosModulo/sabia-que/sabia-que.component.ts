import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sabia-que',
  templateUrl: './sabia-que.component.html',
  styleUrls: ['./sabia-que.component.css']
})
export class SabiaQueComponent {
  constructor(private location: Location) {}

  navegarAtras() {
    this.location.back();
  }
}
