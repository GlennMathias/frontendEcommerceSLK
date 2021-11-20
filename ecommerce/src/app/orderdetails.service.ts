import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  private baseUrl="http://localhost:8080/";
  constructor(private http: HttpClient) { }
  static currentOrderId :number=0;
  total :number;

  getCart():Observable<any>
  {
    return this.http.get(`${this.baseUrl+"viewCart/"+OrderdetailsService.currentOrderId}`);
  }

  addToCartService(prodId,qty):Observable<any>
  {
    console.log(`${this.baseUrl+"addCart/"+OrderdetailsService.currentOrderId+"/"+prodId+"/"+qty}`);
    
    return this.http.get(`${this.baseUrl+"addCart/"+OrderdetailsService.currentOrderId+"/"+prodId+"/"+qty}`);
  }

  createOrder()
  {
    
    this.http.get(`${this.baseUrl}/userLogin/${CustomerService.getActiveId()}`).subscribe((data)=>{OrderdetailsService.currentOrderId=Number(data);},
    (error)=>{console.log(error)});
    
  }

  removeFromCart(prodId):Observable<any>
  {
    console.log(`${this.baseUrl}/removeCart/${prodId}/${OrderdetailsService.currentOrderId}`)
    return this.http.delete(`${this.baseUrl}/removeCart/${prodId}/${OrderdetailsService.currentOrderId}`);
  }

  getTotalService():Observable<any>
  {
    console.log(`${this.baseUrl}getTotal/${OrderdetailsService.currentOrderId}`);
    return  this.http.get(`${this.baseUrl}getTotal/${OrderdetailsService.currentOrderId}`);
      
  }

  clearCart()
  {
    console.log(`${this.baseUrl}/remove`)
    return this.http.delete(`${this.baseUrl}/remove`);
  }

}
