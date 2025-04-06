import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {UserModel} from '../../features/users/UserModel';
import Api_Call from '../../features/Api.calls';

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

  async onSignUp() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user = new UserModel(1,this.email,this.password);
    let newVar = await Api_Call.signIn(user);
    if (newVar.token) {
      localStorage.setItem('token', newVar.token);
      localStorage.setItem('id',newVar.id);
      localStorage.setItem('email',newVar.email);
      this.router.navigate(['/dashboard']);
    }else {
    }
  }

  onLoginClick() {
    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
