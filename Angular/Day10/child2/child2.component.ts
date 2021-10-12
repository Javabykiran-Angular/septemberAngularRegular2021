import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() ChildstrEvent=new EventEmitter();

  @Output() ChildJsonEvent=new EventEmitter();

  strdata:string='Data From Child....';

  jsonObj={
    id:9,
    name:'Sumit',
    status:true
  }

  constructor() { }

  ngOnInit() {
  }

  onSend(){
        this.ChildstrEvent.emit(this.strdata);
        this.ChildJsonEvent.emit(this.jsonObj);
  }

}
