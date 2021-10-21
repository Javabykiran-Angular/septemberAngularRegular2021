import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any[]=[];

  id;
  title:string='';
  body:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit() {
  this.getAllPost();
  }
getAllPost(){
  this.service.getPost()
  .subscribe((response)=>{
    console.log(response);
    this.post=(<any> response);

  },(error)=>{
    alert("Server not Available");
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

onEdit(item){
console.log(item);
  this.id=item.id;
  this.title=item.title;
  this.body=item.body;
  this.isHidden=false;

}

OnUpdate(){
  let obj={
    id:this.id,
    title:this.title,
    body:this.body
  }

    this.service.UpdatePostData(obj)
    .subscribe((response)=>{
      console.log(response);
    })
}

onDelete(id){

  this.service.DeletePostData(id)
  .subscribe((response)=>{
    console.log(response)
  })

}


}
