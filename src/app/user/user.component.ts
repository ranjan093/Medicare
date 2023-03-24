import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  isLogged =true 
  constructor(private usrserv:UserService){}

  userLogUp(data:any){
    this.usrserv.signUp(data)
  }
  userLogIn(data:any){
    this.usrserv.logIn(data)
    
  }
  openSignUp(){
    this.isLogged=false

  }
  openLogIn(){
    this.isLogged=true
  }

}
