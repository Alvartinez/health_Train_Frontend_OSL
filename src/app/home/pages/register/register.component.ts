import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from '@rutas/shared/services/error.service';
import { PersonService } from '@rutas/shared/services/persona.service';
import { Person } from '@rutas/user/shared/interfaces/persona';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  username: string = "";
  email: string = "";
  password: string = "";
  passwordVerified: string = "";
  loading: boolean = false;

  constructor(private toastr: ToastrService, private _personService:PersonService, private router:Router, private _errorService: ErrorService){}

  registro() {
    //Validación de datos
    if (this.username == "" || this.email == "" || this.password == "" || this.passwordVerified == "") {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }
    
    // Verificación del patrón del correo electrónico
/*     const domainPattern = /@\w+(\.\w{2,3})+$/i; 
    if (!domainPattern.test(this.email)) {
      this.toastr.error("El correo electrónico debe tener un formato válido", "Error");
      return;
    } */
        
    //Verificación del Password
    if (this.password != this.passwordVerified) {
      this.toastr.error("Correo electrónico o contraseña inválida", "Error");
      return;
    }
        
    //Se crea el body
    const user: Person = {
     nombre: this.username,
     email: this.email,
     password: this.password,
     estado: true
    }

    this.loading = true;

    this._personService.signIn(user).subscribe({
      next: () => {
        this.loading = false;
        this.toastr.success("El usuario fue registrado exitosamente, revisa su correo electrónico", "Usuario Registrado");
        this.router.navigate(["healthtrain","login"]);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.vaciarCampos();
        this._errorService.msgError(e);
      },
      complete: () => console.info("complete")
    });

  }

  //Campos vacios
  vaciarCampos() {
    this.username = "";
    this.email = "";
    this.password = "";
    this.passwordVerified = "";
  }

  login(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/register')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl+"/login");
  }

}
