import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 @Input() fname;
 @Input() lname;
 @Input() age;
 @Input() gender;
 @Input() date;
 @Input() departure;
 @Input() arrival;
 @Input() time;
 @Input() email;

  constructor(
    
    private router: Router) { }

  ngOnInit() {
  }
 
  onLogin(){
    console.log(this.fname);
    console.log(this.lname);
    console.log(this.age);
    console.log(this.gender);
    console.log(this.date);
    console.log(this.email);
    console.log(this.departure);
    console.log(this.arrival);
    console.log(this.time);
    
    this.router.navigate(['details'],{queryParams:{fname:this.fname,lname:this.lname,age:this.age,gender:this.gender,date:this.date,arrival:this.arrival,departure:this.departure,email:this.email,time:this.time}}) 
  } 
}

