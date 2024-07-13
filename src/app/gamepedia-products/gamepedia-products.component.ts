import { Component } from '@angular/core';
import { Game } from './game';
import { GameCartService } from '../game-cart.service';

@Component({
  selector: 'app-gamepedia-products',
  templateUrl: './gamepedia-products.component.html',
  styleUrl: './gamepedia-products.component.scss'
})
export class GamepediaProductsComponent {

  games: Game[] = [
    {
      name: "Red Dead Redemption 2",
      price: 70,
      stock: 8,
      image: "assets/images/rdr2.jpg",
      year: 2018,
      genre: "Action, Action-Adventure",
      developer: "Rockstar Games",
      quantity: 1,
    },
    {
      name: "The Witcher 3: Wild Hunt",
      price: 40,
      stock: 10,
      image: "assets/images/tw3.jpg",
      year: 2015,
      genre: "Role-Playing, Action-Adventure",
      developer: "CD Projekt Red",
      quantity: 1,
    },
    {
      name: "The Legend of Zelda: Breath of the Wild",
      price: 60,
      stock: 5,
      image: "assets/images/botw.jpg",
      year: 2017,
      genre: "Action-Adventure",
      developer: "Nintendo",
      quantity: 1,
    },
    {
      name: "Assassin's Creed 2",
      price: 30,
      stock: 3,
      image: "assets/images/ac2.jpg",
      year: 2009,
      genre: "Platformer, Action-Adventure",
      developer: "Ubisoft",
      quantity: 1,
    },
    {
      name: "Dead Island",
      price: 35,
      stock: 5,
      image: "assets/images/ds.jpg",
      year: 2011,
      genre: "Action, Role-Playing, First-Person Shooter",
      developer: "Techland",
      quantity: 1,
    },
    {
      name: "Resident Evil 4",
      price: 30,
      stock: 8,
      image: "assets/images/re4.jpg",
      year: 2005,
      genre: "Action, Horror, Third-Person Shooter",
      developer: "Capcom",
      quantity: 1,
    },
    {
      name: "Portal",
      price: 20,
      stock: 8,
      image: "assets/images/portal.jpg",
      year: 2007,
      genre: "Action, Puzzle, First-Person Shooter",
      developer: "Valve",
      quantity: 1,
    },
    {
      name: "Portal 2",
      price: 20,
      stock: 3,
      image: "assets/images/portal2.jpg",
      year: 2011,
      genre: "Action, Puzzle, First-Person Shooter",
      developer: "Valve",
      quantity: 1,
    },
    {
      name: "Far Cry 3",
      price: 35,
      stock: 5,
      image: "assets/images/fc3.jpg",
      year: 2012,
      genre: "First-Person Shooter, Action-Adventure",
      developer: "Ubisoft",
      quantity: 1,
    }
  ];

  constructor(private cart: GameCartService) {

  }

  addToCart(game: Game): void{
    this.cart.addToCart(game);
    game.stock --;
    
  }
  
}
