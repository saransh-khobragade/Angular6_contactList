import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  contactArr=[]

  constructor(private data:DataService) { }

  ngOnInit() {
    this.contactArr=[]

    for(let usr in this.data.getContactList()){
      this.contactArr.push(this.data.getContactList()[usr])
    }
    
  }

  deleteUser(name){
    this.data.deleteUser(name)
    this.ngOnInit()
  }

}
