import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  handleSubmit() {
    console.log(this.authForm);
  }

  toggleLoginMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
