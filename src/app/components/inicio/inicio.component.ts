import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"],
})

export class InicioComponent {
  constructor(private titleService: Title, public sesionService:SesionService) {
    this.titleService.setTitle("N'T Just Aesthetics - NJA");
  }
}
