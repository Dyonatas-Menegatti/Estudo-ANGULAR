import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  dologar() {
    localStorage.setItem('token', 'fdsfkl123123');
  }

  dodeslogar() {
    localStorage.removeItem('token');
  }
}
