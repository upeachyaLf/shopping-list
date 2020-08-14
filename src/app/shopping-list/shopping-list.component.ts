import { Component, OnInit } from '@angular/core';

import { Ingredent } from '../common/models/ingredent.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredents: Array<Ingredent> = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredents = this.shoppingListService.getIngredents();
    this.shoppingListService.ingredentsChanged.subscribe(
      (ingredents: Array<Ingredent>) => {
        this.ingredents = ingredents;
      }
    );
  }

  addToShoppingList(newIngredent: Ingredent) {
    this.shoppingListService.addIngredent(newIngredent);
  }
}
