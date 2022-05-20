import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserSvcService {

  public isAuth = false;
  loginEmail = localStorage.getItem('email');
  loginPwd = localStorage.getItem('password');

  constructor(private router: Router) { }

  loginSvc(loginUser: UserLogin) {
    if (loginUser.email === this.loginEmail && loginUser.password === this.loginPwd) {
      this.setAuth(true);
      this.router.navigate(['day12']);
    } else {
      this.setAuth(false);
      alert('invalid info');
      this.router.navigate(['login']);
    }
  }

  setAuth(isLoggined: boolean) {
    this.isAuth = isLoggined
  }

  getAuth() {
    return this.isAuth;
  }

}
