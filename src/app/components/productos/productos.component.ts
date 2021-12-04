import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any[] = [];
  productosResponse:any[] = [];

  constructor(private titleService:Title, private apiService:ApiService, public sesionService:SesionService) {
    this.titleService.setTitle("NJA - Productos");

    this.apiService.getProductos().subscribe((response) => {
      this.productosResponse = JSON.parse(JSON.stringify(response));

      // console.log("response");
      // console.log(this.productosResponse);

      this.productosResponse.forEach((producto) => {
        if (producto.activo == "S" && producto.cantidad > 0) this.productos.push(producto);
      });
      // console.log("productos");
      // console.log(this.productos);
    });
   }

  ngOnInit(): void {
  }

}
