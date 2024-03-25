import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../services/product-list.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit{

  productId:any;

  constructor(private router : Router, private actRoute:ActivatedRoute, public productService : ProductListService, private toastr : ToastrService){};

  ngOnInit(): void {
    this.productId = this.actRoute.snapshot.params['id"'];      
  }

  // Add items to cart
  addItemToCart(value:any){
    this.productService.cartProducts.push(value);
    this.toastr.success("Item added to cart");
  }

  //Navigate to Back Home
  goBack(){
      this.router.navigate(['items-list']);
  }

}
