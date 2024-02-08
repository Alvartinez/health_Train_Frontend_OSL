import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService, private _authService: AuthService) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem("x-token");
    const requiredRole = route.data['rol']; // Obtener el rol requerido de la ruta

    if (token && requiredRole) {
        // Verificar el rol del usuario en el token
        const userRole = this._authService.obtenerRolDelToken(token);

        // Permitir el acceso si el usuario tiene el rol requerido
        if (userRole && (userRole === requiredRole || requiredRole.includes(userRole))) {
            return true;
        }
    }

    // Si no se cumple ninguna condición, denegar el acceso y redirigir según sea necesario
    this.toastr.error("Acceso Denegado", "Error");
    this.router.navigate(["healthtrain","login"]);
    return false;

  }
  
}
