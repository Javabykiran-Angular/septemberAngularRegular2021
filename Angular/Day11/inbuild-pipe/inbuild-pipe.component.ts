import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strdetails:string="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur corporis, asperiores tempore, quis enim debitis at accusamus perferendis deserunt placeat quae distinctio reiciendis sapiente saepe. Impedit voluptatum a ea nobis.";

num2:number=650.678456;

mydate=new Date();
  constructor() { }

  ngOnInit() {
  }

}
