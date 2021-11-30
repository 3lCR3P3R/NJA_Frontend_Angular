import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("NJA - Productos");
  }

  ngOnInit(): void {
  }

}
