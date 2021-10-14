import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strdetails:string="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nam iste cumque aspernatur. Dolore quidem harum debitis! Hic, magni nemo corrupti placeat et deserunt rem iusto accusamus voluptate, ea quam!";
  
  constructor() { }

  ngOnInit() {
  }

}
