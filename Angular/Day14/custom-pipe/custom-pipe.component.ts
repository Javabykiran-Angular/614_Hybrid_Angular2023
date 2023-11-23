import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque voluptatem delectus nam unde ducimus eius cumque temporibus blanditiis, quibusdam repellat tenetur excepturi reprehenderit beatae, hic quae suscipit autem inventore!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda atque voluptatem delectus nam unde ducimus eius cumque temporibus blanditiis, quibusdam repellat tenetur excepturi reprehenderit beatae, hic quae suscipit autem inventore!'
  constructor() { }

  ngOnInit(): void {
  }

}
