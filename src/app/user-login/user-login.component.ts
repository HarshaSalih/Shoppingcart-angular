import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email=""
  password=""
  

  constructor(private api:ApiService,private route:Router){}
  

  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    this.api.userLogin(data).subscribe(
    (response:any)=>
    {
      if(response.status=="success")
      {
        
        localStorage.setItem("userInfo",response.userId)
        this.route.navigate(["/viewprofile"])
      }
      else
      {
        alert("login failed")
      }
    }
   )
  }

}
