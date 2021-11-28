import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {
  title = 'contador';
  name = "";
  email = "";
  asunto = "";
  message = "";

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

    fetch("http://localhost:8080/api/contactanos", {
      "body": JSON.stringify({
        "message": this.message,
        "asunto": this.asunto,
        "name": this.name,
        "email": this.email
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
