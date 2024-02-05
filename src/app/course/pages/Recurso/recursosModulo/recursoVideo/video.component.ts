import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  
  constructor(private location: Location) {}

  video:string = "";

  navegarAtras() {
    this.location.back();
  }
  
}
