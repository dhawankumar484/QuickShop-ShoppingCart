import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hideElement = false;

  constructor(public router : Router, public productService : ProductListService){}

  ngOnInit(): void {
    this.hideElement = false;
      
  }

  //Navigate to Home
  goToHome(){
    this.router.navigate(['items-list']);
  }

  //Navigate to Profile Page
  goToProfile(){
    this.router.navigate(['profile']);
  }

  //Navigate to Cart
  goToCart(){
    this.router.navigate(['cart']);
  }

  //Search value
  filter(event:any){
    this.productService.searchValue = event.target.innerText;
  }
}
