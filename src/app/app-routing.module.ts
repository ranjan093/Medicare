import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminAddProductComponent } from './adminaddproduct/adminaddproduct.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './auth.guard';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SearchComponent } from './search/search.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'admin', component: AdminComponent
  },
  {
    path:'adminlogin', component:AdminLoginComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'addproduct', component: AdminAddProductComponent
  },
  {path:'updateproduct/:id', component: UpdateProductComponent},
  {path:'user', component:UserComponent},
  {path:'search/:query', component:SearchComponent},
  {path:'propage/:id', component:ProductPageComponent},
  {path:'buynow', component:BuyNowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
