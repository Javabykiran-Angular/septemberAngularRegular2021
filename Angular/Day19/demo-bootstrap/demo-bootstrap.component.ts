import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  arrobj=[
    {
      name:"Sumit",
      role:'Developer'
    },
    {
      name:"Kiran",
      role:'Marketing'
    },
    {
      name:"Spruha",
      role:'Admin'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
