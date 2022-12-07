import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

   name=""
   image=""
   category=""
   description=""
   price=""

   constructor(private api:ApiService){}


   readValues=()=>
   {
    let data:any={"name":this.name,"image":this.image,"category":this.category,"description":this.description,"price":this.price}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success")
        {
          alert("Product added successfully")
          this.name=""
          this.image=""
          this.description=""
          this.category=""
          this.price=""
        }
        else{
          alert("Something went wrong")
        }
      }
    )
   }

}
