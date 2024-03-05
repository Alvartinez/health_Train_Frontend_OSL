import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '@rutas/course/interfaces/modulo';
import { ModuleService } from '@rutas/course/services/modulo.service';

@Component({
  selector: 'app-content-module',
  templateUrl: './content-module.component.html',
  styleUrls: ['./content-module.component.css']
})
export class ContentModuleComponent {
  
  constructor(private location:Location,
              private router: Router,
              private activatedRoute:ActivatedRoute,
              private _moduleService:ModuleService){}

  titulo:string = "";

  numero:number;

  modulo:Module = {
    nombre: ""
  }

  ngOnInit(){
    const {id}= this.activatedRoute.snapshot.params;
    console.log(id)

    this._moduleService.getModule(id).subscribe({
      next:(info)=>{
        console.log(info)
        this.modulo = info.cursoModuloInfo?.modulo;
        
        this.titulo = this.modulo.nombre;

      }
    });

  }

  retroceder(){
    this.location.back();
  }

  titulo1 = [
    "Historia y evolución",
    "Características específicas de las bacterias para el diagnóstico a nivel industrial y clínico",
    "Existen alimentos implicados en infecciones virales, incluida el agua",
    "Alimentos contaminados por virus"
  ];

  module_selected =[
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
  ]

  titulos = [
    "HISTORIA Y EVOLUCIÓN",
    "LEGISLACIONES E INSTITUCIONES",
    "EDIFICACIÓN E INSTALACIONES",
    "EQUIPOS Y UTENSILIOS",
    "PERSONAL MANIPULADOR DE ALIMENTOS",
    "REQUISITOS DE HIGIENE Y FABRICACION",
    "ASEGURAMIENTO Y CONTROL DE LA CALIDAD E INOCUIDAD",
    "SANEAMIENTO",
    "ALMACENAMIENTO Y TRANSPORTE",
    "RESTAURANTES Y ESTABLECIMIENTOS GASTRONÓMICOS"
  ]
 
}
