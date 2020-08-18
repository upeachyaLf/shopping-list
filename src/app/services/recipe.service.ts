import { Injectable } from '@angular/core';

import { Recipe } from '../common/models/recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged = new Subject<Array<Recipe>>();

  constructor() {}

  private recipes: Array<Recipe> = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Cheezy meaty pizza!!',
      ingredents: [{ name: 'cheese', amount: 2 }],
      imagePath:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HygzsIuSbo6pgHy39s4rLwHaDt%26pid%3DApi&f=1',
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Double patty with cheese and bacon',
      ingredents: [
        { name: 'cheese', amount: 2 },
        { name: 'bacon', amount: 3 },
      ],
      imagePath:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KZUTwF3-Zw1dIJxo67Ur4QHaFj%26pid%3DApi&f=1',
    },
  ];

  getRecipes() {
    // NOTE: for preventing mutation
    return this.recipes.slice();
  }

  findFromId(id: number) {
    return this.recipes.find((recipe) => recipe.id == id);
  }

  saveRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, recipe: Recipe) {
    const index = this.recipes.findIndex((item) => item.id == id);
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}
