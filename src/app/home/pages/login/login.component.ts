import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from '@rutas/shared/services/error.service';
import { PersonService } from '@rutas/shared/services/persona.service';
import { Person } from '@rutas/user/shared/interfaces/persona';
import { AuthService } from '@rutas/user/shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private toastr: ToastrService,private _authService: AuthService, private _personService:PersonService, private router:Router, private _errorService: ErrorService, private route: ActivatedRoute){}

  username: string = "";
  password: string = "";
  loading: boolean = false;
  reset: boolean = false;

  login(){

     //Validación de datos
    if (this.username == "" || this.password == "") {
      this.toastr.error("Todos los campos son obligatorios", "Error");
      return;
    }

    const user: Person = {
      username: this.username,
      password: this.password
    }

    this.loading = true;

    const currentUrl = this.router.url;
    const newUrl = currentUrl.split('/login')[0];

    this._authService.login(user).subscribe({
      next: (res:any) => {
        localStorage.setItem("x-token", res["token"]);
        const decodedToken: any = jwt_decode(res["token"]);

        let rol: string;

        if (decodedToken.rol && decodedToken.rol.length > 0) {
          rol = decodedToken.rol;
        } else {
          console.log("No se encontró información del rol en el token.");
          this.loading = false;
          localStorage.removeItem("x-token");
          return;
        }

        this._personService.getPerson().subscribe({
          next: (data)=>{
            this.loading = false;

            if(rol === "Aprendiz"){
              this.router.navigate([newUrl,"users", "apprentice", res["redirectTo"]], { relativeTo: this.route });
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }else if(rol === "Docente"){
              this.router.navigate([newUrl, "users", "teacher", res["redirectTo"]], { relativeTo: this.route });
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }else if(rol === "Admin"){
              this.router.navigate([newUrl,"users", "admin", res["redirectTo"]], { relativeTo: this.route });
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }else if(rol === "Visitante"){
              this.router.navigate([newUrl,"users", "visitor", res["redirectTo"]], { relativeTo: this.route });
              this.toastr.success("Bienvenid@ "+data.nombre, " Éxitoso");

            }
            
          },
          error: (e: HttpErrorResponse) => {
            this.loading = false;
            this.vaciarCampos();
            localStorage.removeItem("x-token");
            this._errorService.msgError(e);
          }          
        });
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this.vaciarCampos();
        this._errorService.msgError(e);
      }
    });
  }

  vaciarCampos() {
    this.username = "";
    this.password = "";
  }

  register(){
    this.router.navigate(["healthtrain","register"]);
  }

  handleEventoBooleano(evento: boolean) {
    this.reset = false;
  }

  reset_Password(){
    this.reset =true;

  }

}
