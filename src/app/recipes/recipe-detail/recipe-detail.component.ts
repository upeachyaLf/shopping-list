import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../common/models/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  sendToShoppingList() {
    this.shoppingListService.addIngredentsArray(this.selectedRecipe.ingredents);
  }
}
