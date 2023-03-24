import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminAddProductComponent {
  addProductMessage: string | undefined;
  constructor(private productservice:ProductService){}
  addPro(data:any){
    
    this.productservice.addProduct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.addProductMessage="Product is added successfully";
      }
      setTimeout(()=> this.addProductMessage= undefined, 4000);

    })
  }

} 
