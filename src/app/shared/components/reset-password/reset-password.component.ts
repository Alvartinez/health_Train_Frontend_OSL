import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  @Output() eventoBooleano: EventEmitter<boolean> = new EventEmitter<boolean>();

  close(){
    this.eventoBooleano.emit(false);
  }
}
