import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { ErrorService } from 'src/app/services/error.service';
// import { PersonService } from 'src/app/services/persona.service';

@Component({
  selector: 'module-navbar',
  templateUrl: './module-navbar.component.html',
  styleUrls: ['./module-navbar.component.css']
})
export class ModuleNavbarComponent {
  
  nombre: String | undefined;

  constructor(
    private toastr: ToastrService, 
    private router: Router, 
    // private _personService: PersonService, 
    // private _errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.getName();
  }

  getName(){
    this.nombre = "Cristina Azul";
  }


  logOut(){
    localStorage.removeItem("x-token");
    this.toastr.success("¡Vuelva pronto!", "Exitoso");
    this.router.navigate(["Services/healthtrain","login"]);
  }
}
