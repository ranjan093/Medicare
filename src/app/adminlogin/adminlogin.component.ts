import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminLoginComponent implements OnInit {
  listProduct :undefined| any[];
  deleteMessage: undefined| string;

  constructor(private service:ProductService){}

  ngOnInit():void{
    this.service.productList().subscribe((result)=>{
      if(result){
        this.listProduct=result;
      }
   
    })
  }
  productDelete(id:any){
   this.service.deleteProduct(id).subscribe((result)=>{
    if(result){
      this.deleteMessage="Product is deleted.please refresh the page";
    }
   })
   setTimeout(()=>{this.deleteMessage=undefined}, 4000); 

  }

}
