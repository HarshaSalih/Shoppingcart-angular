import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  
  fetchProduct=()=>
  {
    return this.http.get("")
  }

  addProduct=(dataToSend:any)=>
  {
    return this.http.post("",dataToSend)
  }

  searchProduct=(dataToSend:any)=>
  {
    return this.http.post("",dataToSend)
  }
}
