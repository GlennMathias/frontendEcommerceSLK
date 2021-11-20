import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})


export class ProfilepageComponent implements OnInit {

  user :Customer;
  actId:number;
  passConfirm :string;
  constructor(private customerService:CustomerService) {  }

  ngOnInit() {
    this.getCustDetails();
    this.actId=CustomerService.getActiveId();
    console.log(this.actId);
  }

  getCustDetails()
  {
    this.customerService.getUserDetails(CustomerService.getActiveId()).subscribe(
      (u)=>{
        this.user=u;
        console.log(this.user);
      }
    );
  }

  updateDetails()
  {
    this.customerService.updateUserDetails(this.user);
    console.log("Update Details")
    console.log(this.user)
    if (this.user.custpassword == this.passConfirm)
    {
      this.customerService.changePassword()
    }

  }

}
