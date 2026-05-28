import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Sobre } from './components/sobre/sobre';
import { Produtos } from './components/produtos/produtos';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    component: Sobre
  },
  {
    path: 'produtos',
    component: Produtos,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '**',
    redirectTo: ''
  }
];
