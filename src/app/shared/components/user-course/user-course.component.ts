import { Component } from '@angular/core';

@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css']
})
export class UserCourseComponent {

  numero: any;
  titulo:any;
  imagen:any;
  descripcion:any;
  porcentaje_Modulo:any

  ngOnInit() {
    this.numero = 1;
    this.titulo = "Buenas prácticas de manufactura";
    this.imagen = "../../../../assets/image/modulo2.png";
    this.descripcion = "                    La finalidad del curso es dar a conocer a los estudiantes diferentes principios y requisitos sanitarios que se encuentran establecidos en la Resolución ...";
    this.porcentaje_Modulo = 10
  }

}
