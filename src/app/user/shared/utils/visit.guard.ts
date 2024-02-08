import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VisitanteGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    const token:any = localStorage.getItem("x-token");
    const userRole = this._authService.obtenerRolDelToken(token);

    if (userRole === "Visitante") {
      return true;
    }

    if(userRole === "Aprendiz"){
        this.router.navigate(["healthtrain/users/apprentice","user-home"]);
        return false;
    }

    if(userRole === "Docente"){
        this.router.navigate(["healthtrain/users/apprentice","doc-home"]);
        return false;
    }

    if(userRole === "Admin"){
        this.router.navigate(["healthtrain/users/apprentice","admin-home"]);
        return false;
    }

    return false;

  }
}
