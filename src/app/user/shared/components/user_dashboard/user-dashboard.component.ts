import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '@rutas/course/services/curso.service';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(private router: Router, private _courseService:CourseService) {}

  menuN:string = "check_indeterminate_small"
  menuI:string = "check_indeterminate_small"
  nuevos: boolean = true;

  cursosInscritos:any;
  cursosDisponibles:any;

  actuales:boolean = true;
  baseUrl:any;

  ngOnInit(): void{
    const currentUrl = this.router.url;

    this.baseUrl = currentUrl.split('/vist-home')[0];

    console.log(this.baseUrl);

    this._courseService.getAllCursos().subscribe({
      next: (cursos) => {
        
        this._courseService.getEnrolledCourses(1).subscribe({
          next:(data) => {
            this.cursosInscritos = data;
            
            if (this.cursosInscritos.length > 0) {
              // Extraer los IDs de los cursos inscritos
              const inscritosIds = this.cursosInscritos.map((curso:any) => curso.id_curso);

              // Filtrar cursos a los que el usuario no está inscrito
              this.cursosDisponibles = cursos.filter((curso:any) => !inscritosIds.includes(curso.id_curso));
            } else {
              // Si no hay cursos inscritos, mostrar todos los cursos
              this.cursosDisponibles = cursos;
            }

          }

        });
        
      }
    });

  }

  curso_Nuevo(){
    if(this.nuevos){
      this.menuN = "add"
      this.nuevos = false;
      
      return;
    }
    this.menuN = "check_indeterminate_small";
    this.nuevos = true;
  }

  curso_Inscritos(){
    if(this.actuales){
      this.menuI = "add"
      this.actuales = false;
      
      return;
    }
    this.menuI = "check_indeterminate_small";
    this.actuales = true;
  }

  prueba(id:any){

    if(true){

      this.router.navigateByUrl(`${this.baseUrl}/courses/${id}/info-course`);

    }else{
      this.router.navigateByUrl(`${this.baseUrl}/courses/${id}/user-course`);
    }
    
  }

  nuevo_Curso(){
    this.router.navigateByUrl(this.baseUrl+"/courses/new-course");
  }

}
