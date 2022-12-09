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
  // constructor(private route:Router){}

  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    // console.log(data)

    // if (this.email=="email123" && this.password=="1234") {
    //   alert("Valid login")
    //   this.route.navigate(['/usersearch'])
      
    // } else {
    //   alert("Invalid credential")
      
    // }
   this.api.userLogin(data).subscribe(
    (response:any)=>
    {
      this.email=""
      this.password=""
      if(response.status=="success")
      {
        let userId=response.userId
        console.log(userId)
        localStorage.setItem("userInfo",userId)
        this.route.navigate(["/viewprofile"])
      }
      else
      {
        alert(response.message)
      }
    }
   )
  }

}
