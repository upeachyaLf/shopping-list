import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm: FormGroup;
  loading: boolean = false;
  displayAlert: boolean = false;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  handleSubmit() {
    this.loading = true;
    this.isLoginMode ? this.handleSignIn() : this.handleSignUp();
  }

  handleSignIn() {
    this.authService.signIn(this.authForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['/']);
        localStorage.setItem('userInfo', JSON.stringify(res));
      },
      (err) => {
        this.loading = false;
        this.errorMessage = err;
        this.displayAlert = true;
      }
    );
  }

  handleSignUp() {
    this.authService.signUp(this.authForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      (err) => {
        this.loading = false;
        this.errorMessage = err;
        this.displayAlert = true;
      }
    );
  }

  toggleLoginMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  closeAlert() {
    this.displayAlert = false;
  }
}
