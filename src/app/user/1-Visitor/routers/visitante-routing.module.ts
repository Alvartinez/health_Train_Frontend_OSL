import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitHomeComponent } from '../pages/visit-home/visit-home.component';
import { AuthGuard } from '@rutas/user/shared/utils/auth.guard';
import { VisitanteGuard } from '@rutas/user/shared/utils/visit.guard';

const routes: Routes = [
    {
        path: 'vist-home',
        component: VisitHomeComponent,
        // canActivate: [AuthGuard, VisitanteGuard],
        // data: { rol: 'Visitante' }
    },
    //Modificar después
    {
      path:"courses",
      loadChildren: () => import('@course/course-routing.module').then((m) => m.CourseRoutingModule) 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitRoutingModule {}