import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  isproduct: undefined | any
  productQuantity: number = 1
  constructor(private actroute: ActivatedRoute, private productservice: ProductService, private router:Router) { }

  ngOnInit(): void {
    let pro = this.actroute.snapshot.paramMap.get('id');
    this.productservice.updProduct(pro).subscribe((result) => {
      if (result) {
        this.isproduct = result

      }
    })
  }
  quant1() {
    if (this.productQuantity > 1) {
      this.productQuantity -= 1
    }
  }
  quant2() {
    if (this.productQuantity < 5) {
      this.productQuantity += 1
    }
  }
  addCart() {
    if (this.isproduct) {
      this.isproduct.quantity = this.productQuantity;
      if (localStorage.getItem('user')) {
        this.productservice.addToCart(this.isproduct)

      }
      let data = localStorage.getItem('localCart')
      if (data) {
        let cartDataList: any[] = JSON.parse(data)
        let user = localStorage.getItem('user')
        let userId = user && JSON.parse(user).id

        cartDataList.forEach((product:any,index)=>{
        let cart1:any={
           ...product,
           userId,
        }
       setTimeout(()=>{
        this.productservice.cdList(cart1).subscribe((result)=>{
          if(result){
            console.warn("submit to db")
          }
        })
        
        if(cartDataList.length===index+1){
          localStorage.removeItem('localCart')}
       },500)
       
        })
      }
    }


  }
  buy(){
    this.router.navigate(['buynow'])

  }

}





