import { Component, OnInit } from '@angular/core';

import { Recipe } from '../common/models/recipe.model';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  selectedRecipe: Recipe;
}
