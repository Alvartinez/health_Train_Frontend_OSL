import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from '../pages/admin-home/admin-home.component';
import { AuthGuard } from '@rutas/user/shared/utils/auth.guard';

const routes: Routes = [
    {
      path: 'admin-home',
      component: AdminHomeComponent,
      canActivate: [AuthGuard],
      data: { rol: 'Admin' }
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}