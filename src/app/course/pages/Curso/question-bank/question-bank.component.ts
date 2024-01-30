import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionService } from '@rutas/course/services/question.service';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent {

  questionForm: FormGroup | any;

  constructor(private fb: FormBuilder, private __questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      enunciado: [''],
      opciones: this.fb.array([]),
      tipo_pregunta: [''],
      multiple: [false],
      puntaje: [0]
    });
  }

  opciones(): FormArray {
    return this.questionForm.get('opciones') as FormArray;
  }

  newOpcion(): FormGroup {
    return this.fb.group({
      nombre: '',
      valor: false,
      ponderado: 0
    });
  }

  addOpcion(): void {
    this.opciones().push(this.newOpcion());
  }

  removeOpcion(i: number): void {
    this.opciones().removeAt(i);
  }

  onSubmit(): void {
    if (this.questionForm.valid) {
      this.__questionService.addQuestion(this.questionForm.value).subscribe((result:any) => {
        console.log(result);
      });
    }
  }


}
