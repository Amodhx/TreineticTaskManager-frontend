import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import Api_Call from '../../features/Api.calls';
import {UserModel} from '../../features/users/UserModel';
import {Alert} from 'bootstrap';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    MatFormField,
    MatLabel,
    MatFormField,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router) {
  }
  async onSignup() {
    // @ts-ignore
    event.preventDefault();
    const user = new UserModel(1,this.email,this.password);
    let newVar = await Api_Call.signIn(user);
    if (newVar.token) {
      localStorage.setItem('token', newVar.token);
      localStorage.setItem('id',newVar.id);
      localStorage.setItem('email',newVar.email);
      console.log(localStorage)
      this.router.navigate(['/dashboard']);
    }else {
    }
  }
}
