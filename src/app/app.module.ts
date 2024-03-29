import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
import { UserNavbarComponent } from './shared/components/user-navbar/user-navbar.component';
import { UserDashboardComponent } from './user/shared/components/user_dashboard/user-dashboard.component';
import { ResetPasswordComponent } from './shared/components/reset-password/reset-password.component';
import { ForoComponent } from './shared/components/foro/foro.component';
import { UserCourseComponent } from './shared/components/user-course/user-course.component';
import { InfoModuloComponent } from './shared/components/info-modulo/info-modulo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuloInicioComponent } from './course/pages/Modulo/modulo-inicio/modulo-inicio.component';
import { ModuloCartasComponent } from './course/pages/Modulo/modulo-cartas/modulo-cartas.component';
import { ModuleNavbarComponent } from './course/components/module-navbar/module-navbar.component';
import { ModuleBaseComponent } from './course/components/module-base/module-base.component';
import { NewCourseComponent } from './course/pages/Curso/new-course/new-course.component';
import { CreateCourseComponent } from './course/components/create-course/create-course.component';
import { InfoCourseComponent } from './course/components/info-course/info-course.component';
import { CourseService } from './course/services/curso.service';
import {InfoModuloDocComponent} from './course/pages/Modulo/info-modulo/info-modulo.component';
import { NuevoModuloComponent } from './course/pages/Modulo/nuevo-modulo/nuevo-modulo.component';
import { ModuleService } from './course/services/modulo.service';
import { CompetenceService } from './course/services/competencia.service';
import { NewExamComponent } from './course/pages/Examen/new-exam/new-exam.component';
import { QuestionBankComponent } from './course/pages/Curso/question-bank/question-bank.component';
import { QuestionService } from './course/services/question.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SabiaQueComponent } from './course/pages/Recurso/recursosModulo/sabia-que/sabia-que.component';
import { TextoPlanoComponent } from './course/pages/Recurso/recursosModulo/texto-plano/texto-plano.component';
import { LineaTiempoComponent } from './course/pages/Recurso/recursosModulo/linea-tiempo/linea-tiempo.component';
import { VideoComponent } from './course/pages/Recurso/recursosModulo/recursoVideo/video.component';
import { PodcastComponent } from './course/pages/Recurso/recursosModulo/podcast/podcast.component';
import { HitoComponent } from './course/components/hito/hito.component';
import { RecursosComponent } from './course/pages/Recurso/recursos/recursos.component';
import { ResourcePlainTextComponent } from './course/components/resource-plain-text/resource-plain-text.component';
import { ResourcePodcastComponent } from './course/components/resource-podcast/resource-podcast.component';
import { ResourceTimeLineComponent } from './course/components/resource-time-line/resource-time-line.component';
import { ResourceVideoComponent } from './course/components/resource-video/resource-video.component';
import { RecursoComponent } from './course/components/recurso/recurso.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { AppHomeComponent } from './user/2-Apprentice/pages/app-home/app-home.component';
import { DocHomeComponent } from './user/3-Teacher/pages/doc-home/doc-home.component';
import { WelcomeModuleComponent } from './course/shared/welcome-module/welcome-module.component';
import { TerminosComponent } from './course/shared/terminos/terminos.component';
import { ParticlesComponent } from './shared/components/particles/particles.component';
import { AddTokenInterceptor } from './user/shared/utils/add-token.interceptor';
import { RefreshTokenInterceptor } from './user/shared/utils/refresh-token.interceptor';
import { LocalStorageService } from './shared/services/local-storage.service';
import { CourseBodyComponent } from './course/shared/course-body/course-body.component';
import { CourseContentComponent } from './course/pages/Modulo/course-content/course-content.component'; 
import { AdminHomeComponent } from './user/4-Admin/pages/admin-home/admin-home.component';
import { AdminContentComponent } from './user/4-Admin/components/admin-content/admin-content.component';
import { FooterTeacherComponent } from './course/components/footer-teacher/footer-teacher.component';
import { ResourceService } from './course/services/recurso.service';
import { RecursosEditoresComponent } from './course/pages/Recurso/recursos-editores/recursos-editores.component';
import { InfoRecursoComponent } from './course/components/info-recurso/info-recurso.component';
import { ContentDropdownsComponent } from './course/components/content-dropdowns/content-dropdowns.component';
import { ContentModuleComponent } from './course/pages/Modulo/content-module/content-module.component';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

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
    InfoModuloComponent,
    ModuloInicioComponent,
    ModuloCartasComponent,
    ModuleNavbarComponent,
    ModuleBaseComponent,
    NewCourseComponent,
    CreateCourseComponent,
    InfoCourseComponent,
    InfoModuloDocComponent,
    NuevoModuloComponent,
    NewExamComponent,
    QuestionBankComponent,
    DomseguroPipe,
    SabiaQueComponent,
    TextoPlanoComponent,
    LineaTiempoComponent,
    VideoComponent,
    PodcastComponent,
    HitoComponent,
    RecursosComponent,
    ResourcePlainTextComponent,
    ResourcePodcastComponent,
    ResourceTimeLineComponent,
    ResourceVideoComponent,
    RecursoComponent,
    ErrorComponent,
    AppHomeComponent,
    DocHomeComponent,
    WelcomeModuleComponent,
    TerminosComponent,
    ParticlesComponent,
    CourseBodyComponent,
    CourseContentComponent,
    AdminHomeComponent,
    AdminContentComponent,
    FooterTeacherComponent,
    RecursosEditoresComponent,
    InfoRecursoComponent,
    ContentDropdownsComponent,
    ContentModuleComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AngularEditorModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [     {provide: HTTP_INTERCEPTORS, useClass:AddTokenInterceptor, multi: true},
    LocalStorageService, CourseService, CompetenceService, ResourceService, Location,
    { provide: HTTP_INTERCEPTORS, useClass:RefreshTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
