import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  formulario: FormGroup;

  error:boolean =  false;
  enviado:boolean = false;

  leido:string = "N";

  constructor(private formBuilder:FormBuilder, private titleService:Title, private apiService:ApiService, public sesionService:SesionService) {
    this.titleService.setTitle("NJA - Contactenos");

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched;
  }

  get emailNoValido(){
    return this.formulario.get('email')?.invalid && this.formulario.get('email')?.touched;
  }

  get asuntoNoValido(){
    return this.formulario.get('asunto')?.invalid && this.formulario.get('asunto')?.touched;
  }

  get mensajeNoValido(){
    return this.formulario.get('mensaje')?.invalid && this.formulario.get('mensaje')?.touched;
  }

  guardarDatos():any {
    if(this.formulario.invalid){

      Object.values(this.formulario.controls).forEach(control=>{
        control.markAsTouched();
      })

      return;

    }

    this.error = false;

    let contacto = {
      id: 0,
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
      leido: 'N'
    }

    this.apiService.sendContactenos(this.formulario.value.nombre, this.formulario.value.email, this.formulario.value.asunto, this.formulario.value.mensaje, this.leido).subscribe((response) => {
      console.log(response)
      contacto = JSON.parse(JSON.stringify(response));
      console.log(contacto);
      if(contacto.id==0){
        this.error = true;
      }
      else{
        this.error = false;
        this.enviado = true;
      }
    });
  }
}
