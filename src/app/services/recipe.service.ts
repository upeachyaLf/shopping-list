import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  private recipes: Array<Recipe> = [
    {
      name: 'Pizza',
      description: 'Cheezy meaty pizza!!',
      imagePath:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HygzsIuSbo6pgHy39s4rLwHaDt%26pid%3DApi&f=1',
    },
    {
      name: 'Burger',
      description: 'Double patty with cheese and bacon',
      imagePath:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KZUTwF3-Zw1dIJxo67Ur4QHaFj%26pid%3DApi&f=1',
    },
  ];

  getRecipes() {
    // NOTE: for preventing mutation
    return this.recipes.slice();
  }
}
