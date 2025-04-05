import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    MatButton
  ],
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onSignUp() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user = {
      email: this.email,
      password: this.password
    };
  }

  onLoginClick() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
