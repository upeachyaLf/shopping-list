import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { SelectRecipeComponent } from './select-recipe/select-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: SelectRecipeComponent },
      // This should be before routes containing :id
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], //NOTE: use .forChild for feature routing modules
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
