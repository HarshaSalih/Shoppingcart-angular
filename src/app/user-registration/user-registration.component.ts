import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  name=""
  address=""
  phone=""
  email=""
  password=""
  confirmpassword=""

  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
    console.log(data)
    this.api.userRegister(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("User added successfully")
          this.name=""
          this.address=""
          this.phone=""
          this.email=""
          this.password=""
          this.confirmpassword
        }
        else{
          alert("Something went wrong")
        }
      }
    )

  }

}
