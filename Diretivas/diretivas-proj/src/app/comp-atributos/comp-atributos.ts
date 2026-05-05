import { NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.html',
  styleUrl: './comp-atributos.css',
  imports: [NgClass, NgStyle, FormsModule, NgTemplateOutlet],
})
export class CompAtributos implements OnInit {
  lista: string[] = [];
  estilo: string = "enable";
  corfundo: string = "black";
  corDafonte: string = "white";
  item: string = "";
  


  constructor() {
  }
  ngOnInit() {
  }

  trocar() {
    if(this.estilo == "enable"){
      this.estilo = "disable";
    } else {
      this.estilo = "enable";
    }
  }
  adicionarLista() {
    this.lista.push(this.item);
    this.item = "";
  }
}
