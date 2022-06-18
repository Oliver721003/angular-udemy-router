import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          return this.router.parseUrl('/');
        }
      })
    );
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          return this.router.parseUrl('/');
        }
      })
    );
  }
}
