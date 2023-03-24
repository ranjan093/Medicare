import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private admin:AdminService, private router:Router){}
  isLogged= false
  ngOnInit():void{
    this.admin.reloadAdmin()
  }
  
  signUp(data: any):void {
    this.admin.userSignUp(data)
       }
       
       
    
       logIn(data:any):void{
        this.admin.userLogIn(data).subscribe((result)=>{                                   
             if(result){
             
            this.router.navigate(['adminlogin'])
           }
          });

   
  }
  
  signIn(){
    this.isLogged= true 
   }
   logUp(){
     this.isLogged= false
   }

    
  }
  


