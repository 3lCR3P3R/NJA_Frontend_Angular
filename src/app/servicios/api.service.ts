import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:8080/"

  constructor(private httpCliente:HttpClient, private sesionService: SesionService) { }

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

  addUsuario(username:string, correo:string, password:string) {
    const peticion = `${this.url}usuarios/registrar`;

    const usuario:any = {
      "usuario": username,
      password,
      correo,
      "rol": 2,
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
    const peticion = `${this.url}productos/sf`;

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.get(peticion, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  getProductosCategoria(categoria:string) {
    const peticion = `${this.url}productos/sf/categoria/${categoria}`;

    const headers:HttpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset="utf-8"'});

    return this.httpCliente.get(peticion, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  addProducto(nombre:string, marca:string, color:string, precio:number, categoria:string, cantidad:number, imagen:string, descripcion:string) {
    const peticion = `${this.url}productos/cf`;

    const producto:any = {
      "id": 0,
      "usuario": {
        "id": this.sesionService.getUsuario().id
      },
      nombre,
      marca,
      color,
      precio,
      categoria,
      cantidad,
      imagen,
      descripcion,
      "activo": "S",
    }

    const headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    });

    return this.httpCliente.post(peticion, producto, {headers}).pipe(map((data:any) => {
      return data;
    }));
  }

  getProductosUsuario() {
    const peticion = `${this.url}productos/cf/usuario`;

    const usuario:any = {
      id: this.sesionService.getUsuario().id,
      "usuario": "",
      password: "",
      correo: "",
      "rol": 0,
      "activo": ""
    };

    const headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    });

    return this.httpCliente.post(peticion, usuario, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  getProductoUsuario(id:number) {
    const peticion = `${this.url}productos/cf/${id}/usuario`;

    const usuario:any = {
      id: this.sesionService.getUsuario().id,
      "usuario": "",
      password: "",
      correo: "",
      "rol": 0,
      "activo": ""
    };

    const headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    });

    return this.httpCliente.post(peticion, usuario, { headers }).pipe(map((data:any) => {
      return data;
    }));
  }

  updateProducto(producto:any) {
    const peticion = `${this.url}productos/cf`;

    const headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="utf-8"',
      'Authorization': 'Bearer '+this.sesionService.getUsuario().token
    });

    return this.httpCliente.post(peticion, producto, { headers }).pipe(map((data:any) => {
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
