import { Competencia, Course, Objetivo } from './../../interfaces/curso';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CourseService } from '@rutas/course/services/curso.service';
import { ModuleService } from '@rutas/course/services/modulo.service';
import { Location } from '@angular/common';
import { CompetenceService } from '@rutas/course/services/competencia.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'info-course',
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.css']
})
export class InfoCourseComponent {

  datos:any;
  modulos:any[] = [];
  esPresenta:boolean = true;
  EsTitulo:boolean = true;
  esDescripcion:boolean = true;

  competencias: Competencia[] = [];
  nuevasCompetencias: Competencia[] = [];

  objetivos: Objetivo[] = [];
  nuevosObjetivos: Objetivo[] = [];

  descripcion:string = "";
  nuevaDescripcion:string = "";

  titulo:string = "";
  nuevoTitulo:string = "";

  numero:any;

  compObject:boolean = true;
  comp:boolean = false;
  obj:boolean = false;

  textareaContent1: string = '';
  textareaContent2: string = '';
  textareaContent3: string = '';
  textareaContent4: string = '';
  textareaContent5: string = '';

  competencias1:any;
  competencias2:any;
  competencias3:any;
  competencias4:any;
  competencias5:any;
  
  objetivoContent1:any;
  objetivoContent2:any;
  objetivoContent3:any;
  objetivoContent4:any;
  objetivoContent5:any;

  imagen: string | ArrayBuffer | null = '../../../../assets/image/logo-perfil.png';
  imagenGlosario = "../../../../assets/image/concepto.png";
  imagenPregunta = "../../../../assets/image/question.png";
  imagenActual:string | ArrayBuffer | null;

  video:string = "";
  nuevoVideo:string = "";

  portada:boolean = true; 
  currentUrl:string = "";
  baseUrl:string = "";
  idCompetencia: number = 0;

  curso: Course = {
    id_curso: 0,
    nombre: "",
    descripcion: "",
    objetivos: [],
    video_presentacion: ""
  }

  newUrl:any;

  constructor(private router: Router, private _courseService: CourseService, private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer, private _moduleService: ModuleService, private location: Location, private _competenceService: CompetenceService) {}
  
  ngOnInit(){

    this.currentUrl = this.router.url;

    this.baseUrl = this.currentUrl.split('/info-course')[0];

    const currentPath = this.location.path();
    console.log("current: "+currentPath);
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 2];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero);

    this._courseService.getCourse(this.numero).subscribe({
      next: (data) =>{
        this.datos = data;

        this.video = data?.presentacion;
        this.titulo = data?.nombre;
        this.descripcion = data?.descripcion;
        this.objetivos = data?.objetivos;
        
        if (data.portada) {
          this.imagen = data.portada;
          this.imagenActual = this.imagen;
          this.portada = false;
        }

        this.curso.id_curso = this.numero;
        this.curso.nombre = this.titulo;
        this.curso.descripcion = this.descripcion;
        this.curso.objetivos = this.objetivos; 
        this.curso.video_presentacion = this.video;
        

        if (this.objetivos.length > 0) {
          this.objetivos.forEach((objetivo, index) => {
              if(index === 0) this.objetivoContent1 = objetivo.descripcion;
              if(index === 1) this.objetivoContent2 = objetivo.descripcion;
              if(index === 2) this.objetivoContent3 = objetivo.descripcion;
              if(index === 3) this.objetivoContent4 = objetivo.descripcion;
              if(index === 4) this.objetivoContent5 = objetivo.descripcion;
          });
        }
        // this.cdr.detectChanges();

        this._competenceService.getCompetence(this.numero).subscribe({
          next: (competencia) =>{

            this.competencias = competencia.competencia;

            this.idCompetencia = competencia?.id_competencia;

            if (this.competencias.length > 0) {
              this.competencias.forEach((competencia, index) => {
                  if(index === 0) this.textareaContent1 = competencia.nombre;
                  if(index === 1) this.textareaContent2 = competencia.nombre;
                  if(index === 2) this.textareaContent3 = competencia.nombre;
                  if(index === 3) this.textareaContent4 = competencia.nombre;
                  if(index === 4) this.textareaContent5 = competencia.nombre;
              });

          }

          },
          error: (e: HttpErrorResponse) => {
            console.error(e);
          }
        });        

        this._moduleService.getAllModules(this.numero).subscribe({
          next: (dataModule) =>{

            if (dataModule.length > 0) {
              this.modulos = dataModule.sort((a, b) => a.id_modulo - b.id_modulo);
            } else{
              this.modulos = [];
            }

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

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      reader.onload = () => {
        this.imagen = reader.result;
        this.curso.portada = this.imagen  as string;
      };

      reader.readAsDataURL(file);
      this.portada =false;

      console.log(this.curso);
      
      this.showConfirmation();

    }
  }

  quitarFoto() {
      this.imagen = this.imagenActual;
      this.portada = true;
  }

  editar(estado:boolean): boolean {
    return !estado;
  }

  presentar(estado:boolean) {
    
    this.esPresenta = this.editar(estado);

  }

  titular(estado:boolean) {
    
    this.EsTitulo = this.editar(estado);

  }

  _Descripcion(estado:boolean){
    this.esDescripcion = this.editar(estado);
  }

  autoExpand(event: any, variableId: string): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    const newHeight = textarea.scrollHeight;
    
    if (newHeight <= 72) {
      textarea.style.height = newHeight + 'px';
    }

    switch (variableId) {
        case 'textareaContent1':
            this.textareaContent1 = textarea.value;
            break;
        case 'textareaContent2':
            this.textareaContent2 = textarea.value;
            break;
        case 'textareaContent3':
            this.textareaContent3 = textarea.value;
            break;
        case 'textareaContent4':
            this.textareaContent4 = textarea.value;
            break;
        case 'textareaContent5':
            this.textareaContent5 = textarea.value;
            break;
        case 'objetivoContent1':
            this.objetivoContent1 = textarea.value;
            break;
        case 'objetivoContent2':
            this.objetivoContent2 = textarea.value;
            break;
        case 'objetivoContent3':
            this.objetivoContent3 = textarea.value;
            break;
        case 'objetivoContent4':
            this.objetivoContent4 = textarea.value;
            break;
        case 'objetivoContent5':
            this.objetivoContent5 = textarea.value;
            break;
        default:
            // Manejar un caso por defecto si es necesario
            break;
    }
  }

  actualiza(){

    if(this.comp){

      let competenciasTemporales = [
        { nombre: this.textareaContent1 },
        { nombre: this.textareaContent2 },
        { nombre: this.textareaContent3 },
        { nombre: this.textareaContent4 },
        { nombre: this.textareaContent5 }
      ].filter(competencia => competencia.nombre && competencia.nombre.trim() !== '');

      if (this.sonIgualesCompetencias(this.competencias, competenciasTemporales)) {
        this.nuevasCompetencias = [];

        console.log("NO hay cambios");

      } else {
        this.nuevasCompetencias = competenciasTemporales;
  
        console.log(this.nuevasCompetencias);

        this._competenceService.putCompetence(this.idCompetencia, { competencia: this.nuevasCompetencias } ).subscribe({
          next: () => {
            console.log("Has recibido cambios");
            window.location.reload();

            this.cerrar();
          }
        });       
      }

    }

    if(this.obj){

      let objetivosTemporales = [
        { descripcion: this.objetivoContent1 },
        { descripcion: this.objetivoContent2 },
        { descripcion: this.objetivoContent3 },
        { descripcion: this.objetivoContent4 },
        { descripcion: this.objetivoContent5 }
      ].filter(objetivo => objetivo.descripcion && objetivo.descripcion.trim() !== '');

      if(this.sonIgualesObjetivos(this.objetivos, objetivosTemporales)){

        this.nuevosObjetivos = [];

        console.log("NO hay cambios");

      } else {

        this.nuevosObjetivos = objetivosTemporales;
        console.log(this.nuevosObjetivos);

        this.curso.objetivos = this.nuevosObjetivos;
        this.objetivos = this.nuevosObjetivos;

        this.showConfirmation();

      }


    }

  }

  sonIgualesCompetencias(competencias1: Competencia[], competencias2: Competencia[]): boolean {
    if (competencias1.length !== competencias2.length) {
      return false;
    }
  
    let sonIguales = competencias1.every(comp1 => 
      competencias2.some(comp2 => comp2.nombre === comp1.nombre));
  
    if (sonIguales) {
      sonIguales = competencias2.every(comp2 => 
        competencias1.some(comp1 => comp1.nombre === comp2.nombre));
    }
  
    return sonIguales;
  }

  sonIgualesObjetivos(objetivos1: Objetivo[], objetivos2: Objetivo[]): boolean {
    if (objetivos1.length !== objetivos2.length) {
      return false;
    }
  
    let sonIguales = objetivos1.every(obj1 => 
      objetivos2.some(obj2 => obj2.descripcion === obj1.descripcion));
  
    if (sonIguales) {
      sonIguales = objetivos2.every(obj2 => 
        objetivos1.some(obj1 => obj1.descripcion === obj2.descripcion));
    }
  
    return sonIguales;
  }


  modalC(){
    this.compObject = false;
    this.comp = true;
  }

  modalO(){
    this.compObject = false;
    this.obj = true;
  }

  cerrar(){
    this.compObject = true;
    this.obj = false;
    this.comp = false;
  }

  actualizarTitulo() {

    let cambiosRealizados = false;

    if(this.titulo !== "" && this.nuevoTitulo !== ""){
      if(this.titulo !== this.nuevoTitulo){
        this.curso.nombre = this.nuevoTitulo;
        this.titulo = this.nuevoTitulo;
        this.EsTitulo = true;
        cambiosRealizados = true;
      } else {
        this.curso.nombre = this.titulo;
        this.EsTitulo = true;
      }
    }

    if(cambiosRealizados){
      this.showConfirmation();
    }else{
      console.log("No hay cambios")
    }

  }

  actualizarVideo() {
    
    let cambiosRealizados = false;

    if(this.video !== "" && this.nuevoVideo !== ""){
      if(this.video !== this.nuevoVideo){
        this.curso.video_presentacion = this.nuevoVideo;
        this.video = this.nuevoVideo;
        this.esPresenta = true;
        cambiosRealizados = true;
      } else {
        this.curso.video_presentacion = this.video;
        this.esPresenta = true;
      }
    }
    
    if(cambiosRealizados){
      this.showConfirmation();
    }else{
      console.log("No hay cambios")
    }

  }

  actualizarDescripcion() {    

    let cambiosRealizados = false;

    if(this.descripcion !== "" || this.nuevaDescripcion !== ""){
      if(this.descripcion !== this.nuevaDescripcion){
        this.curso.descripcion = this.nuevaDescripcion;
        this.descripcion = this.nuevaDescripcion;
        this.esDescripcion = true;    
        cambiosRealizados = true;
      } else {
        this.curso.descripcion = this.descripcion;
        this.esDescripcion = true;
      }
    }
    
    if(cambiosRealizados){
      this.showConfirmation();
    }else{
      console.log("No hay cambios")
    }

  }


  guardar(curso:Course){

    this._courseService.updateCourse(curso).subscribe({
      next: () =>{
        console.log("Has recibido cambios");
      }
    });

  }

  eliminarCurso(){

    this.baseUrl = this.currentUrl.split('/courses')[0];

    if(this.modulos.length > 0){
      console.log(this.modulos);
      this.modulos.forEach(modulo => {
        this._moduleService.deleteModule(modulo.id_modulo).subscribe({
          next: () => {
            console.log("Módulos eliminados");
          }
        });
      });

      this._courseService.deleteCourse(this.numero).subscribe({
       next: () => {
          console.log("Curso eliminado");
          this.newUrl = this.baseUrl+"/vist-home";
          this.router.navigateByUrl(this.newUrl);
        }
      });

    }else{
      this._courseService.deleteCourse(this.numero).subscribe({
        next: () => {
           console.log("Curso eliminado");
           this.newUrl = this.baseUrl+"/vist-home";
           this.router.navigateByUrl(this.newUrl);
         }
       });
    }

  }

  newModulo(){

    const newUrl = this.baseUrl+"/modules/new-module"

    this.router.navigateByUrl(newUrl);
  }

  Infomodulo(id:number){

    const newUrl = this.baseUrl+"/modules/"+id+"/infoDoc-modulo"

    this.router.navigateByUrl(newUrl);
  }

  regresar(){
    this.location.back();
  }

  showConfirmation(): void {
    Swal.fire({
      title: '¿Estás seguro hacer cambios?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Cambios exitosos!',
          'Curso actualizado.',
          'success'
        );
        console.log(this.curso);
        this.guardar(this.curso);

        this.cerrar();
      }
    });
  }

}
