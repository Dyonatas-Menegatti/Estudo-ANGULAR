import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "./title/title";
import { CheckSample } from "./check-sample/check-sample";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, CheckSample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('life-cycle');

  isAliveCheckSample: boolean = true;

  constructor() {}

  disposeCheckSample() {
    this.isAliveCheckSample = false;
  }

}
