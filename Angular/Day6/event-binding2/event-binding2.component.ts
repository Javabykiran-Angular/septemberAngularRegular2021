import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding2',
  templateUrl: './event-binding2.component.html',
  styleUrls: ['./event-binding2.component.css']
})
export class EventBinding2Component implements OnInit {
result:number=0;
name:string;
  constructor() { }

  ngOnInit() {
  }
  onAddition(num1,num2){
    console.log(num1+" & "+num2);
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;
  }

  onKeyUp(){
    console.log("Key Up Event Occur....");
  }

  onKeyDown(){
    console.log("Key Down Event Occur....");
  }

}
