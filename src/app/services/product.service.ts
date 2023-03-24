import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   

  constructor(private http:HttpClient) { }
  addProduct(data:any){
   return this.http.post('http://localhost:3000/products',data)
    
  }
  productList(){
    return this.http.get<any>('http://localhost:3000/products')
  }
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  updProduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id)


  }
  popularProducts(){
    return this.http.get('http://localhost:3000/products?_limit=3');
  }
   searchProducts(val:any){
     return this.http.get('http://localhost:3000/products?name='+val);
  }
  addToCart(data:any){
   let cartData=[]
   let localCart=localStorage.getItem('LocalCart')
   if(!localCart){
     localStorage.setItem('localCart',JSON.stringify([data]))
   }
   else{
    cartData=JSON.parse('localCart')
    cartData.push(data)
    localStorage.setItem('localCart',JSON.stringify(cartData))
   }
  }
  cdList(cart1:any){
    return this.http.post('http://localhost:3000/cart',cart1);
  }
 
}
