import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Estos son los componentes que debo editar y después borrar

const routes: Routes = [

  {
    path: '',
    redirectTo: 'healthtrain',
    pathMatch: 'full'
  },
    {
    path: 'healthtrain',
    loadChildren: () => import('./home/routers/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'healthtrain/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
