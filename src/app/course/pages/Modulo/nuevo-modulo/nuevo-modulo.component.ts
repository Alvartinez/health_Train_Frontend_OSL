import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competencia } from '@rutas/course/interfaces/curso';
import { Module, SubTema, Tema } from '@rutas/course/interfaces/modulo';
import { Location } from '@angular/common';
import { CompetenceService } from '@rutas/course/services/competencia.service';
import { ModuleService } from '@rutas/course/services/modulo.service';

@Component({
  selector: 'app-nuevo-modulo',
  templateUrl: './nuevo-modulo.component.html',
  styleUrls: ['./nuevo-modulo.component.css']
})
export class NuevoModuloComponent {

  imagen: string | ArrayBuffer | null = '../../../../assets/image/logo-perfil.png';

  portada:boolean = true;

  titulo:string = "";
  descripcion:string = "";
  tiempo:number = 0;
  objetivo:string = "";
  conlusion:string = "";

  numero:any;

  competencias: Competencia[] = [];

  seleccionesCompetencias: string[] = [];
  competenciasSeleccionadas: Competencia[] = [];
  currentUrl: string = "";
  baseUrl: string = "";
  newBaseUrl: string = "";

  agregarCompetenciaSeleccionada(competencia: string) {
    this.seleccionesCompetencias.push(competencia);
  }

  moduloTema1:any;
  moduloTema2:any;
  moduloTema3:any;
  moduloTema4:any;
  moduloTema5:any;

  moduloSubTema11:any;
  moduloSubTema12:any;
  moduloSubTema13:any;
  moduloSubTema14:any;
  moduloSubTema15:any;

  moduloSubTema21:any;
  moduloSubTema22:any;
  moduloSubTema23:any;
  moduloSubTema24:any;
  moduloSubTema25:any;

  moduloSubTema31:any;
  moduloSubTema32:any;
  moduloSubTema33:any;
  moduloSubTema34:any;
  moduloSubTema35:any;

  moduloSubTema41:any;
  moduloSubTema42:any;
  moduloSubTema43:any;
  moduloSubTema44:any;
  moduloSubTema45:any;

  moduloSubTema51:any;
  moduloSubTema52:any;
  moduloSubTema53:any;
  moduloSubTema54:any;
  moduloSubTema55:any;

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

  nuSubTema1:boolean = true;
  nuSubTema2:boolean = true;
  nuSubTema3:boolean = true;
  nuSubTema4:boolean = true;
  nuSubTema5:boolean = true;

  esSubTema1:boolean = true;
  esSubTema2:boolean = true;
  esSubTema3:boolean = true;
  esSubTema4:boolean = true;
  esSubTema5:boolean = true;

  add1:boolean = true;
  add2:boolean = true;
  add3:boolean = true;
  add4:boolean = true;
  add5:boolean = true;

  add11:boolean = true;
  add12:boolean = true;
  add13:boolean = true;
  add14:boolean = true;
  add15:boolean = true;

  add21:boolean = true;
  add22:boolean = true;
  add23:boolean = true;
  add24:boolean = true;
  add25:boolean = true;

  add31:boolean = true;
  add32:boolean = true;
  add33:boolean = true;
  add34:boolean = true;
  add35:boolean = true;

  add41:boolean = true;
  add42:boolean = true;
  add43:boolean = true;
  add44:boolean = true;
  add45:boolean = true;

  add51:boolean = true;
  add52:boolean = true;
  add53:boolean = true;
  add54:boolean = true;
  add55:boolean = true;

  moduloNuevo: Module = {
    id_curso: 0,
    nombre: "",
    descripcion: "",
    objetivo: "",
    conclusion: "",
    portada: "", 
    competencias: [],
    duracion: 0,
    temas: []
  }

  constructor(private router: Router, private _competenceService: CompetenceService, private _moduleService: ModuleService, private location: Location, private route: ActivatedRoute) {}

  ngOnInit(){

    this.currentUrl = this.router.url;

    this.baseUrl = this.currentUrl.split('/info-course')[0];

    const currentPath = this.location.path();
    console.log("current: "+currentPath);
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 3];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero);

    this._competenceService.getCompetence(this.numero).subscribe({
      next:(data) => {       
        this.competencias = data.competencia;
      }, 
      error:(e: HttpErrorResponse) => {
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
      };

      reader.readAsDataURL(file);
      this.portada =false;
    }
  }

  quitarFoto() {
    this.imagen = '../../../../assets/image/logo-perfil.png';
    this.portada = true;
  }

  subTema01(estado:boolean){
    this.esSubTema1 = !estado;
    
    if(this.esSubTema1){
      this.iconSubTema1 = "remove";
    }else{
      this.iconSubTema1 = "add";
    }
  }

  subTema02(estado:boolean){
    this.esSubTema2 = !estado;

    if(this.esSubTema2){
      this.iconSubTema2 = "remove";
    }else{
      this.iconSubTema2 = "add";
    }
  }

  subTema03(estado:boolean){
    this.esSubTema3 = !estado;

    if(this.esSubTema3){
      this.iconSubTema3 = "remove";
    }else{
      this.iconSubTema3 = "add";
    }
  }

  subTema04(estado:boolean){
    this.esSubTema4 = !estado;

    if(this.esSubTema4){
      this.iconSubTema4 = "remove";
    }else{
      this.iconSubTema4 = "add";
    }
  }

  subTema05(estado:boolean){
    this.esSubTema5 = !estado;

    if(this.esSubTema5){
      this.iconSubTema5 = "remove";
    }else{
      this.iconSubTema5 = "add";
    }
  }

  temas1(){
    if(this.iconTema1 === "add"){
      this.iconTema1 = "remove";
      this.tema1 = true;
    } else if(this.iconTema1 === "remove"){
      this.iconTema1 = "add";
      this.tema1 = false;
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
    this.moduloTema2 = undefined;
  }

  nuevoTema3(){
    this.add3 = false;
    this.tituloTema4 = true;
  }

  eliminaTema3(){
    this.add2 = true;
    this.tituloTema3 = false;
    this.moduloTema3 = undefined;
  }

  nuevoTema4(){
    this.add4 = false;
    this.tituloTema5 = true;
  }

  eliminaTema4(){
    this.add3 = true;
    this.tituloTema4 = false;
    this.moduloTema4 = undefined;
  }

  eliminaTema5(){
    this.add4 = true;
    this.tituloTema5 = false;
    this.moduloTema5 = undefined;
  }

  subtemas11(){
    this.subTema1 = true;
    this.subTema11 = true;
  }

  eliminaSubtema11(){
    if(this.subTema12 || this.subTema13 || this.subTema14 || this.subTema15){
      this.subTema11 = false;
      this.moduloSubTema11 = undefined;
    }else{
      this.subTema1 = false;
      this.subTema11 = false;
      this.moduloSubTema11 = undefined;
    }
  }

  nuevoSubtema12(){
    this.subTema12 = true;
    this.add11 = false;
    this.nuSubTema1 = false;
  }

  eliminaSubtema12(){
    if(this.subTema11 || this.subTema13 || this.subTema14 || this.subTema15){
      this.subTema12 = false;
      this.moduloSubTema12 = undefined;
      this.add11 = true;
      this.nuSubTema1 = true;
    }else{
      this.subTema1 = false;
      this.subTema12 = false;
      this.moduloSubTema12 = undefined;
      this.add11 = true;
      this.nuSubTema1 = true;
    }
  }

  nuevoSubtema13(){
    this.subTema13 = true;
    this.add12 = false;
  }

  eliminaSubtema13(){
    if(this.subTema11 || this.subTema12 || this.subTema14 || this.subTema15){
      this.subTema13 = false;
      this.moduloSubTema13 = undefined;
      this.add12 = true;
    }else{
      this.subTema1 = false;
      this.subTema13 = false;
      this.moduloSubTema13 = undefined;
      this.add12 = true;
    }
  }

  nuevoSubtema14(){
    this.subTema14 = true;
    this.add13 = false;
  }

  eliminaSubtema14(){
    if(this.subTema11 || this.subTema12 || this.subTema13 || this.subTema15){
      this.subTema14 = false;
      this.moduloSubTema14 = undefined;
      this.add13 = true;
    }else{
      this.subTema1 = false;
      this.subTema14 = false;
      this.moduloSubTema14 = undefined;
      this.add13 = true;
    }
  }

  nuevoSubtema15(){
    this.subTema15 = true;
    this.add14 = false;
  }

  eliminaSubtema15(){
    if(this.subTema11 || this.subTema12 || this.subTema14 || this.subTema15){
      this.subTema15 = false;
      this.moduloSubTema15 = undefined;
      this.add14 = true;
    }else{
      this.subTema1 = false;
      this.subTema15 = false;
      this.moduloSubTema15 = undefined;
      this.add14 = true;
    }
  }

  subtemas21(){
    this.subTema2 = true;
    this.subTema21 = true;
  }

  eliminaSubtema21(){
    if(this.subTema22 || this.subTema23 || this.subTema24 || this.subTema25){
      this.subTema21 = false;
      this.moduloSubTema21 = undefined;
    }else{
      this.subTema2 = false;
      this.subTema21 = false;
      this.moduloSubTema21 = undefined;
    }
  }

  nuevoSubtema22(){
    this.subTema22 = true;
    this.add21 = false;
    this.nuSubTema2 = false;
  }

  eliminaSubtema22(){
    if(this.subTema21 || this.subTema23 || this.subTema24 || this.subTema25){
      this.subTema22 = false;
      this.moduloSubTema22 = undefined;
      this.add21 = true;
      this.nuSubTema2 = true;
    }else{
      this.subTema2 = false;
      this.subTema22 = false;
      this.moduloSubTema22 = undefined;
      this.add21 = true;
      this.nuSubTema2 = true;
    }
  }

  nuevoSubtema23(){
    this.subTema23 = true;
    this.add22 = false;
  }

  eliminaSubtema23(){
    if(this.subTema21 || this.subTema22 || this.subTema24 || this.subTema25){
      this.subTema23 = false;
      this.moduloSubTema23 = undefined;
      this.add22 = true;
    }else{
      this.subTema2 = false;
      this.subTema23 = false;
      this.moduloSubTema23 = undefined;
      this.add22 = true;
    }
  }

  nuevoSubtema24(){
    this.subTema24 = true;
    this.add23 = false;
  }

  eliminaSubtema24(){
    if(this.subTema21 || this.subTema22 || this.subTema23 || this.subTema25){
      this.subTema24 = false;
      this.moduloSubTema24 = undefined;
      this.add23 = true;
    }else{
      this.subTema2 = false;
      this.subTema24 = false;
      this.moduloSubTema24 = undefined;
      this.add23 = true;
    }
  }

  nuevoSubtema25(){
    this.subTema25 = true;
    this.add24 = false;
  }
  
  eliminaSubtema25(){
    if(this.subTema21 || this.subTema22 || this.subTema24 || this.subTema25){
      this.subTema25 = false;
      this.moduloSubTema25 = undefined;
      this.add24 = true;
    }else{
      this.subTema2 = false;
      this.subTema25 = false;
      this.moduloSubTema25 = undefined;
      this.add24 = true;
    }
  }

  subtemas31(){
    this.subTema3 = true;
    this.subTema31 = true;
  }

  eliminaSubtema31(){
    if(this.subTema32 || this.subTema33 || this.subTema34 || this.subTema35){
      this.subTema31 = false;
      this.moduloSubTema31 = undefined;
    }else{
      this.subTema3 = false;
      this.subTema31 = false;
      this.moduloSubTema31 = undefined;
    }
  }

  nuevoSubtema32(){
    this.subTema32 = true;
    this.add31 = false;
    this.nuSubTema3 = false;
  }

  eliminaSubtema32(){
    if(this.subTema31 || this.subTema33 || this.subTema34 || this.subTema35){
      this.subTema32 = false;
      this.moduloSubTema32 = undefined;
      this.add31 = true;
      this.nuSubTema3 = true;
    }else{
      this.subTema3 = false;
      this.subTema32 = false;
      this.moduloSubTema32 = undefined;
      this.add31 = true;
      this.nuSubTema3 = true;
    }
  }

  nuevoSubtema33(){
    this.subTema33 = true;
    this.add32 = false;
  }

  eliminaSubtema33(){
    if(this.subTema31 || this.subTema32 || this.subTema34 || this.subTema35){
      this.subTema33 = false;
      this.moduloSubTema33 = undefined;
      this.add32 = true;
    }else{
      this.subTema3 = false;
      this.subTema33 = false;
      this.moduloSubTema33 = undefined;
      this.add32 = true;
    }
  }

  nuevoSubtema34(){
    this.subTema34 = true;
    this.add33 = false;
  }

  eliminaSubtema34(){
    if(this.subTema31 || this.subTema32 || this.subTema33 || this.subTema35){
      this.subTema34 = false;
      this.moduloSubTema34 = undefined;
      this.add33 = true;
    }else{
      this.subTema3 = false;
      this.subTema34 = false;
      this.moduloSubTema34 = undefined;
      this.add33 = true;
    }
  }

  nuevoSubtema35(){
    this.subTema35 = true;
    this.add34 = false;
  }

  eliminaSubtema35(){
    if(this.subTema31 || this.subTema32 || this.subTema34 || this.subTema35){
      this.subTema35 = false;
      this.moduloSubTema35 = undefined;
      this.add34 = true;
    }else{
      this.subTema3 = false;
      this.subTema35 = false;
      this.moduloSubTema35 = undefined;
      this.add34 = true;
    }
  }

  subtemas41(){
    this.subTema4 = true;
    this.subTema41 = true;
  }

  eliminaSubtema41(){
    if(this.subTema42 || this.subTema43 || this.subTema44 || this.subTema45){
      this.subTema41 = false;
      this.moduloSubTema41 = undefined;
    }else{
      this.subTema4 = false;
      this.subTema41 = false;
      this.moduloSubTema41 = undefined;
    }
  }

  nuevoSubtema42(){
    this.subTema42 = true;
    this.add41 = false;
    this.nuSubTema4 = false;
  }

  eliminaSubtema42(){
    if(this.subTema41 || this.subTema43 || this.subTema44 || this.subTema45){
      this.subTema42 = false;
      this.moduloSubTema42 = undefined;
      this.add41 = true;
      this.nuSubTema4 = true;
    }else{
      this.subTema4 = false;
      this.subTema42 = false;
      this.moduloSubTema42 = undefined;
      this.add41 = true;
      this.nuSubTema4 = true;
    }
  }

  nuevoSubtema43(){
    this.subTema43 = true;
    this.add42 = false;
  }

  eliminaSubtema43(){
    if(this.subTema31 || this.subTema42 || this.subTema44 || this.subTema45){
      this.subTema43 = false;
      this.moduloSubTema43 = undefined;
      this.add42 = true;
    }else{
      this.subTema4 = false;
      this.subTema43 = false;
      this.moduloSubTema43 = undefined;
      this.add42 = true;
    }
  }

  nuevoSubtema44(){
    this.subTema44 = true;
    this.add43 = false;
  }

  eliminaSubtema44(){
    if(this.subTema41 || this.subTema42 || this.subTema43 || this.subTema45){
      this.subTema44 = false;
      this.moduloSubTema44 = undefined;
      this.add43 = true;
    }else{
      this.subTema4 = false;
      this.subTema44 = false;
      this.moduloSubTema44 = undefined;
      this.add43 = true;
    }
  }

  nuevoSubtema45(){
    this.subTema45 = true;
    this.add44 = false;
  }

  eliminaSubtema45(){
    if(this.subTema41 || this.subTema42 || this.subTema44 || this.subTema45){
      this.subTema45 = false;
      this.moduloSubTema45 = undefined;
      this.add44 = true;
    }else{
      this.subTema4 = false;
      this.subTema45 = false;
      this.moduloSubTema45 = undefined;
      this.add44 = true;
    }
  }

  subtemas51(){
    this.subTema5 = true;
    this.subTema51 = true;
  }

  eliminaSubtema51(){
    if(this.subTema52 || this.subTema53 || this.subTema54 || this.subTema55){
      this.subTema51 = false;
      this.moduloSubTema51 = undefined;
    }else{
      this.subTema5 = false;
      this.subTema51 = false;
      this.moduloSubTema51 = undefined;
    }
  }

  nuevoSubtema52(){
    this.subTema52 = true;
    this.add51 = false;
    this.nuSubTema5 = false;
  }

  eliminaSubtema52(){
    if(this.subTema51 || this.subTema53 || this.subTema54 || this.subTema55){
      this.subTema52 = false;
      this.moduloSubTema52 = undefined;
      this.add51 = true;
      this.nuSubTema5 = true;
    }else{
      this.subTema5 = false;
      this.subTema52 = false;
      this.moduloSubTema52 = undefined;
      this.add51 = true;
      this.nuSubTema5 = true;
    }
  }

  nuevoSubtema53(){
    this.subTema53 = true;
    this.add52 = false;
  }

  eliminaSubtema53(){
    if(this.subTema51 || this.subTema52 || this.subTema54 || this.subTema55){
      this.subTema53 = false;
      this.moduloSubTema53 = undefined;
      this.add52 = true;
    }else{
      this.subTema5 = false;
      this.subTema53 = false;
      this.moduloSubTema53 = undefined;
      this.add52 = true;
    }
  }

  nuevoSubtema54(){
    this.subTema54 = true;
    this.add53 = false;
  }

  eliminaSubtema54(){
    if(this.subTema51 || this.subTema52 || this.subTema53 || this.subTema55){
      this.subTema54 = false;
      this.moduloSubTema54 = undefined;
      this.add53 = true;
    }else{
      this.subTema5 = false;
      this.subTema54 = false;
      this.moduloSubTema54 = undefined;
      this.add53 = true;
    }
  }

  nuevoSubtema55(){
    this.subTema55 = true;
    this.add54 = false;
  }

  eliminaSubtema55(){
    if(this.subTema51 || this.subTema32 || this.subTema34 || this.subTema35){
      this.subTema55 = false;
      this.moduloSubTema55 = undefined;
      this.add54 = true;
    }else{
      this.subTema5 = false;
      this.subTema55 = false;
      this.moduloSubTema55 = undefined;
      this.add54 = true;
    }
  }

  generarJSON(): any {
    const temas: Tema[] = [];

    this.agregarTema(this.tema1, this.moduloTema1, 1, temas);
    this.agregarTema(this.tema2, this.moduloTema2, 2, temas);
    this.agregarTema(this.tema3, this.moduloTema3, 3, temas);
    this.agregarTema(this.tema4, this.moduloTema4, 4, temas);
    this.agregarTema(this.tema5, this.moduloTema5, 5, temas);

    return temas;
  
  }

  agregarTema(existeTema: boolean, nombreTema: any, numeroTema: number, arregloTemas: Tema[]): void {

    if (existeTema && nombreTema !== undefined && nombreTema !== null) {
      const tema: Tema = { nombre: nombreTema };
      tema.subtemas = this.generarSubtemas(numeroTema);
      arregloTemas.push(tema);
    }

  }

  generarSubtemas(numeroTema: number): SubTema[] | undefined {
    const subtemas: SubTema[] = [];
    const prefijoSubtema = `moduloSubTema${numeroTema}`;

    for (let i = 1; i <= 5; i++) {
      const nombrePropiedad = prefijoSubtema + i as keyof this;
      const valorSubtema = this[nombrePropiedad] as any;

      if (valorSubtema !== undefined && valorSubtema !== null) {
        subtemas.push({ nombre: valorSubtema });
      }
    }

    return subtemas.length > 0 ? subtemas : undefined;

  }

  genera(){
    for (let i = 0; i < this.seleccionesCompetencias.length; i++) {
      const nombreCompetencia = this.seleccionesCompetencias[i];
    
      if (nombreCompetencia && nombreCompetencia.trim() !== '') {
        this.competenciasSeleccionadas.push({ nombre: nombreCompetencia });
      }
    }

    console.log(this.competenciasSeleccionadas);

    const Temario = this.generarJSON();
    
    if(this.tiempo > 0){
      console.log("Tiempo: "+this.tiempo);
      console.log("Objetivo de aprendizaje: "+this.objetivo);
    } else {
      console.log("La duración debe ser poositiva");
      return;
    }

    this.moduloNuevo = {
      id_curso: this.numero,
      nombre: this.titulo,
      descripcion: this.descripcion,
      objetivo: this.objetivo,
      conclusion: this.conlusion, 
      portada: this.imagen as string, 
      competencias: this.competenciasSeleccionadas,
      duracion: this.tiempo,
      temas: Temario
    }

    console.log(this.moduloNuevo);

    this.newBaseUrl = this.baseUrl.split('/new-module')[0];
    console.log(this.newBaseUrl);


    this._moduleService.newModule(this.moduloNuevo).subscribe({
      next: (datoModulo) => {
       console.log("Módulo creado");
       console.log(datoModulo);
        this.router.navigate([this.newBaseUrl, datoModulo?.moduloNuevo.id_modulo,'infoDoc-modulo']);
      }
    });      

  }

}
