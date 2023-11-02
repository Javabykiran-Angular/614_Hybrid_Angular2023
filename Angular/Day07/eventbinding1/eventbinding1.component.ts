import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {

  res:number=0;

  adds:number=0;
  name:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

      // this.res=num1+num2;
      this.res=n1+n2;

  }

  onChange(kuchbhi:any){
    console.log("Change Event Occur");
    console.log(kuchbhi);    
  }

  onKeyUp(){
    console.log("Key Up event occur...")
  }

  onKeyDown(mydata:string){
    // console.log("key down event occur....")
    console.log(mydata)
  }


}
