import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparamter',
  templateUrl: './queryparamter.component.html',
  styleUrls: ['./queryparamter.component.css']
})
export class QueryparamterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
      this.route.queryParamMap
      .subscribe((param)=>{
        console.log(param.get("id"));
        console.log(param.get("fname"));
        console.log(param.get("lname"));
      })
  }

}
