import { Component } from '@angular/core';
import { LoginService } from '../login.service';

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

  inputUsername(username : string) : void 
  {
    this.username = username
    console.log(this.username);
  }

  inputPassword(password : string) : void 
  {
    this.password = password
    console.log(this.password)
  }

  btnLogin() : void 
  {
    
  }
}
