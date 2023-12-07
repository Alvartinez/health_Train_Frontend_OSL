import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  loading: boolean = false;

  constructor(private router:Router){}

  login(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/register')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl+"/login");
  }

}
