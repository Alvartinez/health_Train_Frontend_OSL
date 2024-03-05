import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '@rutas/course/services/modulo.service';
import { Module } from '@rutas/course/interfaces/modulo';

@Component({
  selector: 'info-modulo',
  templateUrl: './info-modulo.component.html',
  styleUrls: ['./info-modulo.component.css']
})
export class InfoModuloComponent {

  constructor(private location: Location, private router: Router, private _moduleService:ModuleService,
              private activatedRoute: ActivatedRoute) {}

  description: boolean = false;
  objetivo: boolean = false;
  competencia: boolean = false;
  duracion: boolean = false;
  tema: boolean = false;
  tabDescription = "add";
  tabObjetivo = "add";
  tabCompetencia = "add";
  tabDuracion = "add";
  tabTema = "add";

  idModulo:number = 0;

  modulo:Module = {
    nombre: "",
    descripcion: "",
    objetivo: "",
    conclusion: "",
    competencias: [],
    duracion: 0,
    temas: []
  }

  ngOnInit(){

    const {id} = this.activatedRoute.snapshot.params;

    this.idModulo = id;

    this._moduleService.getModule(id).subscribe({
      next: (data) => {

         this.modulo = data.cursoModuloInfo.modulo;
         
         console.log(this.modulo);
      }
    });

  }

  tab(tabName: string) {
    // Cambiar el valor del booleano específico según el nombre proporcionado
    if (tabName === 'description') {
      this.description = !this.description;

      if(this.description){
        this.tabDescription = "check_indeterminate_small";
      }else{
        this.tabDescription = "add";
      }

    } else if (tabName === 'objetivo') {
      this.objetivo = !this.objetivo;

      if(this.objetivo){
        this.tabObjetivo = "check_indeterminate_small";
      }else{
        this.tabObjetivo = "add";
      }

    } else if (tabName === 'competencia') {
      this.competencia = !this.competencia;

      if(this.competencia){
        this.tabCompetencia = "check_indeterminate_small";
      }else{
        this.tabCompetencia = "add";
      }

    } else if (tabName === 'duracion') {
      this.duracion = !this.duracion;

      if(this.duracion){
        this.tabDuracion = "check_indeterminate_small";
      }else{
        this.tabDuracion = "add";
      }

    } else if (tabName === 'tema') {
      this.tema = !this.tema;

      if(this.tema){
        this.tabTema = "check_indeterminate_small";
      }else{
        this.tabTema = "add";
      }

    }
  }

  close(){
    this.location.back();
  }

  verModulo(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/info-modulo')[0];

    this.router.navigateByUrl(baseUrl+"/modulo");

  }

}
