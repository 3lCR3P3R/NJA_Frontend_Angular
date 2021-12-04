import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  constructor(private titleService:Title, public sesionService:SesionService) {
    this.titleService.setTitle("NJA - Quienes Somos");
  }

  ngOnInit(): void {
  }

}
