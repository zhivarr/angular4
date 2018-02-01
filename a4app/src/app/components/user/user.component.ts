import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean;

  constructor(private dataService:DataService) {
    console.log('constructor ...');

   }

  ngOnInit() {
    console.log('ng init ...');
    this.name = 'John Doe';
    this.age=25;
    this.email='zzz@ggg.com'
    this.address = {
      street:'123 sample st',
      state:'FL',
      city:'Jacksonville'
    }
    this.hobbies = ['write code','watch movies'];
    this.isEdit=false;
    this.dataService.getPosts().subscribe((posts)=>{
      this.posts = posts;
    })
  }

  onClick(){
    //this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i=0;i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
          this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address 
{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: string
}