import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'apprentice', loadChildren: () => import('@apprentice/routers/aprendiz-routing.module').then((m) => m.AprendizRoutingModule) },
    // { path: 'admin', loadChildren: () => import('../admin/routers/admin-routing.module').then((m) => m.AdminRoutingModule) },
    { path: 'teacher', loadChildren: () => import('@teacher/routers/docente-routing.module').then((m) => m.DocenteRoutingModule) },
    { path: 'visitor', loadChildren: () => import('@visitor/routers/visitante-routing.module').then((m) => m.VisitRoutingModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}