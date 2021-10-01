import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=21;

  myjson={
    color:"blue",
    fontStyle:"italic",
    "font-family":"Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
    fontWeight:"52px",
    "font-size":"32px"
  }

  constructor() { }

  ngOnInit() {
  }

}
