import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbildpipe',
  templateUrl: './inbildpipe.component.html',
  styleUrls: ['./inbildpipe.component.css']
})
export class InbildpipeComponent implements OnInit {

  strData:string='U are learn Angular 12 hopes so U are understand from Sumit raokhande Trainer';

  num2:number=-452.78956324557;
  mydate=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
