import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {

  studentData:any[]=[];

  constructor(private service :HttpService) { }

  ngOnInit(): void {
    this.service.getStudentRecord()
    .subscribe((response:any)=>{
      console.log(response);
      this.studentData=response;
    })
  }

}
