import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent {

  audioHtml: string | SafeHtml;
  
  constructor(private location: Location, private sanitizer: DomSanitizer) {}

  navegarAtras() {
    this.location.back();
  }
}
