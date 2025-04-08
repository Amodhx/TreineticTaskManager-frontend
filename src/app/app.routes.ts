import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard',
    component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'tasks', component: DashboardComponent },
      { path: 'settings', component: SettingComponent }
    ]
  }
];
