import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  products:any = [];
  cartProducts:any = [];
  searchValue:any='';
  activeRoutePath:any='';
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(`https://fakestoreapi.com/products`).subscribe(res=>{
      this.products = res; 
    })
  }


}
