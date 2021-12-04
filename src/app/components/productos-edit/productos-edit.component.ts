import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Title} from "@angular/platform-browser";
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.css']
})
export class ProductosEditComponent implements OnInit {

  formulario: FormGroup;

  error:boolean =  false;
  enviado:boolean = false;

  producto: any = {};

  activado:string = "S";
  inactivo:string = "N";

  constructor(private formBuilder:FormBuilder, private titleService:Title, private activateRoute: ActivatedRoute, private sesionService: SesionService, private apiService: ApiService, private router: Router) {
    this.titleService.setTitle("NJA - Editar Producto");

    this.producto = {
      "id": 0,
      "usuario": {
        "id": this.sesionService.getUsuario().id
      },
      "nombre": "",
      "marca": "",
      "color": "",
      "precio": 0.0,
      "categoria": "",
      "cantidad": 0.0,
      "imagen": "",
      "descripcion": "",
      "activo": "",
    }

    this.formulario = this.formBuilder.group({
      precio: [this.producto.precio, Validators.required],
      cantidad: [this.producto.cantidad, Validators.required],
      activo: [this.producto.activo, Validators.required]
    });

    this.activateRoute.params.subscribe(parametros => {
      let id = parametros["id"];
      this.apiService.getProductoUsuario(id).subscribe((response) => {
        this.producto = JSON.parse(JSON.stringify(response));

        console.log(this.producto);

        this.formulario.setValue({
          precio: this.producto.precio,
          cantidad: this.producto.cantidad,
          activo: this.producto.activo
        });

        /*if(this.sesionService.getUsuario().id!=this.producto.usuario){
          this.router.navigate(['/productos-list']);
        }*/
      });
    });
  }

  ngOnInit(): void {}

  get precioNoValido(){
    return this.formulario.get('precio')?.invalid && this.formulario.get('precio')?.touched;
  }

  get cantidadNoValido(){
    return this.formulario.get('cantidad')?.invalid && this.formulario.get('cantidad')?.touched;
  }

  get activoNoValido(){
    return this.formulario.get('activo')?.invalid && this.formulario.get('activo')?.touched;
  }

  regresar(){
    this.router.navigate(['/productos-list']);
  }

  actualizarProducto(){

    this.producto.precio = parseInt(this.formulario.value.precio);
    this.producto.cantidad = parseInt(this.formulario.value.cantidad);
    this.producto.activo = this.formulario.value.activo;

    this.error = false;
    console.log(this.producto)
    this.apiService.updateProducto(this.producto).subscribe(response => {
      let respuesta = JSON.parse(JSON.stringify(response));

      console.log(respuesta)

      this.router.navigate(['/productos-list']);
    });

  }

}
