import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public checkLogin = new BehaviorSubject<boolean>(false);
  checkLoginObservable = this.checkLogin.asObservable()


  public login() {
    localStorage.setItem('ACCESS_TOKEN', "access_token");
    this.isLoggedIn();
  }

  public isLoggedIn() {
    const isLoggedIn = localStorage.getItem('ACCESS_TOKEN') !== null;
    this.checkLogin.next(isLoggedIn)

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    this.isLoggedIn();
  }
}
