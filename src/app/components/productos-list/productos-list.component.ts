import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent implements OnInit {

  productos:any[] = [];

  constructor(private titleService:Title, private apiService:ApiService, private sesionService:SesionService, private router:Router) {
    this.titleService.setTitle("NJA - Mis Productos");

    this.apiService.getProductosUsuario().subscribe((response) => {
      this.productos = JSON.parse(JSON.stringify(response));

      console.log("productos");
      console.log(this.productos);
    });
  }

  ngOnInit(): void {
  }

}
