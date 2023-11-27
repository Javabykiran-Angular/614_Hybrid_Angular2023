import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url:string ="http://localhost:8080/api/student";

  constructor(private http:HttpClient) { }

    getStudentRecord(){
      return this.http.get(this.url);
    }


}
