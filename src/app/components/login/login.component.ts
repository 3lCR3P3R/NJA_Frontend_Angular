import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  error:boolean =  false;
  enviado:boolean = false;

  constructor(private formBuilder:FormBuilder, private titleService:Title, private apiService:ApiService, public sesionService:SesionService, private router:Router) {
    this.titleService.setTitle("NJA - Login");

    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get usuarioNoValido(){
    return this.formulario.get('usuario')?.invalid && this.formulario.get('usuario')?.touched;
  }

  get passwordNoValido(){
    return this.formulario.get('password')?.invalid && this.formulario.get('password')?.touched;
  }


  verificarDatos():any {
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
      rol: 2,
      token: ''
    }

    this.apiService.login(this.formulario.value.usuario, this.formulario.value.password).subscribe((response) => {

      usuario = JSON.parse(JSON.stringify(response));
      if(usuario.id==null){
        this.error = true;
      }
      else{
        if(Number.isInteger(usuario.id)){
          //guardar datos de la sesion en el localstorage
          this.error = false;
          console.log(usuario);
          this.sesionService.setUsuario(usuario);

          this.router.navigate(['/inicio'])
        }
        else{
          this.error = true;
        }
      }
    });
  }

}
