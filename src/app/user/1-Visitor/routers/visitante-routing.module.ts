import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/utils/auth.guard';
import { VisitHomeComponent } from '../pages/visit-home/visit-home.component';
import { UserDashboardComponent } from '@rutas/user/shared/components/user_dashboard/user-dashboard.component';
import { UserCourseComponent } from '@rutas/shared/components/user-course/user-course.component';
// import { VisitanteGuard } from '@rutas/utils/visit.guard';

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