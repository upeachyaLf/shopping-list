import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';

import { Recipe } from '../../common/models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipes: Array<Recipe> = [];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
