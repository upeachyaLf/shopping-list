import { Injectable, EventEmitter } from '@angular/core';

import { Ingredent } from '../common/models/ingredent.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredentsChanged = new EventEmitter<Array<Ingredent>>();

  constructor() {}

  private ingredents: Array<Ingredent> = [
    {
      name: 'apples',
      amount: 5,
    },
    {
      name: 'tomatoes',
      amount: 10,
    },
  ];

  getIngredents(): Array<Ingredent> {
    return this.ingredents.slice();
  }

  addIngredent(ingredent: Ingredent) {
    this.ingredents.push(ingredent);
    this.ingredentsChanged.emit(this.ingredents.slice());
  }
}
