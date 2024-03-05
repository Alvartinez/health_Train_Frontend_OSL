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
import { UserDashboardComponent } from '@rutas/user/shared/components/user_dashboard/user-dashboard.component';
import { NewCourseComponent } from '../pages/Curso/new-course/new-course.component';
import { InfoCourseComponent } from '../components/info-course/info-course.component';
import { QuestionBankComponent } from '../pages/Curso/question-bank/question-bank.component';
import { AuthGuard } from '@rutas/user/shared/utils/auth.guard';
import { CourseContentComponent } from '../pages/Modulo/course-content/course-content.component';

const routes: Routes = [
    // {
    //     path: "course/:id",
    //     component: CourseComponent,
    //     canActivate:[AuthGuard],
    //     resolve: { courseData: CourseResolver },
    //     data: { rol: 'Aprendiz' }
    // },
    {
      path: ":id/modules",
      loadChildren: () => import('@rutas/course/routers/module-routing.module').then((m) => m.ModuleRoutingModule)
    },
    // {
    //   path: "course/:id/terminos-y-condiciones",
    //   component: TerminosComponent,
    //   canActivate: [AuthGuard],
    //   data: { rol: 'Aprendiz' }
    // },
    {
      path: ":id/course-content",
      component: CourseContentComponent,
      canActivate: [AuthGuard],
      data: { rol: ['Aprendiz', 'Visitante'] }
    },
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
      path:":id/user-course",
      component: UserCourseComponent
    },
    {
      path:"new-course",
      component: NewCourseComponent,
        canActivate: [AuthGuard],
        data: { rol: ['Docente'] }
    },
    {
      path: ":id/info-course",
      component: InfoCourseComponent
    },
    {
      path: ":id/exam",
      loadChildren: () => import('@rutas/course/routers/exam-routing.module').then((m) => m.ExamRoutingModule)
    },
    {
      path:"question-bank",
      component:QuestionBankComponent
    },
    {
      path:":id/question-bank",
      component:QuestionBankComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}