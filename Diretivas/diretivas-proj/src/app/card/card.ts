import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit{

  produtos: string[] = [];
  menuType: string = "";

  constructor() {
    this.produtos = ['Notebook', 'Smartphone', 'Tablet', 'Monitor', 'Teclado'];
    }
  ngOnInit(): void {

  }

  adicionar() {
    this.produtos.push('Produto ' + (this.produtos.length + 1));
  }

  remover(index: number) {
    this.produtos.splice(index, 1);
    alert('Removendo o produto: ' + index)
  }
}
