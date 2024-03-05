import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Competencia, Course, Objetivo } from '@rutas/course/interfaces/curso';
import { CompetenceService } from '@rutas/course/services/competencia.service';
import { CourseService } from '@rutas/course/services/curso.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {

  currentUrl:string = "";
  baseUrl:string = "";

  nombre:any;
  descripcion:any;
  objetivosCurso: Objetivo[] = [];
  competencias: Competencia[] = [];

  objetivo1:any;
  objetivo2:any;
  objetivo3:any;
  objetivo4:any;
  objetivo5:any;

  portadaa = '';


  imagen: string | ArrayBuffer | null = '../../../../assets/image/logo-perfil.png';

  archivo: File | null = null;
  pdfSrc: SafeResourceUrl | null = null;

  video:any;

  portada:boolean = true;

  nucomp1:boolean = false;
  nucomp2:boolean = false;
  nucomp3:boolean = false;
  nucomp4:boolean = false;

  comp1:any;
  comp2:any;
  comp3:any;
  comp4:any;
  comp5:any;

  add1:boolean = true;
  add2:boolean = true;
  add3:boolean = true;
  add4:boolean = true;

  nuobje1:boolean = false;
  nuobje2:boolean = false;
  nuobje3:boolean = false;
  nuobje4:boolean = false;

  add5:boolean = true;
  add6:boolean = true;
  add7:boolean = true;
  add8:boolean = true;

  idPersona:number = 0;

  curso: Course = {
    nombre: '',
    descripcion: '',
    id_persona: 0,
    objetivos: [],
    video_presentacion: '',
    portada: '',
    publicado: false
  };
  id: number;

  constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef, private router: Router, private _courseService: CourseService, private _competenceService:CompetenceService) {}


  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imagen = reader.result as string;
        this.curso.portada = reader.result as string;
      };

      this.portada =false;

    }
  }

    ngOnInit(){
      this.currentUrl = this.router.url;

      this.baseUrl = this.currentUrl.split('/new-course')[0];
      console.log(this.baseUrl);

      const token:any = localStorage.getItem("x-token");
      const decoded:any = jwt_decode(token);
      this.id = decoded.id;

      console.log(this.id)

    }

  quitarFoto() {
    this.imagen = '../../../../assets/image/logo-perfil.png';
    this.portada = true;
  }

  nuevaCompetencia1(){
    this.add1 = false;
    this.nucomp1 = true;
  }

  nuevaCompetencia2(){
    this.add2 = false;
    this.nucomp2 = true;
  }

  nuevaCompetencia3(){
    this.add3 = false;
    this.nucomp3 = true;
  }

  nuevaCompetencia4(){
    this.add4 = false;
    this.nucomp4 = true;
  }

  eliminaCompetencia1(){
    this.add1 = true;
    this.nucomp1 = false;
    this.comp2 = undefined;
  }

  eliminaCompetencia2(){
    this.add2 = true;
    this.nucomp2 = false;
    this.comp3 = undefined;
  }

  eliminaCompetencia3(){
    this.add3 = true;
    this.nucomp3 = false;
    this.comp4 = undefined;
  }

  eliminaCompetencia4(){
    this.add4 = true;
    this.nucomp4 = false;
    this.comp5 = undefined;
  }

  nuevObjetivo1(){
    this.add5 = false;
    this.nuobje1 = true;
  }

  nuevObjetivo2(){
    this.add6 = false;
    this.nuobje2 = true;
  }

  nuevObjetivo3(){
    this.add7 = false;
    this.nuobje3 = true;
  }

  nuevObjetivo4(){
    this.add8 = false;
    this.nuobje4 = true;
  }

  eliminaObjetivo1(){
    this.add5 = true;
    this.nuobje1 = false;
  }

  eliminaObjetivo2(){
    this.add6 = true;
    this.nuobje2 = false;
  }

  eliminaObjetivo3(){
    this.add7 = true;
    this.nuobje3 = false;
  }

  eliminaObjetivo4(){
    this.add8 = true;
    this.nuobje4 = false;
  }

  agregarObjetivo = (valor: any) => {
    if (valor !== null && valor !== undefined) {
      this.objetivosCurso.push({ descripcion: valor }); // Añadir un nuevo objeto al array
    }
  }

  agregarCompetencia = (valor: any) => {
    if (valor !== null && valor !== undefined) {
      this.competencias.push({ nombre: valor }); // Añadir un nuevo objeto al array
    }
  }

  generarCurso(){
    
    this.agregarObjetivo(this.objetivo1);
    this.agregarObjetivo(this.objetivo2);
    this.agregarObjetivo(this.objetivo3);
    this.agregarObjetivo(this.objetivo4);
    this.agregarObjetivo(this.objetivo5);

    this.agregarCompetencia(this.comp1);
    this.agregarCompetencia(this.comp2);
    this.agregarCompetencia(this.comp3);
    this.agregarCompetencia(this.comp4);
    this.agregarCompetencia(this.comp5);

    this.curso.nombre = this.nombre;
    this.curso.descripcion = this.descripcion;
    this.curso.id_persona = this.id;
    this.curso.objetivos = this.objetivosCurso;
    this.curso.video_presentacion = this.video;
    
    this._courseService.postCourse(this.curso).subscribe({
      next: (data) =>{
        console.log(data);
        console.log("Registro exitoso");
        console.log(data);

        this._competenceService.postCompetence(data.cursoNuevo.id_curso, this.competencias).subscribe({
          next:() => {
            this.router.navigateByUrl(this.baseUrl+"/"+data.cursoNuevo.id_curso+"/info-course");
          },
          error: (e: HttpErrorResponse) => {
            console.error(e);
          }    
        });

      },
      error: (e: HttpErrorResponse) => {
        console.error(e);
      } 
    });

  }
}

