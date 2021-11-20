import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './webpage/signuppage/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl="http://localhost:8080/";
  private static activeId:number=-1;
  actId=0;

  constructor(private http:HttpClient) { }

  login(userName, password):Observable<any>
  {
    return this.http.get(`${this.baseUrl+"login/"+userName+"/"+password}`);
  }

  signUp(customer : Customer): Observable<any>
  {
    return this.http.post(`${this.baseUrl+"/addCustomer"}`,customer);
  }

  getUserDetails(userId):Observable<any>
  {
    console.log(`${this.baseUrl}/getCustomerDetails/${userId}`)
    return this.http.get(`${this.baseUrl}/getCustomerDetails/${userId}`);
  }

  updateUserDetails(userData)
  {
    console.log(`${this.baseUrl}/updateProfile/${CustomerService.getActiveId()}`)
    return this.http.put(`${this.baseUrl}/updateProfile/${CustomerService.getActiveId()}`,userData);
  }

  changePassword()
  {
    console.log("Change Password Here");
  }

  printActUser()
  {
    console.log(CustomerService.activeId);
  }
  
   static getActiveId():number
  {
    return this.activeId;
  }

  static setActiveId(id:number)
  {
    this.activeId=id;
    
  }

}
