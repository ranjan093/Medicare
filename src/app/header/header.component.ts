import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: String='default';
  cartItems=0;
  constructor(private router:Router){}
  ngOnInit():void{
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('admin')&& val.url.includes('admin')){
          this.menuType="admin"
        }
        else if(localStorage.getItem('user')){
          this.menuType="user"
         }
        else {
         this.menuType="default"
        }
      }
    }
    )
    let cart=localStorage.getItem('localCart')
    if(cart){
      this.cartItems=JSON.parse(cart).length
    }
    
  }
  logOut(){
    localStorage.removeItem('admin');
    this.router.navigate(['/']);
  }
  userLogOut(){
    localStorage.removeItem('user');
    this.router.navigate(['/'])
  }
  submitSearch(value:any){
    console.warn(value)
    this.router.navigate(['search/'+value])
    
  }


}
