import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  timeOutCounter : number = 0;
  timeOutTimeLeft : number | undefined;

  token : string = '';

  url : string = 'http://keycloak.szut.dev/auth/realms/szut/protocol/openid-connect/token '
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
'Accept': 'application/x-www-form-urlencoded'})}
  

  login(username : string, password : string)
  {
    console.log(username)
    console.log(password)
    var currentTime = Date.now() / 1000;

   if(this.timeOutTimeLeft === undefined || currentTime-this.timeOutTimeLeft > 1) 
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
      
      let test = this.http.post(this.url, body, this.httpOptions)
      test.subscribe(token => console.log(token))
      //this.timeOutCounter++;
    }else
    {
      this.timeOutCounter = 0;
      this.timeOutTimeLeft = Date.now() / 1000; 
    }
   }
  }
}
