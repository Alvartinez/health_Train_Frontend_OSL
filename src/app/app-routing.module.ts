import { HomeRoutingModule } from './home/routers/home-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // Asegura que coincida con la URL completa
  },
    {
    path: 'Services/healthtrain',
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
