import { Component, IterableDiffers, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/orderdetails.service';
import { Router} from '@angular/router'
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Product } from '../product';
import { ProductService } from 'src/app/product.service';
import { CustomerService } from 'src/app/customer.service';




@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  cartItems: Observable<Cart[]>; 
  prod: Observable<Product>;
  total: number;
  

  constructor(private cartService : OrderdetailsService,private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getTotal();
    this.getOrders();
    
  }

  getOrders()
  {
    this.cartItems=this.cartService.getCart();
    console.log(this.cartItems)
  }

  getProdByPId(prodId)
  {
    this.prod=this.productService.getProdsFromProdId(prodId);
    console.log(this.prod)
  }

  getTotal()
  {
    this.cartService.getTotalService().subscribe(
      (res:number)=>{
        
        this.total=res;
        console.log(this.total);
      }
      );;
    console.log("Inside Get total")
    console.log(this.total);
  }

  removeFromCart(prodid)
  {
    console.log("ts function says"+ prodid);
    this.cartService.removeFromCart(prodid).subscribe(
      (data)=>{this.getTotal();
        this.getOrders();}
    )
  }

  logout()
  {
    this.cartService.clearCart();
    CustomerService.setActiveId(-1);
    OrderdetailsService.currentOrderId=0;
  }

}
