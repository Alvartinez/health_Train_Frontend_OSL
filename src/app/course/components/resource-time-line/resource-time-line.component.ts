import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormArray, FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { RecursoTimeLine } from '@rutas/course/model/recursos.model';

@Component({
  selector: 'app-resource-time-line',
  templateUrl: './resource-time-line.component.html',
  styleUrls: ['./resource-time-line.component.css']
})
export class ResourceTimeLineComponent {

  forma: FormGroup;
  disableGuardar:boolean=false;
  disableAgregarHito:boolean=false;
  fotoSeleccionada: File;
  timeLine: RecursoTimeLine = new RecursoTimeLine();

  constructor(private fb: FormBuilder){
    this.crearFormulario();
  }

  crearFormulario(){
    this.forma= this.fb.group({
      nombre:   ['', [Validators.required]],

      hitos: this.fb.array([]),
    }as FormControlOptions);
  }

  //validaciones
  isValido(param: any){
    return this.forma.get(param).invalid && this.forma.get(param).touched;
  }

  isValidoHitos(index: number, param:string){
    return this.hitos.at(index).get(param).invalid && this.hitos.at(index).get(param).touched;
  }

  get hitos(): FormArray{
    return this.forma.get('hitos') as FormArray;
  }

  agregarHito(){
    this.hitos.push(this.fb.group({
      tituloHito: ['',[Validators.required]],
      dateHito: ['',[Validators.required]],
      desc: ['',[Validators.required]],
      img:[''],
      link:['']
    })

    
    );
    this.desactivarBotones();
  }

  private desactivarBotones() {
    this.disableAgregarHito = this.hitos.length >=8;
    this.disableGuardar = this.hitos.length >= 4;
  }

  borrarHito(index: number) {
    this.hitos.removeAt(index);
    this.desactivarBotones();
  }

  seleccionarFoto(event){
    this.fotoSeleccionada= event.target.files[0];
    //this.progreso=0;

    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error seleccionar imagen: ', 'El archivo debe ser de tipo imagen','error');
      this.fotoSeleccionada=null;
    }
  }

  guardar() {
    
    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control=> {
        
        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(controlForm=> controlForm.markAllAsTouched());
        }
        control.markAllAsTouched();
      });
    }
    
    this.timeLine.nombre= this.forma.get('nombre').value;
    this.timeLine.hitos= this.forma.get('hitos').value;

    //llamar al service y retornar respuesta
    
    
  }

}
