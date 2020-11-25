import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
