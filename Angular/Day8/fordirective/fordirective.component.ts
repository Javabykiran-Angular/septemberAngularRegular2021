import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','react js','Vue js','Embber Js','JSP'];

  selected:string='';
  arrobj:any[]=[
    {
      name:'Samsung',
      price:16000,
      id:1
    },
    {
      name:'Motorola',
      price:29999,
      id:2
    },
    {
      name:'Realme',
      price:20999,
      id:3
    },
    {
      name:'Oneplus',
      price:39999,
      id:4
    }
  ];

  onMouserOver(item){
    // console.log("onMouserOver Event Occur....");
    this.selected=item.name;
  }

  onMouseout(){
    // console.log("Out Event Occur..")
    this.selected='';
  }

  constructor() { }

  ngOnInit() {
  }

}
