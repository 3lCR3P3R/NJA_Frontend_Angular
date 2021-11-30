import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {
  title = 'contador';
  name:String = "";
  email:String = "";
  asunto:String = "";
  message:String = "";
  leido:String = "N";

  constructor(private titleService:Title) {
    this.titleService.setTitle("NJA - Contactenos");
  }

  keyUpName(event: any) {
    this.name = event.target.value;
  }

  keyUpEmail(event: any) {
    this.email = event.target.value;
  }

  keyUpAsunto(event: any) {
    this.asunto = event.target.value;
  }

  keyUpMessage(event: any) {
    this.message = event.target.value;
  }

  send() {

    fetch("http://localhost:8080/contactenos", {
      "body": JSON.stringify({
        "mensaje": this.message,
        "asunto": this.asunto,
        "nombre": this.name,
        "email": this.email,
        "leido": this.leido
      }),
      "headers": { "Content-Type": "application/json" },
      "method": "POST",
      "mode": "cors"
    }).then(response => {
      if (response.ok) {
        response.json().then(customer => {
          console.log(customer);
        }).catch(error => {
          console.log(error);
        });
      } else {
        console.log(1);
      }
    }).catch(error => {
      console.log(error);
    });
  }
}
