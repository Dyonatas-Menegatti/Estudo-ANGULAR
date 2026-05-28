import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const hasToken = localStorage.getItem('token');
  console.log('TOKEN GUARD:', hasToken);
  if (hasToken) {
    return true;
  }
  alert('Você precisa estar logado para acessar essa página!');
  return false;
};
