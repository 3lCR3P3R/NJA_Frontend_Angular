import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-productos-categoria',
  templateUrl: './productos-categoria.component.html',
  styleUrls: ['./productos-categoria.component.css']
})
export class ProductosCategoriaComponent implements OnInit {


  productos:any[] = [];
  productosResponse:any[] = [];
  categoria:string = "";

  constructor(private activateRoute:ActivatedRoute, private apiService:ApiService) {

    this.activateRoute.params.subscribe(parametros => {
      this.categoria = parametros["categoria"];

      console.log(parametros);

      this.apiService.getProductosCategoria(this.categoria).subscribe((response) => {
        this.productosResponse = JSON.parse(JSON.stringify(response));

        console.log("response");
        console.log(this.productosResponse);

        this.productosResponse.forEach((producto) => {
          console.log("producto");
          if (producto.activo == "S" && producto.cantidad > 0) this.productos.push(producto);
        });
        console.log("productos");
        console.log(this.productos);
      });
    })

   }

  ngOnInit(): void {
  }

}
