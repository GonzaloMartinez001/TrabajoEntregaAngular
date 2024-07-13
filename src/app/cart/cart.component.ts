import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../gamepedia-products/game';
import { GameCartService } from '../game-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartListGames: Game[] = [];
  total: number = 0;

constructor(private cart: GameCartService) {

}
  
ngOnInit(): void {
  this.cart.getCartGames().subscribe(games => {
    this.cartListGames = games;
    this.calculateTotal();
  });
}

calculateTotal() {
  this.total = this.cartListGames.reduce((acc, game) => acc + (game.price * game.quantity), 0);
}

}
