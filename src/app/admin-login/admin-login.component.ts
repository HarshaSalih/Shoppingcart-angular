import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""

  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    if (this.username=="admin" && this.password=="12345") {
      alert("Valid login")
      
    } else {
      alert("Invalid credential")
      
    }
  }

}
