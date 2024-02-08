import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { ErrorComponent } from '@rutas/shared/components/error/error.component';
// import { RegisterComponent } from '../pages/register/register.component';
// import { LoginGuard } from '@rutas/utils/login.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', // Asegura que coincida con la URL completa
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        // canActivate:[LoginGuard] 
    },
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate:[LoginGuard]
    },
    { 
        path: 'users',
       loadChildren: () => import('@users/routers/user-routing.module').then((m) => m.UsersRoutingModule) 
    },
    {
        path: "error",
        component: ErrorComponent
    },
   {
    path: '**',
    redirectTo: 'error'
   } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}