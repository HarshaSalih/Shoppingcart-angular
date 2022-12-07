import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response)=>
      {
        this.product=response;
      }
    )
  }


  product:any=[]

}
