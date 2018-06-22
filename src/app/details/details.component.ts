import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() fname;
  @Input() lname;
  @Input() age;
  @Input() gender;
  @Input() date;
  @Input() departure;
  @Input() arrival;
  @Input() time;
  @Input() email;
 
  constructor(private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(data =>{
      this.fname=data['fname'];
      this.lname=data['lname'];
      this.age=data['age'];
      this.gender=data['gender'];
      this.date=data['date'];
      this.departure=data['departure'];
      this.arrival=data['arrival'];
      this.time=data['time'];
      this.email=data['email'];
      
 
    })}
  
 onLogin(){
   console.log(this.fname);
   console.log(this.lname);
   console.log(this.age);
   console.log(this.gender);
   console.log(this.date);
   console.log(this.departure);
   console.log(this.arrival);
   console.log(this.time);
   console.log(this.email);
   
  
 } 
 }
