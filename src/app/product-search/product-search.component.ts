import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  constructor(private api:ApiService){}

  name=""
  searchData:any=[]

  readValues=()=>
  {
    let data:any={"name":this.name}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("Invalid product name")
          
        } else {
          this.searchData=response
          
        }
      }
    )

  }



}
