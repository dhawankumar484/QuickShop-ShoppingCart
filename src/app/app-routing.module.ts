import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { CartComponent } from './cart/cart.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"", redirectTo: 'items-list', pathMatch:"full"},
  {path:"items-list", component:ItemsListComponent},
  {path: 'item-details/:id"', component: ItemDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:"profile", component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
