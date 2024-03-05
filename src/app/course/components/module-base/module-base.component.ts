import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '@rutas/course/services/curso.service';
import { ModuleService } from '@rutas/course/services/modulo.service';
import { Module } from '@rutas/course/interfaces/modulo';

@Component({
  selector: 'module-base',
  templateUrl: './module-base.component.html',
  styleUrls: ['./module-base.component.css']
})
export class ModuleBaseComponent {

  constructor(private location: Location,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private _moduleService:ModuleService) {}

    titulo:string = "";

    idCurso:number;
    numero:number;

    currentUrl:any;
    baseUrl:any;

    modulo:Module = {
      nombre: ""
    }

  ngOnInit(){
    
    const {id}= this.activatedRoute.snapshot.params;

    this.currentUrl = this.router.url;

    this.baseUrl = this.currentUrl.split('/modules')[0];

    const currentPath = this.location.path();
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 2];

    this.numero = parseInt(ultimoSegmento, 10);

    console.log(this.numero)

    this._moduleService.getModule(id).subscribe({
      next:(info)=>{
        console.log(info)
        this.modulo = info.cursoModuloInfo?.modulo;
        
        this.titulo = this.modulo.nombre;

      }
    });

    this._moduleService.getAllModules(this.numero).subscribe({
      next:(modulos)=>{
        
        modulos.sort((a, b) => a.id_modulo - b.id_modulo);

        

        const moduloEncontrado = modulos.find(modulo => modulo.nombre === this.titulo);

        if (moduloEncontrado) {
          // Encuentra el índice del módulo y le suma uno para obtener un conteo humano (iniciando desde 1).
          const numeroModulo = modulos.indexOf(moduloEncontrado) + 1;
          
          this.numero = numeroModulo;
        }

      }
    });
  
  }

}
