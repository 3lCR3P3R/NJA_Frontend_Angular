import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:any[] = [];
  categoriasResponse:any[] = [];

  constructor(private apiService:ApiService, public sesionService:SesionService) {
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

  ngOnInit(): void {
  }

}
