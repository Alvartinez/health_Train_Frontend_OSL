import { Module } from './../../../interfaces/modulo';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '@rutas/course/services/curso.service';
import { ModuleService } from '@rutas/course/services/modulo.service';

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
  tiempo:boolean = false;
  fin:boolean = false;
  objetivo_aprendizaje:boolean = false;

  resources:any;
  quizzes:any;

  tituloTema2:boolean = false;
  tituloTema3:boolean = false;
  tituloTema4:boolean = false;
  tituloTema5:boolean = false;

  tema1:boolean = false;
  tema2:boolean = false;
  tema3:boolean = false;
  tema4:boolean = false;
  tema5:boolean = false;

  subTema1:boolean = false;
  subTema2:boolean = false;
  subTema3:boolean = false;
  subTema4:boolean = false;
  subTema5:boolean = false;

  subTema11:boolean = false;
  subTema12:boolean = false;
  subTema13:boolean = false;
  subTema14:boolean = false;
  subTema15:boolean = false;

  subTema21:boolean = false;
  subTema22:boolean = false;
  subTema23:boolean = false;
  subTema24:boolean = false;
  subTema25:boolean = false;

  subTema31:boolean = false;
  subTema32:boolean = false;
  subTema33:boolean = false;
  subTema34:boolean = false;
  subTema35:boolean = false;

  subTema41:boolean = false;
  subTema42:boolean = false;
  subTema43:boolean = false;
  subTema44:boolean = false;
  subTema45:boolean = false;

  subTema51:boolean = false;
  subTema52:boolean = false;
  subTema53:boolean = false;
  subTema54:boolean = false;
  subTema55:boolean = false;

  iconSubTema1:string = "add";
  iconSubTema2:string = "add";
  iconSubTema3:string = "add";
  iconSubTema4:string = "add";
  iconSubTema5:string = "add";

  iconTema1:string = "add";
  iconTema2:string = "add";
  iconTema3:string = "add";
  iconTema4:string = "add";
  iconTema5:string = "add";

  nuevo1:boolean = true;
  nuevo2:boolean = true;
  nuevo3:boolean = true;

  nucomp1:boolean = false;
  nucomp2:boolean = false;
  nucomp3:boolean = false;
  nucomp4:boolean = false;

  comp1:string= "";
  comp2:string= "";
  comp3:string= "";
  comp4:string= "";
  comp5:string= "";

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

  onFileChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      reader.onload = () => {
        this.imagen = reader.result;
      };

      reader.readAsDataURL(file);
      this.portada =false;
    }
  }

  quitarFoto() {
    this.imagen = '../../../../assets/image/logo-perfil.png';
    this.portada = true;
  }

  temas1(){
    if(this.iconTema1 === "add"){
      this.iconTema1 = "remove";
      this.tema1 = true;

    } else if(this.iconTema1 === "remove"){
      this.iconTema1 = "add";
      this.tema1 = false;
      this.subTema11 = false;
    }
  }

  temas2(){
    if(this.iconTema2 === "add"){
      this.iconTema2 = "remove";
      this.tema2 = true;

    } else if(this.iconTema2 === "remove"){
      this.iconTema2 = "add";
      this.tema2 = false;
    }
  }

  temas3(){
    if(this.iconTema3 === "add"){
      this.iconTema3 = "remove";
      this.tema3 = true;

    } else if(this.iconTema3 === "remove"){
      this.iconTema3 = "add";
      this.tema3 = false;
    }
  }

  temas4(){
    if(this.iconTema4 === "add"){
      this.iconTema4 = "remove";
      this.tema4 = true;

    } else if(this.iconTema4 === "remove"){
      this.iconTema4 = "add";
      this.tema4 = false;
    }
  }

  temas5(){
    if(this.iconTema5 === "add"){
      this.iconTema5 = "remove";
      this.tema5 = true;

    } else if(this.iconTema5 === "remove"){
      this.iconTema5 = "add";
      this.tema5 = false;
    }
  }

  nuevoTema1(){
    this.add1 = false;
    this.tituloTema2 = true;

  }

  nuevoTema2(){
    this.add2 = false;
    this.tituloTema3 = true;
  }

  eliminaTema2(){
    this.add1 = true;
    this.tituloTema2 = false;
  }

  nuevoTema3(){
    this.add3 = false;
    this.tituloTema4 = true;
  }

  eliminaTema3(){
    this.add2 = true;
    this.tituloTema3 = false;
  }

  nuevoTema4(){
    this.add4 = false;
    this.tituloTema5 = true;
  }

  eliminaTema4(){
    this.add3 = true;
    this.tituloTema4 = false;
  }

  eliminaTema5(){
    this.add4 = true;
    this.tituloTema5 = false;
  }

  subtemas11(){
    this.subTema1 = true;
    this.subTema11 = true;
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

  eliminaCompetencia2(){
    this.add2 = true;
    this.nucomp2 = false;
  }

  eliminaCompetencia3(){
    this.add3 = true;
    this.nucomp3 = false;
  }

  eliminaCompetencia4(){
    this.add4 = true;
    this.nucomp4 = false;
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

  datos:any;
  modulos: Module;
  esPresenta:boolean = true;
  EsTitulo:boolean = true;
  esDescripcion:boolean = true;

  compObject:boolean = true;
  comp:boolean = false;
  obj:boolean = false;

  textareaContent1:any;
  textareaContent2:any;
  textareaContent3:any;
  textareaContent4:any;
  textareaContent5:any;

  competencias:any;
  
  objetivoContent1:any;
  objetivoContent2:any;
  objetivoContent3:any;
  objetivoContent4:any;
  objetivoContent5:any;

  objetivos1:any;
  objetivos2:any;
  objetivos3:any;
  objetivos4:any;
  objetivos5:any;

  auxiliar1: string = "";
  auxiliar2: string = "";
  auxiliar3: string = "";
  auxiliar4: string = "";
  auxiliar5: string = "";

  currentUrl:string = "";

  constructor(private router: Router, 
              private _courseService: CourseService, 
              private cdr: ChangeDetectorRef, 
              private sanitizer: DomSanitizer, 
              private _moduleService: ModuleService,
              private activatedRoute:ActivatedRoute
    ) {}
  
  ngOnInit(){

    this.currentUrl = this.router.url;

    const {id}= this.activatedRoute.snapshot.params;

    this._moduleService.getModule(id).subscribe({
      next: (dataModule) =>{

        this.modulos = dataModule.cursoModuloInfo?.modulo;

        console.log(this.modulos);


        this.quizzes = Array.isArray(dataModule.quizFormativo) ? dataModule.quizFormativo : [dataModule.quizFormativo];

      },
      error: (e: HttpErrorResponse) => {
        console.error(e);
      } 
    });

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

  autoExpand(event: any): void {
    const textarea = event.target;
    textarea.style.height = 'auto';
    const newHeight = textarea.scrollHeight;
    
    // Limitar la altura a 72px
    if (newHeight <= 72) {
      textarea.style.height = newHeight + 'px';
    }

    this.textareaContent1 = textarea.value;

  }

  actualiza(){

    if(this.comp){

      if((this.textareaContent1 !== this.auxiliar1) || (this.textareaContent2 !== this.auxiliar2) && (this.textareaContent3  !== this.auxiliar3) && (this.textareaContent4 !== this.auxiliar4) && (this.textareaContent5 !== this.auxiliar5)){
        
        this.competencias = this.textareaContent1;

        this.cerrar();
      }

    }

    if(this.obj){

      if((this.objetivoContent1 !== this.auxiliar1) || (this.objetivoContent2 !== this.auxiliar2) && (this.objetivoContent3  !== this.auxiliar3) && (this.objetivoContent4 !== this.auxiliar4) && (this.objetivoContent5 !== this.auxiliar5)){
        
        this.objetivos1 = this.objetivoContent1;
        this.objetivos2 = this.objetivoContent2;
        this.objetivos3 = this.objetivoContent3;
        this.objetivos4 = this.objetivoContent4;
        this.objetivos5 = this.objetivoContent5;

        this.cerrar();
      }

      console.log("Modifica algún campo")

    }

  }

  modalC(){

    this.auxiliar1 = this.objetivoContent1;
    this.auxiliar2 = this.objetivoContent2;
    this.auxiliar3 = this.objetivoContent3;
    this.auxiliar4 = this.objetivoContent4;
    this.auxiliar5 = this.objetivoContent5;

    this.compObject = false;
    this.comp = true;

  }

  cerrar(){
    this.compObject = true;
    this.obj = false;
    this.comp = false;
  }

  newModulo(){

    const baseUrl = this.currentUrl.split('/infoDoc-modulo')[0];

    const newUrl = baseUrl+"/resources/podcast";

    this.router.navigateByUrl(newUrl);
  }

}
