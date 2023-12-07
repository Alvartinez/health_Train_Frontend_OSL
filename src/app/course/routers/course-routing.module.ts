import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCourseComponent } from '@rutas/shared/components/user-course/user-course.component';
// import { CourseComponent } from '../pages/course/course.component';
// import { AuthGuard } from '../../utils/auth.guard';
// import { CourseResolver } from '../utils/course.resolver';
// import { TerminosComponent } from '@rutas/shared/terminos/terminos.component';
// import { CourseContentComponent } from '@rutas/components/course-content/course-content.component';
// import { ExamComponent } from '../pages/exam/exam.component';
// import { FeedbackExamComponent } from '../pages/feedback-exam/feedback-exam.component';
// import { ErrorComponent } from '@rutas/home/pages/error/error.component';
import { UserDashboardComponent } from '@rutas/user/shared/user_dashboard/user-dashboard.component';

const routes: Routes = [
    // {
    //     path: "course/:id",
    //     component: CourseComponent,
    //     canActivate:[AuthGuard],
    //     resolve: { courseData: CourseResolver },
    //     data: { rol: 'Aprendiz' }
    // },
    // {
    //   path: "course/:id/modules",
    //   loadChildren: () => import('@rutas/course/module/routers/module-routing.module').then((m) => m.ModuleRoutingModule)
    // },
    // {
    //   path: "course/:id/terminos-y-condiciones",
    //   component: TerminosComponent,
    //   canActivate: [AuthGuard],
    //   data: { rol: 'Aprendiz' }
    // },
    // {
    //   path: "course/:id/course-content",
    //   component: CourseContentComponent,
    //   canActivate: [AuthGuard],
    //   data: { rol: ['Aprendiz', 'Visitante'] }
    // },
    // {
    //   path: "course/:id/exam",
    //   component: ExamComponent,
    //   canActivate: [AuthGuard],
    //   data: { rol: ['Aprendiz'] }
    // },
    // {
    //   path: "course/:id/exam/feedbacks-exam",
    //   component: FeedbackExamComponent,
    //   canActivate: [AuthGuard],
    //   data: { rol: ['Aprendiz'] }
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
export class CourseRoutingModule {}