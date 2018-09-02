import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'register-user', loadChildren: './pages/register-user/register-user.module#RegisterUserPageModule' },
  { path: 'gym-list', loadChildren: './pages/gym-list/gym-list.module#GymListPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'register-gym', loadChildren: './pages/register-gym/register-gym.module#RegisterGymPageModule' },
  { path: 'gym-profile', loadChildren: './pages/gym/gym-profile/gym-profile.module#GymProfilePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
