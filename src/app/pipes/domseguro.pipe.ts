import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    const videoID = value.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoID}`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

}
