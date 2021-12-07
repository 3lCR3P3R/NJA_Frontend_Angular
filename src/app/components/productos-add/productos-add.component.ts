import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.component.html',
  styleUrls: ['./productos-add.component.css']
})
export class ProductosAddComponent implements OnInit {

  formulario: FormGroup;

  error:boolean =  false;
  enviado:boolean = false;

  categorias:any[] = [];
  categoriasResponse:any[] = [];
  imagenes:any[] = [{nombre: "default", valor: "default.png"},
    {nombre: "Camisa Roja", valor: "producto1.jpg"},
    {nombre: "Camisa Cafe", valor: "producto2.png"},
    {nombre: "Vestido", valor: "producto3.jpg"},
    {nombre: "Pantalon", valor: "producto4.jpg"}
  ];

  constructor(private formBuilder:FormBuilder, private titleService:Title, private apiService:ApiService, public sesionService:SesionService, private router:Router) {
    this.titleService.setTitle("NJA - Vender un Producto");

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      marca: ['', Validators.required],
      color: ['', Validators.required],
      precio: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: ['', Validators.required],
      imagen: ['', Validators.required],
      descripcion: ['', Validators.required],
    });

    this.apiService.getCategorias().subscribe((response) => {
      this.categoriasResponse = JSON.parse(JSON.stringify(response));

      // console.log("response");
      // console.log(this.categoriasResponse);

      this.categoriasResponse.forEach((categoria) => {
        if (categoria.activo == "S") this.categorias.push(categoria);
      });
      // console.log("categorias");
      // console.log(this.categorias);
    });
  }

  get nombreNoValido(){
    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched;
  }

  get marcaNoValido(){
    return this.formulario.get('marca')?.invalid && this.formulario.get('marca')?.touched;
  }

  get colorNoValido(){
    return this.formulario.get('color')?.invalid && this.formulario.get('color')?.touched;
  }

  get precioNoValido(){
    return this.formulario.get('precio')?.invalid && this.formulario.get('precio')?.touched;
  }

  get categoriaNoValido(){
    return this.formulario.get('categoria')?.invalid && this.formulario.get('categoria')?.touched;
  }

  get cantidadNoValido(){
    return this.formulario.get('cantidad')?.invalid && this.formulario.get('cantidad')?.touched;
  }

  get imagenNoValido(){
    return this.formulario.get('imagen')?.invalid && this.formulario.get('imagen')?.touched;
  }

  get descripcionNoValido(){
    return this.formulario.get('descripcion')?.invalid && this.formulario.get('descripcion')?.touched;
  }

  ngOnInit(): void {
  }

  agregarProducto(){
    if(this.formulario.invalid){
      Object.values(this.formulario.controls).forEach(control=>{
        control.markAsTouched();
      })

      return;
    }
    this.error = false;

    let producto ={
      id: 0,
      activo: "S"
    }

    this.apiService.addProducto(this.formulario.value.nombre, this.formulario.value.marca, this.formulario.value.color, this.formulario.value.precio, this.formulario.value.categoria, this.formulario.value.cantidad, this.formulario.value.imagen, this.formulario.value.descripcion).subscribe((response) => {
      console.log(response)
      producto = JSON.parse(JSON.stringify(response));
      console.log(producto);

      if(producto.id == 0) {
        this.error = true;
      }
      else{
        this.error = false;
        this.enviado = true;
        this.router.navigate(['/productos-list']);
      }
    });
  }

}
