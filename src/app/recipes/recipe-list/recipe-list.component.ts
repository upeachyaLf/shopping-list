import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Array<Recipe> = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeItemClick(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
