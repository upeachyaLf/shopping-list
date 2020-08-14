import { Component, OnInit, OnDestroy } from '@angular/core';

import { Ingredent } from '../common/models/ingredent.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredents: Array<Ingredent> = [];

  changeSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredents = this.shoppingListService.getIngredents();
    this.changeSubscription = this.shoppingListService.ingredentsChanged.subscribe(
      (ingredents: Array<Ingredent>) => {
        this.ingredents = ingredents;
      }
    );
  }

  ngOnDestroy(): void {
    this.changeSubscription.unsubscribe();
  }

  addToShoppingList(newIngredent: Ingredent) {
    this.shoppingListService.addIngredent(newIngredent);
  }
}
