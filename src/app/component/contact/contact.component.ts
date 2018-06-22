import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name;
  email;
  message;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onEvent(){
    console.log(this.name)
    console.log(this.email)
    console.log(this.message)
    this.router.navigate(['event'],{queryParams:{name: this.name,email:this.email,message:this.message}}) 
  
  }
  
}
