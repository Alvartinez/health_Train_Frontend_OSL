import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.css']
})
export class SectionHomeComponent {

  constructor(private router:Router){}

  login(){
    this.router.navigate(["Services/healthtrain","login"]);
  }

  register(){
    this.router.navigate(["Services/healthtrain","register"]);
  }

}
