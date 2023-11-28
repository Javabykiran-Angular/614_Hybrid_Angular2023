import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {

  studentData:any[]=[];
  isHidden:boolean=true;
  myid:any;
  myname:any;
  myphoneno:any;

  constructor(private service :HttpService) { }

  ngOnInit(): void {
    this.getRecord();
  }

  getRecord(){
    this.service.getStudentRecord()
    .subscribe((response:any)=>{
      console.log(response);
      this.studentData=response;
    },(myerror)=>{
      alert("Error Occured...")
    });
  }


  onSubmit(name:any,no:any){

    let createdate=new Date();

    let obj={
      name:name,
      phoneno:no,
      createddate:createdate
    }
    this.service.saveStudentRecord(obj)
    .subscribe((response)=>{
        console.log(response);
        this.getRecord();
    })

  }

  onEdit(item:any){
    this.isHidden=false;
    console.log(item)
    this.myid=item.id;
    this.myname=item.name;
    this.myphoneno=item.phoneno;
  }

  onupdate(){

      let obj={
        id:this.myid,
        name:this.myname,
        phoneno:this.myphoneno,

      }

      this.service.UpdateRecord(obj)
      .subscribe((response)=>{
        console.log(response);
        this.getRecord();
        this.isHidden=true;
      });

  }

  onDelete(id:any){
      this.service.deletRecord(id)
      .subscribe((response)=>{
        alert("Record deleted Successfully...")
        console.log(response);
        this.getRecord();
      })
  }

}
