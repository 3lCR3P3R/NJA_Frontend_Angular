import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/"

  constructor(private httpCliente:HttpClient) { }

  login(username:string, password:string) {
    const peticion = `${this.url}usuarios/login`;

    const usuario:any = {
      "usuario": username,
      password
    };

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.post(peticion, usuario, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  addUsuario(username:string, correo:string, telefono:number, password:string){

    const peticion = `${this.url}usuarios/registrar`;

    const usuario:any = {
      "usuario": username,
      password,
      correo,
      telefono,
      "rol": 1,
      "activo": "S"
    };

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.post(peticion, usuario, {headers}).pipe(map((data:any) => {
      return data;
    }));
  }

  getCategorias() {
    const peticion = `${this.url}categorias`;

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.get(peticion, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  getOfertas() {
    const peticion = `${this.url}ofertas`;

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.get(peticion, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  getProductos() {
    const peticion = `${this.url}productos`;

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.get(peticion, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  getProductosCategoria(categoria:string) {
    const peticion = `${this.url}productos/cat/${categoria}`;

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.get(peticion, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  sendContactenos(nombre:string, email:string, asunto:string, mensaje:string, leido:string) {

    const peticion = `${this.url}contactenos`;

    const contacto:any = {
      nombre,
      email,
      asunto,
      mensaje,
      leido
    }

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.post(peticion, contacto, {headers})
    .pipe(map((data:any) => {
      return data;
    }));
  }
}
