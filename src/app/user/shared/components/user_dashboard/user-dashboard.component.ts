import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '@rutas/course/services/curso.service';
import { QuizService } from '@rutas/course/services/quiz.service';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  @Output() loadingChange = new EventEmitter<boolean>();

  constructor(private router: Router, private _courseService:CourseService, private toastr: ToastrService, private _quizService:QuizService) {}  

  tokenId:number;
  rol:string = "";
  visitante:boolean = true;
  creaCurso:boolean = false;
  
  menuN:string = "check_indeterminate_small"
  menuI:string = "check_indeterminate_small"
  nuevos: boolean = true;

  cursosInscritos:any;
  cursosDisponibles:any;

  nuevoCurso:boolean = false;

  actuales:boolean = true;
  baseUrl:any;

  ngOnInit(): void{
    const currentUrl = this.router.url;

    const token:any = localStorage.getItem("x-token");
    const decoded:any = jwt_decode(token);
    this.tokenId = decoded.id_persona;
    this.rol = decoded.rol;

    console.log(this.tokenId);

    console.log(this.rol);

    if(decoded.rol === "Aprendiz"){

      this.baseUrl = currentUrl.split('/user-home')[0];

      this.visitante = false;
    }
    
    if(decoded.rol == "Docente"){

      this.baseUrl = currentUrl.split('/doc-home')[0];

      this.nuevoCurso = false;
      this.visitante = false;
      this.creaCurso = true;
      this.actuales = true;
    }

    this._courseService.getAllCursos().subscribe({
      next: (cursos) => {

        console.log(cursos)

        if(decoded.rol === "Aprendiz"){

          console.log(this.tokenId)

          this._courseService.getEnrolledCourses(this.tokenId).subscribe({
            next:(data) => {
              this.cursosInscritos = data;

              console.log(data)
              
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
          
        } else if(decoded.rol === "Docente"){
           // Filtrar los cursos donde id_persona es igual a tokenId
          this.cursosInscritos = cursos.filter((curso:any) => curso.id_persona === this.tokenId);

          // Si necesitas ver en consola los cursos disponibles después del filtrado
          console.log(this.cursosInscritos);
        }else if (decoded.rol === "Visitante"){
          this.cursosDisponibles = cursos;
        }
        
      }
    });

  }

  setLoadingState(isLoading: boolean) {
    this.loadingChange.emit(isLoading);
  }

  onDashboardDataLoaded() {
    this.setLoadingState(false);
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

  tuCurso(id:any){

    if(this.rol === "Aprendiz"){

      if(id === 1){
        this.router.navigateByUrl(`${this.baseUrl}/courses/${id}/user-course`);  
      }else{
        this.router.navigateByUrl(`${this.baseUrl}/courses/${id}/user-course`);
      }

    }else if(this.rol === "Docente"){

      this.router.navigateByUrl(`${this.baseUrl}/courses/${id}/info-course`);

    }
    
  }

  nuevo_Curso(){
    console.log(this.baseUrl);
    this.router.navigateByUrl(this.baseUrl+"/courses/new-course");
  }

  visualizarCurso(id:number){

    const currentUrl = this.router.url;

    if(this.rol === "Visitante"){
      this.baseUrl = currentUrl.split('/vist-home')[0];
    }else{
      this.baseUrl = currentUrl.split('/user-home')[0];
    }

    this.router.navigateByUrl(this.baseUrl+"/courses/"+id+"/course-content");
  }

}
