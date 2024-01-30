import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CourseService } from '@rutas/course/services/curso.service';
import { ModuleService } from '@rutas/course/services/modulo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EvaluationService } from '@rutas/course/services/evaluation.service';
import { QuizService } from '@rutas/course/services/quiz.service';


@Component({
  selector: 'app-user-course',
  templateUrl: './user-course.component.html',
  styleUrls: ['./user-course.component.css']
})
export class UserCourseComponent {

  numero: any;
  titulo:any;
  imagen:any;
  porcentaje_Modulo:any
  curso:any;
  modulos:any;
  tokenId:any;

  porcentaje:number = 0;
  examen = false;
  resultado: any;

  constructor(private router: Router, private location: Location, private _courseService:CourseService, private _moduleService:ModuleService, private sanitizer: DomSanitizer,private _quizService: QuizService, private _evaluacionService: EvaluationService, private route: ActivatedRoute){}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {

    this.tokenId = 2;

    const currentPath = this.location.path();
    const segments = currentPath.split('/');
    const ultimoSegmento = segments[segments.length - 2];

    this.numero = parseInt(ultimoSegmento, 10);

    this._courseService.getCourse(this.numero).subscribe({
      next:(data)=>{
        this.curso = data;

        this.curso.presentacion = this.getSafeUrl(this.curso.presentacion);

        this._moduleService.getAllModules(this.numero).subscribe({
          next:(datos) => {
            this.modulos = datos;
          }
        });

      }
    });

    this._quizService.resultQuiz().subscribe({
      next: (data) =>{
        if(data.length === 0){
          this.porcentaje = 0;
          return;
        }
        
        const resultadosAcumulados:any = {}; // Objeto para mantener los resultados acumulados

        for (let i = 0; i < data.length; i++) {
          const id_persona = data[i].id_persona;
          const id_formativo = data[i].id_quiz_formativo;
          const puntaje = data[i].respuestas.puntaje;
          const ponderado = data[i].respuestas.opcion.ponderado;

          if (this.tokenId === id_persona) {
            if (!resultadosAcumulados[id_formativo]) {
            
              resultadosAcumulados[id_formativo] = {
                puntajeTotal: 0,
                ponderadoTotal: 0,
                id_quiz_formativo: id_formativo
              };
            }

            // Acumulamos los puntajes y ponderados
            resultadosAcumulados[id_formativo].puntajeTotal += puntaje;
            resultadosAcumulados[id_formativo].ponderadoTotal += ponderado;
          }
        }

        // Ahora resultadosAcumulados contendrá la suma total de puntaje y ponderado
        const resultadosArray = Object.values(resultadosAcumulados);


        for (let i = 0; i < resultadosArray.length; i++) {
          const resultado:any = resultadosArray[i];

          this.porcentaje += this.obtenerPuntaje(resultado);
      
        }

        if(this.porcentaje >= 80){
          this.examen = true;
        }

        this.ResultadosEvaluation(this.tokenId);

      }
    });

    this.imagen = "../../../../assets/image/modulo2.png";
    this.porcentaje_Modulo = 0
  }

  ResultadosEvaluation(id:any){
    this._evaluacionService.resultEvaluation(id).subscribe({
      next: (date:any) =>{
        this.examen = false;
        this.resultado = date;
      }
    });
  }

  obtenerPuntaje(resultado:any){

    if(resultado.id_quiz_formativo === 2){

      if(Math.round(resultado.ponderadoTotal) == Math.round(resultado.puntajeTotal)){
        return 10;
      }else{

        return Math.round((resultado.ponderadoTotal / resultado.puntajeTotal) * 10);
      }

    }

    if(resultado.ponderadoTotal == resultado.puntajeTotal){
      return 10;
    }else{
      return Math.round((resultado.ponderadoTotal / resultado.puntajeTotal) * 10);
    }
    
  }

  verModulo(id:any){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/user-course')[0];

    console.log(baseUrl);

    this.router.navigate([baseUrl, "modules", id,'info-modulo'], { relativeTo: this.route }); 

  }

}
