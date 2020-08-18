import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';

import { Recipe } from '../../common/models/recipe.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  constructor(private recipeService: RecipeService) {}

  recipes: Array<Recipe> = [];
  subscription: Subscription;

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Array<Recipe>) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
