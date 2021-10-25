import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myid:number;
  username:string='';
  status:string='';
  constructor(private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.queryParamMap
    .subscribe((param)=>{

      console.log("Id is :: "+param.get("id"));

      this.myid=+param.get("id");
      this.username=param.get("name");
      this.status=param.get("status");

    })
  }

}
