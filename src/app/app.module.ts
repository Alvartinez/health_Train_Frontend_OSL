import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/pages/home/home.component';
import { LoginComponent } from './home/pages/login/login.component';
import { RegisterComponent } from './home/pages/register/register.component';
import { SectionHomeComponent } from './home/components/section-home/section-home.component';
import { SectionCardsComponent } from './home/components/section-cards/section-cards.component';
import { SectionNewsComponent } from './home/components/section-news/section-news.component';
import { SectionWhoComponent } from './home/components/section-who/section-who.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { VisitHomeComponent } from './user/1-Visitor/pages/visit-home/visit-home.component';
import { UserNavbarComponent } from './user/shared/user-navbar/user-navbar.component';
import { UserDashboardComponent } from './user/shared/user_dashboard/user-dashboard.component';
import { ResetPasswordComponent } from './shared/components/reset-password/reset-password.component';
import { ForoComponent } from './shared/components/foro/foro.component';
import { UserCourseComponent } from './shared/components/user-course/user-course.component';
import { InfoModuloComponent } from './shared/components/info-modulo/info-modulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SectionHomeComponent,
    SectionCardsComponent,
    SectionNewsComponent,
    SectionWhoComponent,
    FooterComponent,
    LoadingComponent,
    VisitHomeComponent,
    UserNavbarComponent,
    UserDashboardComponent,
    ResetPasswordComponent,
    ForoComponent,
    UserCourseComponent,
    InfoModuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
