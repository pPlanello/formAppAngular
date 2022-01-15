import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  person: Person;

  newGame: string = '';

  constructor() {
    this.person = {
      name: 'Plaxwell',
      favorites: [
        {id: 1, name: 'Overwatch'}
      ]
    }
  }

  ngOnInit(): void {
  }

  save() {

  }

  addGame() {
    console.log(this.newGame);
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    };
    this.person.favorites.push( newFavorite );

    this.newGame = '';
  }

  deleteGame(index: number) {
    this.person.favorites.splice(index, 1);
  }

}
