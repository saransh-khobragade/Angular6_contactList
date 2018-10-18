import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private data:DataService,private route:Router) { }

  ngOnInit() {
  }

  addUser(myform){
    if(this.data.setContactDetails(myform.value))
      this.route.navigate(['/contacts'])
  }
}
