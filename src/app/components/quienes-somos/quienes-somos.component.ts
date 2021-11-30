import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("NJA - Quienes Somos");
  }

  ngOnInit(): void {
  }

}
