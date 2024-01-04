import {Component} from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Mitarbeiterverwaltungssystem'
  tokenReceived : boolean = true;

  constructor(private loginService: LoginService)
  {
    loginService.isTokenReceived().subscribe(data => this.tokenReceived = data);
  }
}
