import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-ofertas",
  templateUrl: "./ofertas.component.html",
  styleUrls: ["./ofertas.component.css"],
})
export class OfertasComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle("NJA - Ofertas");
  }

}
