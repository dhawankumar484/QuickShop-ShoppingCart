import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  totalMRP:any = 0;
  platformFee:any = 20;
  shippingFee:any=40;

  constructor( public productService: ProductListService, private toastr: ToastrService, private router: Router){}

  ngOnInit(): void {
    this.totalCartMRP();
      
  }

  //Total MRP
  totalCartMRP(){
    for(let i=0; i<this.productService.cartProducts.length; i++){
      this.totalMRP = this.totalMRP + this.productService.cartProducts[i].price;
    }
  }

  //Remove product from cart
  removeProduct(value:any){
    this.productService.cartProducts.splice(this.productService.cartProducts.indexOf(value), 1);
    this.totalMRP = 0;
    this.totalCartMRP();
    this.toastr.success("Your item is removed");
  }

  //Navigate To Home
  goToHome(){
    this.router.navigate(['items-list']);
  }

  //Place Order
  placeOrder(){
    this.productService.cartProducts.length=0;
    this.toastr.success("Your Order Placed Succesfully!");
  }


}
