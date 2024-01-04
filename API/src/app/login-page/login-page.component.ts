import { Component} from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private loginService: LoginService)
  {
    this.loginService.getShowWrongPasswordText().subscribe(data => this.showWrongPasswordText = data);
    this.loginService.getShowTimeOutText().subscribe(data => this.showTimeOutText = data);
  }

  username : string = '';
  password : string = '';

  showTimeOutText : boolean = false;
  showWrongPasswordText : boolean = false;


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
