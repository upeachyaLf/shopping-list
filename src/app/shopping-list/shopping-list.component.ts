import { Component, OnInit } from '@angular/core';

import { Ingredent } from '../common/models/ingredent.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredents: Array<Ingredent> = [
    {
      name: 'apples',
      amount: 5,
    },
    {
      name: 'tomatoes',
      amount: 10,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  addToShoppingList(newIngredent: Ingredent) {
    this.ingredents.push(newIngredent);
  }
}
