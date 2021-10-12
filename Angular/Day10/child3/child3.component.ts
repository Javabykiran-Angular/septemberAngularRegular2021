import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  @Output()  EventInChild=new EventEmitter();

id:number=9;

  constructor() { }

  ngOnInit() {
  }

  onChildSend(){
        this.EventInChild.emit(this.id);
  }

}
