import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BearerTokenHolderService {

  constructor() { }
  
  safeToken(token : string): void 
  {
    //stores the token as a string as long as the website is running
    localStorage.setItem('token', token);
  }
}
