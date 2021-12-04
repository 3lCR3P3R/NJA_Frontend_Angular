import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public sesionService:SesionService) { }

  ngOnInit(): void {
  }

}
