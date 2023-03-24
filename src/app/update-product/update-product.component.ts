import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
    eProduct: undefined|any
  constructor(private route: ActivatedRoute, private service:ProductService){}
  ngOnInit():void{
    let productId = this.route.snapshot.paramMap.get('id')
    console.warn(productId)
    
   productId && this.service.updProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.eProduct=data;

   })

  }

  UpdatePro(data:any){
    
  }

}
