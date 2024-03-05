import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@rutas/user/shared/services/auth.service';
import { ErrorService } from '@rutas/shared/services/error.service';
import { Role } from '@rutas/course/interfaces/rol';
import { inscripcion } from '@rutas/course/interfaces/inscrito';
import { CourseService } from '@rutas/course/services/curso.service';
import { Course } from '@rutas/course/interfaces/curso';

@Component({
  selector: 'app-course-body',
  templateUrl: './course-body.component.html',
  styleUrls: ['./course-body.component.css']
})
export class CourseBodyComponent {

  constructor(private router: Router, private _authService: AuthService, private _errorService: ErrorService, private toastr: ToastrService, private location: Location, private _courseService:CourseService, private sanitizer: DomSanitizer){}

  ingreso:any;
  rol:any;
  id:any;
  id_curso:any;
  numero:any;

  usuario:any;

  video: SafeResourceUrl; 
  modulos:any;

  infoCurso: Course = {
    nombre: "",
    descripcion: "",
    objetivos: [],
    video_presentacion: "",
    creador: {
      nombre: "" 
    }
}

isInscrito:boolean = false;

inscrito: inscripcion = {
  idCurso: 0,
  idPersona: 0
}

  ngOnInit(): void {
    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    const tokenRol:any = decoded.rol;
    this.id = decoded.id_persona;
    this.usuario = decoded.id_usuario;
    this.rol = tokenRol;

    console.log(this.usuario)

    const currentUrl = this.router.url;
    const cursoUrl = currentUrl.split('/course-content')[0];

    const currentPath = cursoUrl;
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    const inscrito: inscripcion = {
      idCurso: this.numero,
      idPersona: this.id
    }

    this._authService.inscrito(inscrito).subscribe({
      next: (activo) =>{

        this.isInscrito = activo;

        console.log("Estado: "+this.isInscrito)

        if(activo){
          this.ingreso = "Ingresar"
        }else{
          this.ingreso = "Inscribirse"
        }

      },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        }
    });

    this._courseService.getCourse(this.numero).subscribe({
      next: (curso) => {
        
        this.infoCurso = curso;

        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(curso.presentacion);

        this.modulos= curso.modulos.sort((a, b) => a.id_modulo - b.id_modulo);

      }
    });

  }

  retroceder(){

    this.location.back();

  }

  toRoman(num: number): string {
    const lookup: { [key: string]: number } = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let roman = '';
    for (let i of Object.keys(lookup)) {
        while (num >= lookup[i]) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
  }

  ingresar(){

    const currentUrl = this.router.url;
    const baseUrl = currentUrl.split('/visitor')[0];
    const cursoUrl = currentUrl.split('/course-content')[0];
    const aprendizUrl = currentUrl.split('/course')[0];

    const currentPath = cursoUrl;
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 1];

    this.numero = parseInt(ultimoSegmento, 10);

    const role: Role = {
      id: this.usuario,
      rol: "Aprendiz"
    }

    this.inscrito = {
      idCurso: this.numero,
      idPersona: this.id
    }


    if(this.rol === "Aprendiz"){
      if(this.isInscrito){
        this.router.navigateByUrl(cursoUrl+"/user-course");
      }else{
        this._authService.inscripcion(this.inscrito).subscribe({
          next: () => {
            this.toastr.success("Inscrito", "Exitoso");
            this.router.navigateByUrl(aprendizUrl+"/"+"user-home");
          }
        });
      }
    }

    if(this.rol === "Visitante"){
      this._authService.changeRol(role).subscribe({
        next: (res) => {

          const newToken = res?.newToken; // Accede al nuevo token

          if (newToken) {
            this._authService.inscripcion(this.inscrito).subscribe({
              next: () => {
                localStorage.setItem("x-token", newToken);
                this.toastr.success("Inscrito", "Exitoso");
                this.router.navigateByUrl(baseUrl+"/apprentice/"+"user-home");
              },
              error: (e: HttpErrorResponse) => {
                this._errorService.msgError(e);
              }
            });
          } else {
            this.toastr.error("Token no recibido en la respuesta", "Error");
          }
        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        }
      });

    }

  }

}
