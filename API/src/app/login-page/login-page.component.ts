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
    this.loginService.login(username, password);
  }
}
