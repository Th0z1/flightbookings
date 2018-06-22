import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() name;
  @Input() page;
  @Input() fname;
  @Input() lname;
  @Input() age;
  @Input() gender;
  @Input() date;
  @Input() departure;
  @Input() arrival;
  @Input() time;
  @Input() email;
 
  constructor(private router:Router) { }

  ngOnInit() {
    }
navigator(){
if(this.name=== 'event'){
  this.router.navigate(['details/event'])
}else if (this.name==='view'){
  
this.router.navigate(['details/view'],{queryParams:{fname:this.fname,lname:this.lname,age:this.age,gender:this.gender,date:this.date,departure:this.departure,arrival:this.arrival,time:this.time,email:this.email}})
}
}}