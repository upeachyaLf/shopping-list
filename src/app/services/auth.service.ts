import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserCredentials } from '../common/models/userCredentials.model';
import { SignUpResponse } from '../common/models/authResponse.model';

const SIGNUP_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA2ipzT6uMlH2UY4ULDSlmsntcEcE-tCss';
const SIGNIN_URL =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA2ipzT6uMlH2UY4ULDSlmsntcEcE-tCss';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
        })
      );
  }

  signIn(userInfo: UserCredentials) {
    return this.http
      .post(SIGNIN_URL, {
        ...userInfo,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMsg =
            errorRes?.error?.error?.message ||
            'Error occured while Signning up!';
          return throwError(errorMsg);
        })
      );
  }
}
