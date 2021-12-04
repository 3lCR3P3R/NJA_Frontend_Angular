import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;

  error:boolean =  false;
  enviado:boolean = false;

  constructor(private formBuilder:FormBuilder, private titleService:Title, private apiService:ApiService, public sesionService:SesionService, private router:Router) {
    this.titleService.setTitle("NJA - Registro");

    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get usuarioNoValido(){
    return this.formulario.get('usuario')?.invalid && this.formulario.get('usuario')?.touched;
  }

  get passwordNoValido(){
    return this.formulario.get('password')?.invalid && this.formulario.get('password')?.touched;
  }

  get emailNoValido(){
    return this.formulario.get('email')?.invalid && this.formulario.get('email')?.touched;
  }

  guardarDatos():any {
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control=>{
        control.markAsTouched();
      })

      return;
    }
    this.error = false;

    let usuario ={
      id: 0,
      usuario: '',
      password: '',
      correo: '',
    }

    this.apiService.addUsuario(this.formulario.value.usuario, this.formulario.value.email, this.formulario.value.password).subscribe((response) => {
      console.log(response)
      usuario = JSON.parse(JSON.stringify(response));
      console.log(usuario);
      if(usuario.id==0) {
        this.error = true;
      }
      else{
        this.error = false;
        this.enviado = true;
      }
    });
  }

}
