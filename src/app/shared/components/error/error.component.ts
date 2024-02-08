import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  constructor(private router:Router) {}

  tokenRol:any;

  ngOnInit() {
    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    this.tokenRol = decoded.rol; 
  }

  navegarAtras() {

    if (this.tokenRol != null) {

      switch (this.tokenRol) {
        case 'Visitante':
          this.router.navigate(["healthtrain","users","visitor", "vist-home"]);
          break;
        case 'Aprendiz':
          this.router.navigate(["healthtrain","users","apprentice", "user-home"]);
          break;
        case 'Docente':
          this.router.navigate(["healthtrain","users","teacher", "doc-home"]);
          break;
        case 'Admin':
          this.router.navigate(["healthtrain","users","admin", "admin-home"]);
          break;
        default:
          console.error('Rol desconocido:', this.tokenRol);
          break;
      }
    } else {
      this.router.navigate(["healthtrain","login"]);
    }

  }

}
