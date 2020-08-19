import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './common/alert/alert.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListRoutingModule } from './shopping-list/shopping-list-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    RecipeModule,
    FormsModule,
    ShoppingListModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    ShoppingListRoutingModule,
    AppRoutingModule, // App routing module should only be imported after feature routing modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
