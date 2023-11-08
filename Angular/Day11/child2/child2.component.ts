import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 @Output() childStrEvent=new EventEmitter();

 @Output() childArrObjEvent=new EventEmitter();

 strMessage:string='Hopes so U r Njoy This Angular Session....';

 arrObj=[
  {
    name:'Samsung',
    price:25000,
    qty:1
  },
  {
    name:'Apple',
    price:65000,
    qty:1
  },
  {
    name:'Realme',
    price:18000,
    qty:1
  },
  {
    name:'Motorolla',
    price:30000,
    qty:1
  }
];


  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrEvent.emit(this.strMessage);
    this.childArrObjEvent.emit(this.arrObj);
  }

}
