import { Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { Home } from './home/home';
import { Profile } from './profile/profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'profile',
    component: Profile
  },
  {
    path: '**',
    component: NotFoundError
  }
];
