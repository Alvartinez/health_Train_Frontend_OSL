import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '@rutas/shared/services/error.service';
import { PersonService } from '@rutas/shared/services/persona.service';
import { ToastrService } from 'ngx-toastr';
// import { ErrorService } from 'src/app/services/error.service';
// import { PersonService } from 'src/app/services/persona.service';

@Component({
  selector: 'user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
  
  nombre: String | undefined;

  constructor(
    private toastr: ToastrService, 
    private router: Router, 
    private _personService: PersonService, 
    private _errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.getName();
  }

  getName(){
    this._personService.getPerson().subscribe({
      next:(data) =>{
        this.nombre = data.nombre;
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msgError(e);
      }
    });

  }


  logOut(){
    localStorage.removeItem("x-token");
    this.toastr.success("¡Vuelva pronto!", "Exitoso");
    this.router.navigate(["healthtrain","login"]);
  }
}
