import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './items-list/banner/banner.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsListComponent,
    EllipsisPipe,
    CartComponent,
    BannerComponent,
    ItemDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 2000,
      }
    ) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
