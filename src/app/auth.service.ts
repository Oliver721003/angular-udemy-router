import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor() {}

  isAuthenticated(): Observable<boolean> {
    return of(this.loggedIn).pipe(delay(800));
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
