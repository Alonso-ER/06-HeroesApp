import { Injectable, inject, Pipe } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router, UrlTree } from '@angular/router';
import { tap, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard {
  constructor(

  ) { }


}

const isAuthenticated = (): | boolean | Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAuthentication().pipe(
    take(1),
    tap((isAuthenticated: boolean) => {
      if( !isAuthenticated ){
        router.navigate(['./auth/login'])
      }
    }),
  );
}



export const CanActivateAuthGuard: CanActivateFn = isAuthenticated;
export const CanMatchAuthGuard: CanMatchFn = isAuthenticated;


