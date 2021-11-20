import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { CustomerService } from 'src/app/customer.service';
import { OrderdetailsService } from 'src/app/orderdetails.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  products : Observable<Product[]>;
  cart : Product[];
  qty = {};
  basketCount:number =0;

  constructor(private productService : ProductService,private orderDetails : OrderdetailsService,private route : Router) { }

  ngOnInit() {
    this.reloadData();
    this.getCart()
  }

  reloadData()
  {
    this.products=this.productService.getProducts();
  }

  addToCart(prodId,qty)
  {
    console.log(prodId,qty);
    if(qty>0 && OrderdetailsService.currentOrderId != (undefined || 0) )
      {
        this.orderDetails.addToCartService(prodId,qty).subscribe((data)=>{console.log(data)},(error)=>{console.log(error)});
      }
      else
      {
        console.log("didnt add to cart.")
      }
  }

  getCart()
  {
    this.orderDetails.getCart().subscribe(
    (cart)=>{this.cart=cart;
      this.basketCount=this.cart.length;
      console.log("Hello Cart");
    console.log(this.cart);
    let item;
    for (let prods in this.cart)
    {
      item=this.cart[prods]
      console.log(this.qty[item.prodid]=item.qty);
    }
    
  }
    
    )
  }

  



}



