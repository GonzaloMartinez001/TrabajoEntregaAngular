import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './gamepedia-products/game';

/* Maneja la logica del carrito de compras*/
@Injectable({
  providedIn: 'root'
})
export class GameCartService {
  [x: string]: any;

  private cartListGames: Game[] = [];
  observerListGame: BehaviorSubject<Game[]> = new BehaviorSubject(this.cartListGames);
  
  constructor() { }
  addToCart(game: Game) {
    let item: Game = this.cartListGames.find((v1) => v1.name == game.name)!;  //find busca elementos comparando el valor con el name
    if(!item){
      this.cartListGames.push({ ... game}); //clona el objeto
    }
    else {
    item.quantity ++;
    }
    console.log(this.cartListGames);
    this.observerListGame.next(this.cartListGames); //Actualizo valor //Equivale al emitt de eventos
  }

  getCartGames() {
    return this.observerListGame.asObservable();
  }
}
