import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  fname;
  lname;
  age;
  gender;
  date;
  departure;
  arrival;
  time;
  email;
  constructor(private router: Router) { }

  ngOnInit() {
  }
onBook(){
  this.router.navigate(['form'],{queryParams:{fname:this.fname,lname:this.lname,age:this.age,gender:this.gender,date:this.date,arrival:this.arrival,departure:this.departure,email:this.email,time:this.time}}) 
}
}
