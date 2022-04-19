import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  constructor(private service:AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      this.service.checkLoginObservable.subscribe(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']); 
          return false;
        }
        else
        return true
     
      })
     return true
  }
  
}
