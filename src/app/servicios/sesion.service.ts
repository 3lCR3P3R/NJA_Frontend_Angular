import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private usuario: Usuario = {
    id: 0,
    usuario: '',
    password: '',
    correo: '',
    rol: 0,
    token: ''
  };

  constructor() {
    this.leerStorage();
  }

  getUsuario(): Usuario{
    return this.usuario;
  }

  setUsuario(usuario: Usuario):void{
    this.usuario = usuario;
    this.guardarStorage();
  }

  resetUsuario():void{
    this.usuario = {
      id: 0,
      usuario: '',
      password: '',
      correo: '',
      rol: 0,
      token: ''
    };
    this.guardarStorage();
  }


  guardarStorage():void{
    sessionStorage.setItem("usuario", JSON.stringify(this.usuario));
  }

  leerStorage():void{
    if(sessionStorage.getItem("usuario")){
      let datos = sessionStorage.getItem("usuario");
      this.usuario = JSON.parse(JSON.stringify(datos));
    }
  }
}
