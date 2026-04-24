import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title implements OnInit, OnChanges {
  nome: string = 'Angular';
  @Input() nomeInput: string = '';


  constructor() {
    console.log(`Constructor: ${this.nomeInput}`);
    this.nome = `Constructor: ${this.nome}`;
  }

  ngOnChanges(): void {
    console.log(`OnChanges: ${this.nomeInput}`);
    this.nome = `OnChanges: ${this.nome}`;
  }

  ngOnInit(): void {
    console.log(`OnInit: ${this.nomeInput}`);
    this.nome = `OnInit: ${this.nome}`;
  }
}
