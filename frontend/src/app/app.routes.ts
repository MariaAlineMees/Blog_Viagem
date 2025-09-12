import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './admin/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { WelcomeComponent } from './admin/dashboard/welcome/welcome';
import { CategoryManagement } from './admin/category-management/category-management';
import { PostManagement } from './admin/post-management/post-management';
import { Statistics } from './admin/statistics/statistics';
import { PostDetailsComponent } from './components/post-details/post-details';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:id', component: HomeComponent },
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin/dashboard',
    component: Dashboard,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'manage-categories', component: CategoryManagement },
      { path: 'manage-posts', component: PostManagement },
      { path: 'statistics', component: Statistics }
    ]
  },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: '**', redirectTo: '' }
];