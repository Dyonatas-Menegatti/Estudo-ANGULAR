import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonData } from '../../models/pokemonData';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TransformadorPipe } from "../../pipes/transformador-pipe";

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe, TitleCasePipe, TransformadorPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {


  pokemon: PokemonData;

  constructor( private service: PokemonService) {
      this.pokemon = {
      id:0, name:'',
      sprites:{
        front_default: ''
      },types:[]
    };
   }

  ngOnInit(): void {
    this.getPokemon("pikachu");
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log('not found')
      }
    )
  }
}
