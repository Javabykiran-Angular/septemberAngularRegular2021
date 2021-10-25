import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe((param)=>{
      console.log("Id is "+param.get("id"));
      console.log("My Username is "+param.get("username"));
    })
  }

}
