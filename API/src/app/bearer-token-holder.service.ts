import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BearerTokenHolderService {

  constructor() { }
  
  safeToken(token : string): void 
  {
    localStorage.setItem('token', token);
  }
}
