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

    saveStudentRecord(obj:any){
      return this.http.post(this.url,obj);
    }

    UpdateRecord(obj:any){
        return (this.http.put(`${this.url}/${obj.id}`,obj));
    }

    deletRecord(id:any){
      return  (this.http.delete(`${this.url}/${id}`));
    }


}
