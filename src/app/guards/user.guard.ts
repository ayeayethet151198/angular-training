import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserSvcService } from '../services/user-svc.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router,
    private userSvc: UserSvcService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //const isAuthenticated = this.userSvc.getAuth();
    //if (!isAuthenticated) {
    //  this.router.navigate(['login']);
    //  return false;
    //}
    //return true;
    return true;
  }

}
