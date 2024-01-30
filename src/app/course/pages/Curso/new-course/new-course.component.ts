import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

menu:string = "menu";

ngOnInit():void{
 
  this.updateMenu();

}

@HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.updateMenu();
}

updateMenu(){
  const screenWidth = window.innerWidth;

  if (screenWidth >= 630) {
    this.menu = "chevron_right";
  } else {
    this.menu = "menu";
  }
}

}
