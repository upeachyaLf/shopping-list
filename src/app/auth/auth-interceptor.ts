import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        const modifiedReq = req.clone({
          headers: req.headers.append('auth', user.token),
        });
        return next.handle(modifiedReq);
      })
    );
    return next.handle(req);
  }
}
