import { Component, Input, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})


export class ItemsListComponent implements OnInit{

  constructor(public productService:ProductListService, private toastr: ToastrService, private router: Router) { }

  hideElement = true;

  @Input('search') searchedValue: string='';
  
  ngOnInit(): void {
      
  }

  // Add items to cart
  addItemToCart(value:any){
    this.productService.cartProducts.push(value);
    this.toastr.success("Item added to cart");
  }

  //Navigate to Item details page
  gotoDetails(item:any){
    this.router.navigate(['item-details', item.id]);
  }

}
