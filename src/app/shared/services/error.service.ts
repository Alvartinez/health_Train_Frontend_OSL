import { HttpErrorResponse } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) {}

  msgError(event: HttpErrorResponse | any) {
    if (event.error) { 
      this.toastr.error(event.error.msg, "Error");
    } 
  }

}