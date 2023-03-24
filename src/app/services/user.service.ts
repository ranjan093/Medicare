import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }
  signUp(data:any){
  this.http.post('http://localhost:3000/user',data,{observe:'response'})
  .subscribe((result)=>{
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['/']);

    }
  })
  }
  logIn(data:any){
    this.http.get<any>('http://localhost:3000/user?email='+data.email+'&password='+data.password ,{observe:'response'} )
    .subscribe((result)=>{
      if(result){
        console.warn(result);
        localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['/']);
        
      }
    })
    
  }
}
