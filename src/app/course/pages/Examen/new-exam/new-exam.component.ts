import { Component } from '@angular/core';

@Component({
  selector: 'app-new-exam',
  templateUrl: './new-exam.component.html',
  styleUrls: ['./new-exam.component.css']
})
export class NewExamComponent {
  evaluationName: string = '';
  totalScore: number = 0;

  newQuestion: any = {
    type: 'single',
    content: '',
    options: [''],
    correctAnswer: '',
    feedback: '' 
  };
  questions: any[] = [];

  addQuestion() {
    this.questions.push({...this.newQuestion});
    this.newQuestion = { type: 'single', content: '', options: [''], correctAnswer: '' };
    this.calculateQuestionValues();
  }

  optionsReady: boolean = false;

  addOption() {
    this.newQuestion.options.push('');
  }

  removeOption(index: number) {
    this.newQuestion.options.splice(index, 1);
  }

  updateOptions() {
    // Verificar si al menos una opción tiene un valor no vacío
    this.optionsReady = this.newQuestion.options.some((option:any) => option.trim() !== '');
  }

  calculateQuestionValues() {
    let valuePerQuestion = this.totalScore / this.questions.length;
    this.questions.forEach(question => question.value = valuePerQuestion);
  }

  editQuestion(index: number) {
    this.newQuestion = {...this.questions[index]};
    this.questions.splice(index, 1);
    this.calculateQuestionValues();
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
    this.calculateQuestionValues();
  }
}