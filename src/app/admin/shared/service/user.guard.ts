import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }
  // @ts-ignore
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isAuthenticated()){
      return true;
    } else {
      console.log('Not')
      this.router.navigate(['/admin', 'login'],
        {
          queryParams: {
            loginAgain: true
          }
        }
      )
      this.auth.logout();

      }
    }

}
