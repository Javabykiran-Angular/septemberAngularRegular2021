import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string="sumit Raokhande";
  status:boolean=true;
  imgUrl:string='../../assets/bg.jpeg';
  constructor() { }

  ngOnInit() {
  }

}
