import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}

  username: string = "";
  password: string = "";
  loading: boolean = false;
  reset: boolean = false;

  login(){

    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/login')[0];
    console.log(baseUrl+"/users/visitor/vist-home");
    this.router.navigateByUrl(baseUrl+"/users/visitor/vist-home");
  }

  vaciarCampos() {
    this.username = "";
    this.password = "";
  }

  register(){
    this.router.navigate(["Services/healthtrain","register"]);
  }

  handleEventoBooleano(evento: boolean) {
    this.reset = false;
  }

  reset_Password(){
    this.reset =true;

  }

}
