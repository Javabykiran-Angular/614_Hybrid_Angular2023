import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core Java','Advanced java','HTML,CSS','Spring Boot','Hibernate','Angular 12','AWS','Docker'];

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

  selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("mouse over Event is called....");
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("============= Mouse Out Event Occur...");
    this.selected='';
  }

}
