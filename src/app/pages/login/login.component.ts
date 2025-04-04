import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    MatFormField,
    MatLabel,
    MatFormField,
    MatInput,
    MatButton
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {
  }
  onSignup() {
    this.router.navigate(['/dashboard']); // Redirect after signup
  }
}
