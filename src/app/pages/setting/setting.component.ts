import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {Router} from '@angular/router';
import Api_Call from '../../features/Api.calls';
import {UserModel} from '../../features/users/UserModel';
@Component({
  selector: 'app-setting',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton
  ],
  templateUrl: './setting.component.html',
  standalone: true,
  styleUrl: './setting.component.css'
})
export class SettingComponent{
  user = {
    email: localStorage.getItem('email')
  };
  constructor(private router:Router) {
  }
  password = {
    current: '',
    new: '',
    confirm: ''
  };

  onUpdateProfile() {
    console.log('Profile updated:', this.user.email);
    alert("This feature does not work right now.");
  }

  async onChangePassword() {
    if (this.password.new !== this.password.confirm) {
      alert("Passwords do not match!");
      return;
    }
    if (this.user.email){
        let newVar = await Api_Call.changePassword(new UserModel(1,this.user.email,this.password.confirm));
        if (newVar){
          alert("Password changed!!")
          this.password.new = ''
          this.password.confirm = ''
      }else {
          alert("Cant change password right now!!");
        }
    }

    console.log('Password changed:', this.password);
  }

  onLogout() {
    this.router.navigate(['']);
  }
}
