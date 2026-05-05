import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { CompAtributos } from "./comp-atributos/comp-atributos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card, CompAtributos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('diretivas-proj');

  isAliveCard: boolean = true;

  constructor() {

  }
}
