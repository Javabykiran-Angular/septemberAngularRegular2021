import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {

  flag:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.flag){
      console.log("Click Event Occur...");
      this.flag=false;
    }
    
  }

  onImage(){
    console.log("On Image Click...");
  }

  onSend(myevent){
    console.log(myevent);
    console.log("data is "+myevent.target.value)
  }

  onSend1(myinput){
    console.log(myinput);
    console.log("Data is :: "+myinput.value)
  }

  onSend2(myinput){
    console.log("Value is "+myinput);
  }

  onChange(myinput){
    console.log("Change Event Occur..");
    myinput.style.background='red';
    myinput.style.color='white';
  }

}
