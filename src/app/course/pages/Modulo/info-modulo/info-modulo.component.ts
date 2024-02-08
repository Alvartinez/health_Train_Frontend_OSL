import { Module } from './../../../interfaces/modulo';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Competencia } from '@rutas/course/interfaces/curso';
import { ModuleService } from '@rutas/course/services/modulo.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-modulo',
  templateUrl: './info-modulo.component.html',
  styleUrls: ['./info-modulo.component.css']
})
export class InfoModuloDocComponent {

  imagen: string | ArrayBuffer | null = '../../../../assets/image/logo-perfil.png';

  portada:boolean = true;

  recurso:boolean = true;
  quiz:boolean = true;
  tiempo:boolean = true;
  fin:boolean = true;
  objetivo_aprendizaje:boolean = true;
  esPresenta:boolean = true;
  EsTitulo:boolean = true;
  esDescripcion:boolean = true;

  resources:any;
  quizzes:any;

  datos:any;
  modulos: Module;

  compObject:boolean = true;

  textareaContent1 = '';
  textareaContent2 = '';
  textareaContent3 = '';
  textareaContent4 = '';
  textareaContent5 = '';

  currentUrl:string = "";

  titulo: string = "";
  nuevoTitulo: string = "";

  descripcion: string = "";
  nuevaDescripcion: string = "";

  duracionModulo: number = 0;
  nuevaDuracion: number = 0;

  objetivo: string = "";
  nuevoObjetivo: string = "";

  conclusion: string = "";
  nuevaConclusion: string = "";

  competencias: Competencia[] = [];
  nuevasCompetencias: Competencia[] = [];

  modulo: Module ={
    id_modulo: 0,
    nombre: "",
    descripcion: "",
    objetivo: "",
    conclusion: "",
    competencias: [],
    duracion: 0,
    temas: []
}

  constructor(private router: Router,
              private _moduleService: ModuleService,
              private activatedRoute:ActivatedRoute, 
              private location: Location
    ) {}
  
  ngOnInit(){

    this.currentUrl = this.router.url;

    const {id}= this.activatedRoute.snapshot.params;

    this._moduleService.getModule(id).subscribe({
      next: (dataModule) =>{

        this.modulos = dataModule.cursoModuloInfo?.modulo;

        this.modulo.id_modulo = id;

        this.titulo = this.modulos.nombre as string;
        this.descripcion = this.modulos.descripcion as string;
        this.duracionModulo = this.modulos.duracion as number;
        this.objetivo = this.modulos.objetivo as string;
        this.conclusion = this.modulos.objetivo as string;
        this.competencias = this.modulos?.competencias;
        
        this.modulo.nombre = this.titulo;
        this.modulo.descripcion = this.descripcion;
        this.modulo.duracion = this.duracionModulo;
        this.modulo.objetivo = this.objetivo;
        this.modulo.competencias = this.competencias;

        console.log(this.modulo);


        if (this.competencias.length > 0) {
          this.competencias.forEach((competencia, index) => {
              if(index === 0) this.textareaContent1 = competencia.nombre;
              if(index === 1) this.textareaContent2 = competencia.nombre;
              if(index === 2) this.textareaContent3 = competencia.nombre;
              if(index === 3) this.textareaContent4 = competencia.nombre;
              if(index === 4) this.textareaContent5 = competencia.nombre;
          });

      }

        this.quizzes = Array.isArray(dataModule.quizFormativo) ? dataModule.quizFormativo : [dataModule.quizFormativo];

      },
      error: (e: HttpErrorResponse) => {
        console.error(e);
      } 
    });

  }

  regresar(){
    this.location.back();
  }

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      reader.onload = () => {
        this.imagen = reader.result;
        this.modulo.portada = this.imagen as string;
      };

      reader.readAsDataURL(file);
      this.portada =false;

    }
  }

  quitarFoto() {
    this.imagen = '../../../../assets/image/logo-perfil.png';
    this.portada = true;
  }


  editar(estado:boolean): boolean {
    return !estado;
  }

  titular(estado:boolean) {
    
    this.EsTitulo = this.editar(estado);

  }

  _Descripcion(estado:boolean){
    this.esDescripcion = this.editar(estado);
  }

  duracion(estado:boolean){
    this.tiempo = this.editar(estado);
  }

  aprendizaje(estado:boolean){
    this.objetivo_aprendizaje = this.editar(estado);
  }

  end(estado:any){
    this.fin = this.editar(estado);
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
        default:
            // Manejar un caso por defecto si es necesario
            break;
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

  modalC(){
    this.compObject = false;
  }

  cerrar(){
    this.compObject = true;
  }

  actualiza(){

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

      this.modulo.competencias = this.nuevasCompetencias;

      this.showConfirmation();
      
    }
  }

  actualizarTitulo(){

    let cambiosRealizados = false;

    if(this.titulo !== "" && this.nuevoTitulo !==  ""){
      if(this.titulo !== this.nuevoTitulo){
        this.modulo.nombre = this.nuevoTitulo;
        this.titulo = this.nuevoTitulo;
        cambiosRealizados = true;
        this.EsTitulo = true;
      }else{
        this.modulo.nombre = this.titulo;
        this.EsTitulo = true;
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

    if(this.descripcion !== "" && this.nuevaDescripcion !== ""){
      if(this.descripcion !== this.nuevaDescripcion){
        this.modulo.descripcion = this.nuevaDescripcion;
        this.descripcion = this.nuevaDescripcion;
        cambiosRealizados = true;
        this.esDescripcion = true;
      }else{
        this.modulo.descripcion = this.descripcion;
        this.esDescripcion = true;
      }
    }

    if(cambiosRealizados){
      this.showConfirmation();
    }else{
      console.log("No hay cambios")
    }

  }

  actualizarDuracion(){
    
    let cambiosRealizados = false;

    if(this.nuevaDuracion > 0){
      if(this.duracionModulo !== this.nuevaDuracion){
        this.modulo.duracion = this.nuevaDuracion;
        this.duracionModulo = this.nuevaDuracion;
        cambiosRealizados = true;
        this.tiempo = true;
      }else{
        this.modulo.duracion = this.duracionModulo;
        this.tiempo = true;
      }
    }

    if(cambiosRealizados){
      this.showConfirmation();
    }else{
      console.log("No hay cambios")
    }

  }

  actualizarObjetivo() {
    
    let cambiosRealizados = false;

    if(this.objetivo !== "" || this.nuevoObjetivo !==  ""){
      if(this.objetivo !== this.nuevoObjetivo){
        this.modulo.objetivo = this.nuevoObjetivo;
        this.objetivo = this.nuevoObjetivo;
        cambiosRealizados = true;
        this.objetivo_aprendizaje = true;
      }else{
        this.modulo.objetivo = this.objetivo;
        this.objetivo_aprendizaje = true;
      }
    }

  }

  actualizarConclusion(){

    let cambiosRealizados = false;

    if(this.conclusion !== "" || this.nuevaConclusion !== ""){
      if(this.conclusion !== this.nuevaConclusion){
        this.modulo.conclusion = this.nuevaConclusion;
        this.conclusion = this.nuevaConclusion;
        cambiosRealizados = true;
        this.fin = true;
      }else{
        this.modulo.conclusion = this.conclusion;
        this.fin = true;
      }
    }

    if(cambiosRealizados){
      this.showConfirmation();
    }else{
      console.log("No hay cambios")
    }

  }

  guardar(modulo:Module){

    this._moduleService.updateModule(modulo).subscribe({
      next: () =>{
        console.log("Has recibido cambios");
      }
    });

  }

  newResource(){

    const baseUrl = this.currentUrl.split('/infoDoc-modulo')[0];

    const newUrl = baseUrl+"/resources/new-resource";

    this.router.navigateByUrl(newUrl);
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
          'Módulo actualizado.',
          'success'
        );
        this.guardar(this.modulo);
        this.cerrar();
      }
    });
  }


}
