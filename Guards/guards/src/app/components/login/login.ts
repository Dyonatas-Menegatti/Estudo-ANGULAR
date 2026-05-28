import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  senha: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  logar() {
    console.log(this.email);
    console.log(this.senha);

    if (this.email === 'admin@gmail.com' &&
        this.senha === '123456') {

      this.loginService.dologar();
      this.router.navigate(['/produtos']);
    } else {

      alert('E-mail ou senha inválidos');
      alert('E-mail:admin@gmail.com' + ' Senha:123456');

  }

    //this.loginService.dologar();
    //console.log(localStorage.getItem('token'));
  }


}
