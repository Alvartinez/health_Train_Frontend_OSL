import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService, private _authService: AuthService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem("x-token");

    if (token) {
      this.toastr.error("Acceso Denegado", "Error");
        this.router.navigate(["healthtrain","login"]);
        return false;

    }
    return true;
  }
  
}