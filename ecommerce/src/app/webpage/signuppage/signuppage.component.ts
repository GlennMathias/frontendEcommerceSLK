import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  model: any = {};

  //model.CustId= CustomerService.getActiveId();

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

  signup()
  {
    console.log(this.model);
    this.customerService.signUp(this.model).subscribe((success)=>{console.log("success "+success)},(err)=>{console.log("error "+err)});
  }

}
