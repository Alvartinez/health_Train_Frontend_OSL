import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '@rutas/course/services/curso.service';

@Component({
  selector: 'footer-teacher',
  templateUrl: './footer-teacher.component.html',
  styleUrls: ['./footer-teacher.component.css']
})
export class FooterTeacherComponent {
  constructor(private _courseService:CourseService,
    private activatedRoute:ActivatedRoute) {} 

  portada:boolean = true;
  nombre:string = "";

  titulo = "../../../../assets/image/karen_martinez.png";

  ngOnInit(): void{

    const {id}= this.activatedRoute.snapshot.params;

    if(id === 1){
      this.titulo = "../../../../assets/image/karen_martinez.png";
    }else{
      this.titulo = "../../../../assets/image/foto-perfil.png";
    }

    this._courseService.getCourse(id).subscribe({
      next:(curso) => {
        this.nombre = curso.creador.nombre;
      }
    });

  }

}
