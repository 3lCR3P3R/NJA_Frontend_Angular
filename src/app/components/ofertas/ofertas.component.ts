import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: "app-ofertas",
  templateUrl: "./ofertas.component.html",
  styleUrls: ["./ofertas.component.css"],
})
export class OfertasComponent implements OnInit {

  ofertas:any[] = [];
  ofertasResponse:any[] = [];

  // date = new Date();
  // year = this.date.getFullYear();
  // month = this.date.getMonth();
  // day = this.date.getDate();
  // hoy = "";

  constructor(private titleService: Title, private apiService:ApiService) {
    this.titleService.setTitle("NJA - Ofertas");

    // this.hoy = `${this.year}-${this.month}-${this.day}`;
    // console.log(this.hoy);

    this.apiService.getOfertas().subscribe((response) => {
      this.ofertasResponse = JSON.parse(JSON.stringify(response));

      // console.log("response");
      // console.log(this.ofertasResponse);

      this.ofertasResponse.forEach((oferta) => {
        if (oferta.activo == "S" && oferta.cantidad > 0) this.ofertas.push(oferta);
      });
      // console.log("ofertas");
      // console.log(this.ofertas);
    });
  }

  ngOnInit(): void {
  }

}
