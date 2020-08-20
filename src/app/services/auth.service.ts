import { throwError, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../common/models/user.model';
import { UserCredentials } from '../common/models/userCredentials.model';
import {
  SignUpResponse,
  SignInResponse,
} from '../common/models/authResponse.model';
import { environment } from '../../environments/environment';

const SIGNUP_URL = environment.SIGNUP_URL + environment.API_KEY;

const SIGNIN_URL = environment.SIGNIN_URL + environment.API_KEY;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  user = new Subject<User>();

  signUp(userInfo: UserCredentials) {
    return this.http
      .post<SignUpResponse>(SIGNUP_URL, {
        ...userInfo,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMsg =
            errorRes?.error?.error?.message ||
            'Error occured while Creating new user!';
          return throwError(errorMsg);
        }),
        tap((resData) => {
          this._handleAuthentication(resData);
        })
      );
  }

  signIn(userInfo: UserCredentials) {
    return this.http
      .post<SignInResponse>(SIGNIN_URL, {
        ...userInfo,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMsg =
            errorRes?.error?.error?.message ||
            'Error occured while Signning up!';
          return throwError(errorMsg);
        }),
        tap((resData) => {
          this._handleAuthentication(resData);
        })
      );
  }

  autoSignin() {
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      this._handleAuthentication(JSON.parse(userInfo));
    }
  }

  private _handleAuthentication(resData) {
    let userObject = {
      user: resData.email,
      email: resData.email,
      token: resData.idToken,
      tokenExpirationDate: new Date(
        new Date().getTime() + Number(resData.expiresIn) * 1000
      ),
    };
    this.user.next(userObject);
  }
}
