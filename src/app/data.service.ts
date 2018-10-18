import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //---------mock objects and mock api response has been done,api calls are commented--------//

  contactArr={
    "Saransh":{
      FirstName:"Saransh",
      LastName:"Khobragade",
      Email:"Saransh98@gmail.com",
      Phone:"9893203938",
      Status:"Active"
    },
    "Srishti":{
      FirstName:"Srishti",
      LastName:"Khobragade",
      Email:"Saransh98@gmail.com",
      Phone:"9893203938",
      Status:"Active"
    },
    "Kirti":{
      FirstName:"Kirti",
      LastName:"Khobragade",
      Email:"Saransh98@gmail.com",
      Phone:"9893203938",
      Status:"Active"
    },
    "Milind":{
      FirstName:"Milind",
      LastName:"Khobragade",
      Email:"Saransh98@gmail.com",
      Phone:"9893203938",
      Status:"Active"
    }
  }
    
  constructor(private http:HttpClient) { }

  getContactList(){
    return this.contactArr;
    //return this.http.get('/api/getContactList',{ observe: 'response' });
  }
  getContactDetails(name:string){
    return this.contactArr[name];
    //return this.http.get('/api/getContactDetails',{ observe: 'response', params:{name:name}  });
  }

  setContactDetails(user){
    for(let usr in this.contactArr)
    {
      if(user.FirstName==="" || user.FirstName===undefined) {
        alert("Please input valid name")
        return false
      }
      if(usr===user.FirstName) {
        alert("User already exists with same name,plz try again")
        return false
      }
      
    }
    this.contactArr[user.FirstName]={
      FirstName:user.FirstName,
      LastName:user.LastName,
      Email:user.Email,
      Phone:user.Phone,
      Status:"Active"
    }
    
    //return this.http.post('/api/insert', {user}, { observe: 'response' });
  }
  updateContactDetails(name,user){
    this.contactArr[name].FirstName=user.FirstName;
    this.contactArr[name].LastName=user.LastName;
    this.contactArr[name].Email=user.Email;
    this.contactArr[name].Phone=user.Phone;
    return true

    //return this.http.put('/api/update', {user},{ observe: 'response', params:{name:name}  });
  }

  deleteUser(name){
    delete this.contactArr[name]

    //return this.http.delete('/api/delete',{params:{name:name}});
  }
}
