import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private loginService: LoginService)
  {}

  username : string = '';
  password : string = '';

  timeOutCounter : number = 0;
  timeOutTimeLeft : number | undefined;

  showBlockText : boolean = false;
  

  inputUsername(username : string) : void 
  {
    this.username = username
   
  }

  inputPassword(password : string) : void 
  {
    this.password = password
  }

  btnLogin(username : string, password : string) : void 
  {
    var currentTime = Date.now() / 1000;

   if(this.timeOutTimeLeft === undefined || currentTime-this.timeOutTimeLeft > 1) 
   {
    this.showBlockText = false;
    if(this.timeOutCounter < 3)
    {
      this.timeOutCounter++;
    }else
    {
      this.timeOutCounter = 0;
      this.timeOutTimeLeft = Date.now() / 1000; 
      this.showBlockText = true;
    }
   }
  }
}
