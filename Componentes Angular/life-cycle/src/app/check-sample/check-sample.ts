import { Component, OnInit, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  imports: [],
  templateUrl: './check-sample.html',
  styleUrl: './check-sample.css',
})
export class CheckSample implements OnInit, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  quantidade: number = 0;

  constructor() {
    console.log('CheckSample: constructor');
  }

  adicionar() {
    this.quantidade ++;
  }

  decrementar() {
    this.quantidade --;
  }

  ngOnInit(): void {
    console.log('CheckSample: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('CheckSample: ngOnDestroy = Detonado quando o componente é destruído');
  }

  ngDoCheck(): void {
    console.log('CheckSample: ngDoCheck');
  }

  ngAfterContentChecked(): void {
    console.log('CheckSample: ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('CheckSample: ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('CheckSample: ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('CheckSample: ngAfterViewInit');
  }
}
