import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onSquare(num:any){
    let n1=+num;
    // this.result=num*num;
    this.result=n1*n1;
  }

  onCube(num:any){
    let n1=+num;
    this.result=n1*n1*n1;
  }

}
