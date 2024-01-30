import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExamComponent } from '../pages/Examen/new-exam/new-exam.component';

const routes: Routes = [

    {
        path:"new-exam",
        component: NewExamComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule {}