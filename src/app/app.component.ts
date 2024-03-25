import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchValue:string='';

  constructor(){}

  ngOnInit(): void {
      
  }
  title = 'shopping_cart';

}
