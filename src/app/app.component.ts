import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "NJA";

  constructor(private titleService: Title, public sesionService:SesionService) {
    this.titleService.setTitle("N'T Just Aesthetics - NJA");
  }
}
