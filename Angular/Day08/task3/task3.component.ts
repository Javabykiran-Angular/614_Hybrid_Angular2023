import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  myclass:string='';
  isApply:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onbtn(){
    // this.myclass='btnCss';
    // this.isApply=true;
    this.isApply=!this.isApply;
  }

}
