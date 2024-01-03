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

  url : string = 'http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token'
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"})}

  showTimeOutText : boolean = false;
  showWrongPasswordText : boolean = false;

  tokenReceived = new BehaviorSubject<boolean>(true); //ZU FALSE ÄNDERN SOBALD MAN DEN TOKEN BEKOMMEN KANN
  

  login(username : string, password : string)
  {
    console.log(username)
    console.log(password)
    var currentTime = Date.now() / 1000;
    

   if(this.timeOutTimeLeft === undefined || currentTime-this.timeOutTimeLeft > 120) 
   {
    if(this.timeOutCounter < 3)
    {
      const body = new URLSearchParams()
      body.set('grant_type', 'password')
      body.set('client_id', 'employee-management-service')
      body.set('username', username)
      body.set('password', password)

      console.log(body)
      console.log(body.toString())
      
      this.http.post(this.url, body, this.httpOptions).subscribe(token => {console.log(token);
        if(token)
        {
          this.timeOutCounter = 0;
          this.bearerTokenHolder.safeToken(token.toString());
          this.router.navigateByUrl("/home");
          this.tokenReceived.next(true);
        }
      })
      this.timeOutCounter++;
      this.showWrongPasswordText = true;
    }else
    {
      this.timeOutCounter = 0;
      this.timeOutTimeLeft = Date.now() / 1000; 
      this.showTimeOutText = true;
    }
   }
  }

  getShowTimeOutText() : boolean 
  {
    return this.showTimeOutText
  }

  getShowWrongPasswordText() : boolean
  {
    return this.showWrongPasswordText;
  }

  isTokenReceived(): Observable<boolean>
  {
    return this.tokenReceived.asObservable();
  }
}
