import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
  counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  
  onClick(){    
   
    if(this.counter==0){
      console.log("click event Occur...");
      this.counter++; 
    }
    
  }

  onImage(){
    console.log("on Image click occur...")
  }

  ondollerInfo(myevent:any){
    // console.log(myevent)
    console.log("Data is => "+myevent.target.value);
  }

  onSend(myname:any){
    console.log(myname)
    console.log("===> "+myname.value)

    myname.style.background='green';
    myname.style.color='white';

  }

  onSend1(dataValue:any){
    console.log(dataValue);
  }

}
