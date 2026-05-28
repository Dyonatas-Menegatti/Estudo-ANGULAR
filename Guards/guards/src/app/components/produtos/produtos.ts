import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';

@Component({
  selector: 'app-produtos',
  imports: [],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

  constructor(private loginService: LoginService,
    private router: Router) { }

  deslogar() {

    this.loginService.dodeslogar();

    this.router.navigate(['/login']);

  }
}
