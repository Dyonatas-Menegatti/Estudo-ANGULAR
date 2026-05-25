import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Card],
  template: `
  <h1>Aula de {{ title() }}</h1>
  <app-card/>
  <router-outlet/>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Service');
}
