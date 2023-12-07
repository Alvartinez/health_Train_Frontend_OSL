import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(private router: Router) {}

  menuN:string = "add"
  menuI:string = "add"
  nuevos: boolean = true;

  actuales:boolean = true;

  curso_Nuevo(){
    if(this.nuevos){
      this.menuN = "check_indeterminate_small"
      this.nuevos = false;
      
      return;
    }
    this.menuN = "add";
    this.nuevos = true;
  }

  curso_Inscritos(){
    if(this.actuales){
      this.menuI = "check_indeterminate_small"
      this.actuales = false;
      
      return;
    }
    this.menuI = "add";
    this.actuales = true;
  }

  prueba(){
    const currentUrl = this.router.url;

    const baseUrl = currentUrl.split('/vist-home')[0];
    
    // Navega a la nueva URL
    this.router.navigateByUrl(baseUrl+"/user-course");
  }

}
