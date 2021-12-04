import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import {Title} from "@angular/platform-browser";
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  constructor(private titleService:Title, private apiService:ApiService,public sesionService:SesionService) {
    this.titleService.setTitle("NJA - Vender");
  }

  ngOnInit(): void {
  }

}
