import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit{

  constructor(private activeRouter: ActivatedRoute, private navegador: Router) {
    // esse ira trazer apenas o ID da rota, ou seja, o numero que esta sendo passado
    this.activeRouter.params.subscribe(
      res => console.log(res)
    )
    // esse ira trazer o ID e o token da rota, ou seja, os dados que estão sendo passados por parametro
    this.activeRouter.firstChild?.params.subscribe(
      res => console.log(res)
    )
    // esse tras os dados que estão sendo passados por query, ou seja, os dados que estão sendo passados depois do ? na url
    this.activeRouter.queryParams.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {
    // esse ira redirecionar o usuario para a pagina inicial depois de 5 segundos
    setInterval(() => {
      this.navegador.navigate(['/'])
    }, 5000)
  }
}
