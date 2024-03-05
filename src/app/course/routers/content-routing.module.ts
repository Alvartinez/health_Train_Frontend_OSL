import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentModuleComponent } from '../pages/Modulo/content-module/content-module.component';

const routes: Routes = [
    {
      path:"contenido",
      component: ContentModuleComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentModuleRoutingModule {}