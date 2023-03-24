import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminAddProductComponent } from './adminaddproduct/adminaddproduct.component';

import { UpdateProductComponent } from './update-product/update-product.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { BuyNowComponent } from './buy-now/buy-now.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminAddProductComponent,
  
    UpdateProductComponent,
       UserComponent,
       SearchComponent,
       ProductPageComponent,
       BuyNowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
