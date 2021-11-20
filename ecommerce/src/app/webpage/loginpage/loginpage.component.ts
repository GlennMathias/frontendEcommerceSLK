import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { OrderdetailsService } from 'src/app/orderdetails.service';
import { Customer } from './customer';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  model :any ={};
  activeId:number;


  constructor(private customerService : CustomerService,private orderDetails : OrderdetailsService,private router : Router) { 
    
  }

  ngOnInit() {
  }

  loginUser()
  {
    this.customerService.login(this.model.userName,this.model.password).subscribe((actId:number)=>{
        this.activeId=actId;
        if (this.activeId != -1)
      {
        console.log("Logged in !!");
        console.log("Welcome User "+this.activeId);
        CustomerService.setActiveId(this.activeId);
        this.orderDetails.createOrder();
        this.router.navigate(["product"]);
      }
    });
  }

  printActUser()
  {
    this.customerService.printActUser();
  }

}



