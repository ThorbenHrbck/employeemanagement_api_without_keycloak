import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BearerTokenHolderService } from './bearer-token-holder.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private bearerTokenHolder: BearerTokenHolderService, private router: Router) { }

  timeOutCounter : number = 0;
  timeOutTimeLeft : number | undefined;

  url : string = "http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token"
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})}

  //observed by login-page.component.ts
  showTimeOutText = new BehaviorSubject<boolean>(false);
  showWrongPasswordText = new BehaviorSubject<boolean>(false);

  //observed by app.component.ts
  tokenReceived = new BehaviorSubject<boolean>(true); //ZU FALSE ÄNDERN SOBALD MAN DEN TOKEN BEKOMMEN KANN
  

  login(username : string, password : string)
  {
    console.log(username)
    console.log(password)
    var currentTime = Date.now() / 1000;
    //timer only starts after 3 failed logins
   if(this.timeOutTimeLeft === undefined || currentTime-this.timeOutTimeLeft > 5) 
   {
    if(this.timeOutCounter < 3)
    {
      const body = new URLSearchParams(); 
      body.set('client_id', 'employee-management-service')
      body.set('username', username)
      body.set('password', password)
      body.set('grant_type', 'password')

      console.log(body)
      console.log(body.toString())
      
      this.http.post(this.url, body, this.httpOptions).subscribe(token => {console.log(token);
        if(token)
        {
          this.timeOutCounter = 0;
          this.bearerTokenHolder.safeToken(token.toString());
          this.router.navigateByUrl("/home");
          this.tokenReceived.next(true); //setting the boolean to true will show the hidden html-div in app-component.html
        }
      }, err => this.handleError(err))
      this.timeOutCounter++;
    }else
    {
      this.timeOutCounter = 0;
      this.timeOutTimeLeft = Date.now() / 1000; 
    }
   }
  }

  handleError(error: string) : void
  {
    console.log(error);
    this.showWrongPasswordText.next(true);

    if(this.timeOutCounter === 3)
    {
      this.showTimeOutText.next(true);
    }else
    {
      this.showTimeOutText.next(false);
    }
  }

  getShowTimeOutText() : Observable<boolean> 
  {
    return this.showTimeOutText.asObservable()
  }

  getShowWrongPasswordText() : Observable<boolean> 
  {
    return this.showWrongPasswordText.asObservable();
  }

  isTokenReceived(): Observable<boolean>
  {
    return this.tokenReceived.asObservable();
  }
}
