import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocHomeComponent } from '../pages/doc-home/doc-home.component';
import { AuthGuard } from '@rutas/user/shared/utils/auth.guard';


const routes: Routes = [
    {
      path: 'doc-home',
      component: DocHomeComponent,
      canActivate: [AuthGuard],
      data: { rol: 'Docente' }
    },
    {
      path:"courses",
      loadChildren: () => import('@rutas/course/routers/course-routing.module').then((m) => m.CourseRoutingModule) 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteRoutingModule {}