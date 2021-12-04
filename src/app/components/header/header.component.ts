import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { SesionService } from 'src/app/servicios/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  location: Location;
  constructor(location: Location, public sesionService:SesionService) {
    this.location = location;
  }

  ngOnInit(): void {
  }

}
