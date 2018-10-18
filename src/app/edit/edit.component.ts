import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  FirstName:string
  LastName:string
  Email:string
  Phone:string

  name:string
  user={}
  private subscription:Subscription;

  constructor(activatedRoute:ActivatedRoute,private data:DataService,private route:Router) { 
    this.subscription=activatedRoute.params.subscribe(
      (param:any) => {
        this.name=param['name']
   
        this.FirstName=data.getContactDetails(this.name).FirstName
        this.LastName=data.getContactDetails(this.name).LastName
        this.Email=data.getContactDetails(this.name).Email
        this.Phone=data.getContactDetails(this.name).Phone
       
      }
    );
  }

  ngOnInit() {
  }

  updateForm(myform){
    if(this.data.updateContactDetails(this.name,myform.value))
    this.route.navigate(['/contacts'])
  }

}
