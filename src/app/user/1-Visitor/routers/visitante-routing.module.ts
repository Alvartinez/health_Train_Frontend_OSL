import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/utils/auth.guard';
import { VisitHomeComponent } from '../pages/visit-home/visit-home.component';
import { UserDashboardComponent } from '@rutas/user/shared/user_dashboard/user-dashboard.component';
import { UserCourseComponent } from '@rutas/shared/components/user-course/user-course.component';
// import { VisitanteGuard } from '@rutas/utils/visit.guard';

const routes: Routes = [
    {
        path: 'vist-home',
        component: VisitHomeComponent,
        // canActivate: [AuthGuard, VisitanteGuard],
        // data: { rol: 'Visitante' }
    },
    // {
    //   path:"courses",
    //   loadChildren: () => import('@visitor/routers').then((m) => m.CourseRoutingModule) 
    // },
    {
      path:"user-course",
      component: UserCourseComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitRoutingModule {}