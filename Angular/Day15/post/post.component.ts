import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any[]=[];
  constructor(private service:HttpService) { }

  ngOnInit() {
  this.getAllPost();
  }
getAllPost(){
  this.service.getPost()
  .subscribe((response)=>{
    console.log(response);
    this.post=(<any> response);

  })
}


onSend(inputTitle,inputBody){
let jsonObj={
  title:inputTitle,
  body:inputBody
}

this.service.PostData(jsonObj)
.subscribe((response)=>{
  console.log(response);
})

}


}
