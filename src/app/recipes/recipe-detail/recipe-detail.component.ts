import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../common/models/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    let currentId = this.route.snapshot.params['id'];
    this.selectedRecipe = this.recipeService.findFromId(currentId);

    this.route.params.subscribe((params) => {
      this.selectedRecipe = this.recipeService.findFromId(params['id']);
    });
  }

  sendToShoppingList() {
    this.shoppingListService.addIngredentsArray(this.selectedRecipe.ingredents);
  }
}
