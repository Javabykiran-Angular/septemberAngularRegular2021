import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Data From Parent....';
  
  jsonObj={
    id:9,
    name:'Sumit',
    status:true
  }

  mycolor:string='';

  mycolor1:string='';
  
  num1:number;

  constructor() { }

  ngOnInit() {
  }

  onSend(){
    this.num1=8;
  }

  onSubmit(){
    this.mycolor1=this.mycolor;
  }

}
