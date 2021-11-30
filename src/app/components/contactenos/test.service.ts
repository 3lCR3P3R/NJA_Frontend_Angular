import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient){

  }
   send(data:any){
    this.http.post<any> ("http://localhost:8080/nja/api/v1/contactenos", data)
  }
}
