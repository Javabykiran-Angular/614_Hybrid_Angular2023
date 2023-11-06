import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

    strMessage:string='Hopes so u R enjoying This Session..';

    jsonObj={
      id:9,
      fname:'Sumit',
      lname:'Raokhande'
    }
    num1!:number;

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.num1=9;
  }

}
